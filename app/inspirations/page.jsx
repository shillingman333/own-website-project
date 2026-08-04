export const metadata = {
  title: "Inspirations — things worth returning to",
  description: "People, words, and ideas that interrupt the noise.",
};

export default function InspirationsPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Inspirations</p>
      <h1 className="display-title">Things worth returning to.</h1>
      <p className="lede">
        People, words, and ideas that interrupt the noise and point me back toward
        attention.
      </p>

      <section className="content-grid">

        <blockquote className="card span-7 bg-soft">
          <p className="quote">
            &ldquo;Attention is the rarest and purest form of generosity.&rdquo;
            <cite>— Simone Weil</cite>
          </p>
        </blockquote>

        <article className="card span-5">
          <p className="kicker">A person</p>
          <h2>Holly&apos;s Grandad</h2>
          <p className="quote" style={{ fontSize: "0.95rem" }}>
            &ldquo;Life is all about helping people.&rdquo;
          </p>
          <p>
            He went on to describe people living in poverty and with disease in poorer
            countries.
          </p>
        </article>

        <blockquote className="card span-12 bg-soft">
          <p className="kicker">Meditation</p>
          <p className="quote">
            &ldquo;If you have the breath, that&apos;s more than enough for meditating and all
            that you need.&rdquo;
            <cite>— Jon Kabat‑Zinn</cite>
          </p>
        </blockquote>

        <a
          className="card span-6 video-link bg-soft"
          href="https://youtu.be/URNGiWWX4p8?si=zZOkEqInEpu9m2Vb"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <p className="kicker">Watch — 01</p>
            <h2>Open the first film</h2>
          </div>
          <span aria-hidden="true">▶</span>
        </a>

        <a
          className="card span-6 video-link bg-soft"
          href="https://youtu.be/oKLEulsXhcM?si=cBmkliFLxJDFb8IE"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <p className="kicker">Watch — 02</p>
            <h2>Open the second film</h2>
          </div>
          <span aria-hidden="true">▶</span>
        </a>

        <blockquote className="card span-12">
          <p className="quote">
            &ldquo;Trying to define yourself is like trying to bite your own teeth.&rdquo;
            <cite>— Alan Watts</cite>
          </p>
        </blockquote>

        <article className="card span-6 bg-soft">
          <p className="kicker">Silence</p>
          <h2>Thich Nhat Hanh. Sam Harris. The Plum Village app.</h2>
          <p>
            Meditation traditions that take seriously how to live well — as practice,
            not a project.
          </p>
        </article>

        <article className="card span-6">
          <p className="kicker">A few more</p>
          <h2>Andrew Huberman. Gary&apos;s Economics. Strangers on a Bench.</h2>
          <p>
            Neuroscience, inequality taken seriously, and the reminder that most people
            have a story worth sitting with.
          </p>
        </article>

      </section>
    </main>
  );
}
