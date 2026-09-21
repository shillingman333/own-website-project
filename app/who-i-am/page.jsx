export const metadata = {
  title: "Who I am",
  description: "Inspirations, spirituality, and reframes — what shapes how I see the world.",
};

export default function WhoIAmPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Who I am</p>
      <h1 className="display-title">The human part.</h1>
      <p className="lede">
        I believe empathy unlocks potential. I care about connection — with people,
        animals, nature, and ordinary moments in a day. I try to live simply and
        gently, with patience for myself and others, even when I don&apos;t always manage it.
      </p>

      {/* ── Inspirations ── */}
      <section id="inspirations" className="who-section">
        <p className="eyebrow">Inspirations</p>
        <h2 className="section-title">Things worth returning to.</h2>
        <p className="section-lede">
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
            <h3>Holly&apos;s Grandad</h3>
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
              <h3>Open the first film</h3>
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
              <h3>Open the second film</h3>
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
            <h3>Thich Nhat Hanh. Sam Harris. The Plum Village app.</h3>
            <p>
              Meditation traditions that take seriously how to live well — as practice,
              not a project.
            </p>
          </article>

          <article className="card span-6">
            <p className="kicker">A few more</p>
            <h3>Andrew Huberman. Gary&apos;s Economics. Strangers on a Bench.</h3>
            <p>
              Neuroscience, inequality taken seriously, and the reminder that most people
              have a story worth sitting with.
            </p>
          </article>
        </section>
      </section>

      {/* ── Spirituality ── */}
      <section id="spirituality" className="who-section">
        <p className="eyebrow">Spirituality</p>
        <h2 className="section-title">Connecting with something greater.</h2>
        <p className="section-lede">
          I&apos;m still working out what I believe. But there is something beyond the
          busyness — quiet, presence, a sense of being held — that I want more of.
        </p>

        <section className="content-grid">
          <article className="card span-12 bg-dark">
            <p className="kicker">A prayer</p>
            <p style={{ fontStyle: "italic", lineHeight: 1.8, fontSize: "1rem", color: "rgba(255,255,255,0.8)" }}>
              Spirit of love — be with me. When I am restless, bring stillness.
              When I am divided from others, bring reconciliation. When I am lost,
              help me hear another voice.
            </p>
          </article>

          <article className="card span-6 bg-soft">
            <p className="kicker">Holly&apos;s granny</p>
            <h3>God as pure love.</h3>
            <p>
              Not doctrine so much as presence — love, reconciliation, the thing that
              holds things together. Orientation more than certainty.
            </p>
          </article>

          <article className="card span-6">
            <p className="kicker">Creating silence</p>
            <h3>So I can hear another voice.</h3>
            <p>
              Making enough space to hear what&apos;s already there — unconscious, body,
              divine, or a quieter part of yourself.
            </p>
          </article>

          <article className="card span-6 bg-soft">
            <p className="kicker">Guides</p>
            <h3>Getting back to my spiritual guides.</h3>
            <ul className="experience-list" style={{ marginTop: "0.5rem" }}>
              <li>The Daily Stoic</li>
              <li>Sam Harris</li>
              <li>Rigpa — Tuesday beginner class, Cally Road</li>
              <li>Gaia House, Devon</li>
              <li>Taizé prayer in London</li>
              <li>Plum Village app</li>
            </ul>
          </article>

          <article className="card span-6">
            <p className="kicker">The practice</p>
            <h3>Silence is not emptiness.</h3>
            <p>
              &ldquo;If you have the breath, that&apos;s more than enough for meditating and all that
              you need.&rdquo; — Jon Kabat-Zinn. Not because it makes hard things easy —
              because it makes presence possible.
            </p>
          </article>
        </section>
      </section>

      {/* ── Reframes ── */}
      <section id="reframes" className="who-section">
        <p className="eyebrow">Reframes</p>
        <h2 className="section-title">Same facts. Kinder frame.</h2>
        <p className="section-lede">
          Looking directly at a perceived weakness can reveal what it has been trying to
          protect.
        </p>

        <section className="content-grid">
          <article className="card span-12 bg-red" id="attention">
            <p className="kicker">The biggest anxiety maker</p>
            <h3>Attention to detail when it doesn&apos;t feel worth it.</h3>
            <p>
              High-detail tasks can be deeply stressful — especially when the effort feels
              disconnected from the value. The reframe isn&apos;t that I should suddenly love
              them. It&apos;s that I instinctively look for proportion, purpose, and the simplest
              route to a useful result. This makes me driven to remove unnecessary
              attention-to-detail requirements where possible.
            </p>
          </article>

          <article className="card span-7 bg-soft">
            <p className="kicker">Anxiety & criticism</p>
            <h3>The caring underneath the noise.</h3>
            <p>
              Getting anxious, caring about small things, being critical — these often show
              I want work done well, explanations to be clear, and people not to get bogged
              down. I don&apos;t need to act on every criticism. The caring in my brain isn&apos;t
              wrong in itself.
            </p>
          </article>

          <article className="card span-5">
            <p className="kicker">Not super technical?</p>
            <h3>I start with the human point.</h3>
            <p>
              I&apos;m not naturally drawn to learning every technical detail. More often I
              ask what the detail is for, who it helps, and whether the complexity is needed.
            </p>
          </article>

          <article className="card span-12 bg-soft">
            <p className="kicker">Good enough can be good</p>
            <h3>I can be happy with very little.</h3>
            <p>
              Some people are brilliant at precision. I can be content with things that
              aren&apos;t perfect — unfinished is sometimes fine.
            </p>
          </article>
        </section>
      </section>
    </main>
  );
}
