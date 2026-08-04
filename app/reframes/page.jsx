export const metadata = {
  title: "Reframes — weaknesses into positives",
  description: "Perceived weaknesses viewed from their useful side.",
};

export default function ReframesPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Reframes</p>
      <h1 className="display-title">Same facts. Kinder frame.</h1>
      <p className="lede">
        Looking directly at a perceived weakness can reveal what it has been trying to
        protect.
      </p>

      <section className="content-grid">

        <article className="card span-12 bg-red" id="attention">
          <p className="kicker">The biggest anxiety maker</p>
          <h2>Attention to detail when it doesn&apos;t feel worth it.</h2>
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
          <h2>The caring underneath the noise.</h2>
          <p>
            Getting anxious, caring about small things, being critical — these often show
            I want work done well, explanations to be clear, and people not to get bogged
            down. I don&apos;t need to act on every criticism. The caring in my brain isn&apos;t
            wrong in itself.
          </p>
        </article>

        <article className="card span-5">
          <p className="kicker">Not super technical?</p>
          <h2>I start with the human point.</h2>
          <p>
            I&apos;m not naturally drawn to learning every technical detail. More often I
            ask what the detail is for, who it helps, and whether the complexity is needed.
          </p>
        </article>

        <article className="card span-12 bg-soft">
          <p className="kicker">Good enough can be good</p>
          <h2>I can be happy with very little.</h2>
          <p>
            Some people are brilliant at precision. I can be content with things that
            aren&apos;t perfect — unfinished is sometimes fine.
          </p>
        </article>

      </section>
    </main>
  );
}
