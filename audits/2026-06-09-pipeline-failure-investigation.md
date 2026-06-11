# Pipeline failure investigation — 2026-06-08 and 2026-06-09 consecutive PUBLISH GATE: BLOCK-CRITICAL

| Field | Value |
|---|---|
| **Date** | 2026-06-09 |
| **Target** | `/opt/desk-note/run.sh` (Stage C and Stage D prompts); `src/app/desk/2026-06-08/page.tsx` v2 commit `3028a4d`; `src/app/desk/2026-06-09/page.tsx` v2 commit `37fb287` |
| **Files reviewed** | `/opt/desk-note/run.sh`; `/opt/desk-note/web/docs/desk-note-runbook.md`; `/opt/desk-note/web/audits/2026-06-09-desk-note.md`; `git show 3028a4d:audits/2026-06-08-desk-note.md`; `git show 3028a4d:src/app/desk/2026-06-08/page.tsx`; `git show 37fb287:src/app/desk/2026-06-09/page.tsx`; `/opt/desk-note/logs/2026-06-08.log`; `/opt/desk-note/logs/2026-06-09.log` |
| **Reviewer** | codex-reviewer delegate (claude-sonnet-4-6) dispatching codex CLI (gpt-5.5, xhigh effort, empty-stdin pipe). Codex ran from local workstation worktree `/Users/moonman/Desktop/test/.claude/worktrees/clever-nash-4fcdb1`. All artifact evidence was ssh-fetched before the codex call and injected as structured context. Codex attempted local file resolution; the server artifacts are not present in the local worktree, so conclusions rest on the brief evidence plus codex's own independent analysis. Every factual claim below is source-anchored to the server artifacts read via ssh. |
| **Scope** | Root-cause analysis of two consecutive PUBLISH GATE: BLOCK-CRITICAL failures on 2026-06-08 and 2026-06-09. Investigation covers: (1) whether the failures share a root cause; (2) identification of the root cause and evaluation of proposed hypotheses; (3) concrete fix recommendation; (4) proportionality of CRITICAL severity grading for the original Stage B findings. |
| **Snapshot anchor** | 06-08 v2: commit `3028a4d` (local-only on btc-fetcher, not on origin/main). 06-09 v2: commit `37fb287` (local-only on btc-fetcher, not on origin/main). Investigation timestamp: 2026-06-09T04:xx UTC (approximate, bounded by codex session `019eaa8b-0fe6-7e82-9051-9ab325595d6e`). |
| **Tokens** | Not exposed by codex API for this session. |
| **Build** | Not applicable (investigation record only; no page.tsx edits). |
| **Verdict** | MULTIPLE-CAUSES (one primary, one secondary, interacting) |

---

## What is broken / what causes it / what fix to apply

### Findings table

| ID | Category | Location | What is broken | What causes it | Fix to apply |
|---|---|---|---|---|---|
| PI-001 | PRIMARY ROOT CAUSE | `run.sh` Stage C prompt (approx lines 200-250) | Stage C closes a Stage-B finding by patching the lines cited in the audit table. It does not verify that all logical variants of the corrected claim across the full file have been changed. Both failures show Stage C fixing 6-7 cited occurrences and missing exactly one uncited occurrence in a different logical section of the same file. | The Stage C prompt says "Apply EVERY finding's suggested fix" but has no instruction to grep-validate that the corrected invariant is globally satisfied before the audit-trace is written. Claude treats the finding's cited lines as the exhaustive fix scope. | Add a mandatory grep-closure step to the Stage C prompt: for each finding, before writing the audit-trace, grep the full file for the finding's key string patterns (exact and semantic variants); if any stale hit remains, fix it; only then may the finding be marked RESOLVED. See exact prompt text in Follow-up §1. |
| PI-002 | SECONDARY CAUSE (amplifier) | `run.sh` Stage C prompt — audit-trace rewrite instruction | The audit-trace rewrite instruction produces overclaiming language ("v2 applies every finding", "wherever it appears") that creates a formal contradiction with any remaining stale occurrence. Stage D is correctly designed to catch this contradiction, and it does. But the overclaim is a Stage C artifact, not a Stage D design flaw. | The Stage C prompt says to summarize "applied fixes" without requiring that the summary only attest what has been grep-confirmed. Claude writes the summary optimistically, reflecting the fixe it believes it applied rather than the fixes it verified. | Remove "v2 applies every finding" as a template phrase. Replace with: "For each finding: [ID] — verified stale-hit count before patch: N; stale-hit count after grep-verification: M. RESOLVED if M=0; UNRESOLVED (stale hits remain) if M>0." This forces the audit-trace to be evidence-derived, not attestation-derived. |
| PI-003 | STRUCTURAL INTERACTION | Relationship between Stage B cite lists and Stage C fix scope | Stage B's hostile audit correctly cited the primary stale occurrences but did not exhaustively enumerate every logically equivalent occurrence (which is reasonable for an audit). Stage C then treated Stage B's cite list as the complete fix scope, not as a representative sample of the broken invariant. | Stage B's format (cite file:line) is appropriate for an audit but is mis-read by Stage C as a complete enumeration. The Stage C prompt does not clarify that cited lines are examples, not exhaustive. | Add one sentence to Stage C prompt: "Stage B's cited file:line references are the primary examples of each finding, not an exhaustive list. Treat each finding's description as a claim about an invariant that must hold across the entire file, not just at the cited lines." |
| PI-004 | SEVERITY CALIBRATION | Stage D re-gate verdict logic | 06-08 DN-002 was graded MAJOR by Stage B (correct grade) but the residual stale occurrence at `:1056-1058` produced a BLOCK-CRITICAL Stage D verdict. 06-09 DN-001 was graded CRITICAL by Stage B; the residual stale occurrence at `:1378-1380` was in a decision caveat (no-roll rationale), which IS a CRITICAL location. The two days are not symmetrically graded: 06-09 was proportional; 06-08 was over-graded by the gate. | Stage D's re-gate applies BLOCK-CRITICAL any time a finding is PARTIALLY-RESOLVED regardless of the original severity of the finding. There is no graduated response: PARTIALLY-RESOLVED MAJOR is treated the same as PARTIALLY-RESOLVED CRITICAL. | Add a severity-gated rule to Stage D's verdict logic: "BLOCK-CRITICAL requires at least one of: (a) a CRITICAL finding is NOT-RESOLVED; (b) a MAJOR/CRITICAL finding is PARTIALLY-RESOLVED with the stale occurrence in a decision-relevant section (trade call, no-roll rationale, kill condition, thesis summary, audit-trace attestation); (c) a NEW-CRITICAL-INTRODUCED finding. A MAJOR finding PARTIALLY-RESOLVED only in narrative/contextual prose that is not decision-relevant may be graded PASS-WITH-NOTES. Document this in the v2 re-gate section." |

---

## Q1: Same root cause or two different bugs?

**Same root cause.** Evidence:

- 06-08: Stage B cited `page.tsx:258, :412, :1111, :1173, :1196, :1478, :1494` for DN-002. Stage C fixed all 7 cited occurrences. The missed stale occurrence at `:1056-1058` was NOT in the Stage B cite list. It was in the cycle-continuation narrative ("closest pattern was the +$1,532 BTC post-spike short re-stack BJ 06:21 → BJ 08:05 06-08"). Stage C's audit-trace wrote "DN-002 tags +1,532 as less-short wherever it appears" — which was false.

- 06-09: Stage B cited `page.tsx:76, :112, :286, :773, :880, :1511, :1556, :1688` for DN-001. Stage C fixed all 8 cited occurrences. The missed stale occurrence at `:1378-1380` was NOT in the Stage B cite list. It was in a no-roll decision caveat ("second positive-front-chunk settle priced in"). Stage C's audit-trace claimed comprehensive resolution — which was false.

The shared pattern is exact: cited-line fix scope + false audit-trace attestation + uncited occurrence in a different logical section = Stage D contradiction catch. This is a repeatable closure failure, not day-specific content variation.

---

## Q2: Root cause identification and hypothesis ratings

**Primary root cause (PI-001): Stage C has no mandatory full-file invariant-closure pass before it is allowed to claim a finding is resolved.**

Hypothesis evaluation:

- **(a) CONFIRMED AND PRIMARY.** The Stage C prompt (`run.sh` lines ~200-250) says "Apply EVERY finding's suggested fix to $REPO/$EN_FILE in place" but provides no instruction to grep-validate the corrected invariant globally before writing the audit-trace. Claude patches the cited lines, then writes the audit-trace claiming global resolution. The missed lines were in different logical sections (cycle-continuation narrative; no-roll decision caveat) that did not share string patterns with the cited sections — so they were not caught without a full-file search.

- **(b) CONFIRMED AND PRIMARY.** Stage C is line-anchored on the audit table. The cited lines are treated as the fix scope, not as examples of a broken invariant.

- **(c) CONFIRMED AND SECONDARY.** The audit-trace overclaim ("v2 applies every finding", "wherever it appears") amplifies the problem by creating an explicit formal contradiction that Stage D is correctly designed to catch. This is not the underlying bug but is what turns a partial fix into a BLOCK-CRITICAL.

- **(d) REJECTED.** Stage D is finding the real bug correctly. The problem is not that Stage C needs more turns; it is that Stage C needs a structured verification step. More turns without that verification would just produce more work with the same failure mode.

- **(e) No alternative cause found.** The runbook §4 prose-first authoring order is not implicated — the failures were in disclosure blocks and decision caveats, not in §I-VI prose. The archive/rolling-source issue (v2-NF-002/003/004 from 06-06) is a separate class of problem.

---

## Q3: Recommended fix (ranked by leverage)

**Highest leverage: Add a mandatory grep-closure step to Stage C prompt (PI-001 fix).**

Exact text to add to the Stage C prompt in `/opt/desk-note/run.sh`, inserting after the current step 2 ("Apply EVERY finding...") and before step 3 ("Promote the EN file v1 → v2"):

```
2a. Grep-closure verification (mandatory before audit-trace): For each finding
    in the Stage B table, extract the key string or claim pattern (the phrase
    that was wrong, as described in the 'Finding' column). Run grep or Grep tool
    on the FULL file — not just the cited lines — for that pattern and all
    semantic variants. If any occurrence still carries the pre-fix meaning, fix
    it now. Repeat until grep returns zero matches for the stale claim. Keep a
    verification log per finding: key pattern searched, line hits before, line
    hits after. You MUST complete this pass for every CRITICAL and MAJOR finding
    before proceeding to step 3. Do not skip this step even if you believe the
    fix is complete.
```

**Second-highest leverage: Remove attestation-template language from Stage C audit-trace rewrite (PI-002 fix).**

Change the Stage C prompt instruction for audit-trace rewriting (currently: "summarize the actual stage-B verdict + finding counts by severity + applied fixes") to:

```
Rewrite the dn-audit-trace block from verified closure evidence only. For each
finding, state: ID — [original severity] — key patterns searched — grep hits
before patch: N — grep hits after grep-verified patch: M — status: RESOLVED
(M=0) or UNRESOLVED (M>0, list remaining line refs). Do NOT use phrases like
"v2 applies every finding" or "wherever it appears" unless grep verification has
confirmed M=0 for every finding in that scope statement. If any finding is
UNRESOLVED, do not promote to v2; leave the file at v1 and write
PUBLISH-BLOCKED: [finding ID] — stale at [line refs] to $SUBJECT_FILE.
```

**Third-highest leverage: Add cite-list scope clarification to Stage C prompt (PI-003 fix).**

Add to Stage C prompt, immediately before step 2:

```
Important: Stage B's cited file:line references identify the primary examples of
each finding, not an exhaustive list of every occurrence. Treat each finding's
description as a broken invariant that must be corrected everywhere it appears
in the file. Do not limit your fix scope to the cited lines.
```

**Optional (lower leverage): Add severity-gated Stage D verdict rule (PI-004 fix).**

This is a calibration improvement, not a root-cause fix. Implement only after PI-001 is deployed and confirmed to prevent the failure mode.

---

## Q4: Severity proportionality of the BLOCK-CRITICAL verdicts

**06-08 DN-002: OVER-GRADED by Stage D. The original Stage B grade (MAJOR) was correct.**

The stale line `:1056-1058` ("closest pattern was the +$1,532 BTC post-spike short re-stack BJ 06:21 → BJ 08:05 06-08") is reader-visible and factually wrong. However:
- It sits in the cycle-continuation framework narrative, specifically in a "closest pattern" comparative, not in a trade call, thesis statement, or decision gate.
- The surrounding context at `:258` (SM data section) and `:1196, :1200` (decision table) had all been correctly fixed to "+960 BTC fresh short add."
- A careful reader would encounter the corrected versions before the stale occurrence. The stale occurrence creates confusion but does not assert a primary trade recommendation.

Stage D correctly classified this as PARTIALLY-RESOLVED MAJOR. Escalating that to BLOCK-CRITICAL was an over-grade. The gate calibration rule in PI-004 would have allowed PASS-WITH-NOTES here.

**06-09 DN-001: CRITICAL GRADE WAS PROPORTIONAL.**

The stale line `:1378-1380` ("second positive-front-chunk settle priced in, leverage book deflated") appears inside a no-roll decision caveat — specifically the rationale for why the desk is not rolling a short hedge. This is a decision-relevant location. The phrase "priced in" asserts a settlement state (that the 9JUN +2.26M chunk had settled) that was factually false at the 00:05Z anchor (it was pending until 08:00Z, 8 hours later). Six other corrected mentions saying "NOT yet settled" do not neutralize a wrong decision rationale; they create a document that argues both sides of the same trade gate simultaneously.

The BLOCK-CRITICAL verdict on 06-09 was proportional. The BLOCK-CRITICAL verdict on 06-08 was not proportional.

---

## Codex meta

- Model: gpt-5.5 (default for ChatGPT-account auth)
- Invocation form that worked: `echo "" | codex exec -c model_reasoning_effort=xhigh "<prompt>"`
- Effort: xhigh
- Session: `019eaa8b-0fe6-7e82-9051-9ab325595d6e`

---

## Codex-confirmed

- The two failures are structurally identical: same cite-list fix scope pattern, same missed-uncited-occurrence pattern, same audit-trace overclaim pattern, same Stage D contradiction catch.
- Stage D is correctly designed and correctly firing. The gate is not broken.
- Stage B hostile audit scope and cite-list format are appropriate for an audit; they were correctly read by Stage D.
- PI-001 fix (grep-closure step) is a standalone surgical change to Stage C prompt in `run.sh` that does not require changes to Stage B, Stage D, or the runbook.
- PI-002 fix (attestation language) is a complementary change that removes the overclaim vulnerability even if Stage C's grep pass misses something.

---

## Open issues

1. The PI-004 severity calibration rule (Stage D verdict logic) is not blocking. The gate correctly fired on both days. But 06-08 was over-graded. Consider adding the graduated BLOCK-CRITICAL rule to Stage D prompt in a separate deployment after PI-001 is confirmed.
2. The Stage B audit cite lists are examples, not exhaustive enumerations. This is documented here but is not communicated to Stage C. PI-003 fix is low-cost and should be bundled with PI-001.
3. No change to `run.sh`, `docs/desk-note-runbook.md`, or any `page.tsx` file has been made. This record is read-only output. The parent agent decides fix deployment.

---

## Follow-up

1. Deploy PI-001 + PI-002 + PI-003 as a single atomic `run.sh` Stage C prompt edit. Test on 2026-06-10 daily run.
2. After PI-001 is confirmed working (one clean pass), evaluate PI-004 as a separate Stage D calibration PR.
3. Consider whether the runbook §5 "fix all CRITICAL + HIGH blockers" language should also clarify that fixes are scope-checked across the full file, not just the cited lines — for human maintainers who manually apply fixes.
