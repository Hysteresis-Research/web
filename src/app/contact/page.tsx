import BHMark from '../components/BHMark';

export const metadata = {
  title: 'Contact · Hysteresis Research',
  description: 'Correspondence — write to the desk.',
};

export default function Contact() {
  return (
    <main>
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">contact</div>
        <h1>Contact</h1>

        <div></div>
        <p className="lede">on correspondence.</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          Research collaboration, allocator conversations, the occasional
          question on method. Write to the desk{' '}
          <span className="em">—</span> we reply when there is something
          useful to say.
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          <a className="email-link" href="mailto:desk@hysres.com">
            desk@hysres.com
          </a>
        </p>

        <div></div>
        <p className="signature">
          Hysteresis Research <span className="em">·</span> Hong Kong.
        </p>
      </div>
    </main>
  );
}
