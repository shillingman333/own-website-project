export const metadata = {
  title: "Spirituality",
  description: "Finding silence, the divine, and a voice beyond my own.",
};

export default function SpiritualityPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Spirituality</p>
      <h1 className="display-title">Connecting with something greater.</h1>
      <p className="lede">
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
          <h2>God as pure love.</h2>
          <p>
            Not doctrine so much as presence — love, reconciliation, the thing that
            holds things together. Orientation more than certainty.
          </p>
        </article>

        <article className="card span-6">
          <p className="kicker">Creating silence</p>
          <h2>So I can hear another voice.</h2>
          <p>
            Making enough space to hear what&apos;s already there — unconscious, body,
            divine, or a quieter part of yourself.
          </p>
        </article>

        <article className="card span-6 bg-soft">
          <p className="kicker">Guides</p>
          <h2>Getting back to my spiritual guides.</h2>
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
          <h2>Silence is not emptiness.</h2>
          <p>
            &ldquo;If you have the breath, that&apos;s more than enough for meditating and all that
            you need.&rdquo; — Jon Kabat-Zinn. Not because it makes hard things easy —
            because it makes presence possible.
          </p>
        </article>

      </section>
    </main>
  );
}
