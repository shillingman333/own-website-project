import PodcastPlayer from "../components/PodcastPlayer";

export const metadata = {
  title: "Why — purpose & direction",
  description: "What matters to me and where I'm pointing my life.",
};

export default function WhyPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Why</p>
      <h1 className="display-title">Help where help is needed.</h1>
      <p className="lede">
        I don&apos;t have a single clean passion. I have a direction: reduce suffering,
        increase connection, help as many people as possible with as little waste as
        possible.
      </p>

      <PodcastPlayer />

      <section className="content-grid">

        <article className="card span-12 bg-dark">
          <p className="kicker">Purpose</p>
          <h2>Help as many people as possible, as simply as possible.</h2>
        </article>

        <article className="card span-6 bg-soft">
          <p className="kicker">GT & volunteering</p>
          <h2>I&apos;ve been practising this already.</h2>
          <p>
            At GT, the work I gravitated toward was about unblocking colleagues, building
            tools others could use, and communicating clearly so the work could land. My
            Samaritans shifts, and acting as a mental health ally, weren&apos;t add-ons — they
            were the thing closest to the real me.
          </p>
        </article>

        <article className="card span-6">
          <p className="kicker">Harmony</p>
          <h2>Are we more divided than we realise?</h2>
          <p>
            Is it possible we have divisive mindsets without knowing it — shaped by
            divisive politics and algorithms that amplify the loudest voices? Listening to
            someone you disagree with is a political act. So is choosing curiosity over
            contempt.
          </p>
        </article>

        <blockquote className="card span-12 bg-soft">
          <p className="quote">
            &ldquo;Attention is the rarest and purest form of generosity.&rdquo;
            <cite>— Simone Weil</cite>
          </p>
        </blockquote>

        <article className="card span-12">
          <p className="kicker">Physical potential</p>
          <h2>The body is part of the whole.</h2>
          <p>
            Running, swimming, breathing, moving — these aren&apos;t luxuries. They&apos;re part of
            how I stay present, regulated, and useful. The runners at the bottom of every
            page are a reminder.
          </p>
        </article>

      </section>
    </main>
  );
}
