'use server';

import { signIn } from '@/auth';
import { safeRelativePath } from '@/lib/redirect';

export async function signInWithGoogle(formData: FormData) {
  const from = safeRelativePath(String(formData.get('from') ?? ''), '/desk');
  await signIn('google', { redirectTo: from });
}
