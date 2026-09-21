import PodcastPlayer from "../components/PodcastPlayer";

export const metadata = {
  title: "Career",
  description: "Where I am in my career — experience, direction, and what I'm moving toward.",
};

export default function CareerPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Career</p>
      <h1 className="display-title">Where I am in my career.</h1>
      <p className="lede">
        Several years in data and analytics consulting taught me how to build properly
        and communicate clearly. What I want next is work that rewards patience,
        listening, and care.
      </p>

      <PodcastPlayer />

      <section className="content-grid">
        <article className="card span-12 bg-dark">
          <p className="kicker">Direction</p>
          <h2>Help as many people as possible, as simply as possible.</h2>
        </article>

        <article className="card span-7 bg-soft">
          <p className="kicker">Consulting & analytics</p>
          <h2>Seven years at Gain Theory.</h2>
          <p>
            Building data pipelines, automating processes, and creating systems for
            marketing effectiveness work — getting the infrastructure right so the real
            work can happen.
          </p>
          <p>
            Included work on Sensor (GT&apos;s multichannel attribution solution) and
            AI-assisted tools — one of which was shown by the global CEO at Cannes Lions.
            The work I gravitated toward was unblocking colleagues, building tools others
            could use, and communicating clearly so the work could land.
          </p>
        </article>

        <article className="card span-5">
          <p className="kicker">Supporting people</p>
          <h2>Samaritans & mental health ally.</h2>
          <p>
            Volunteering with Samaritans and acting as a mental health ally at work —
            listening without judgement. Some of the most meaningful work I&apos;ve done,
            and the closest to the real me.
          </p>
        </article>

        <article className="card span-12 bg-soft">
          <p className="kicker">What I&apos;m moving toward</p>
          <h2>Holding the question openly.</h2>
          <p>
            After years of work that rewarded precision and speed, I want work that
            rewards patience, listening, and care. Training as a Psychological Wellbeing
            Practitioner — supporting people with anxiety and depression through NHS
            Talking Therapies — is one path I&apos;m exploring seriously, not a fixed plan.
          </p>
          <p>
            I bring technical grounding (Python, data, systems thinking) and
            interpersonal warmth. People find me approachable — and I have real
            experience sitting with people in distress.
          </p>
        </article>
      </section>
    </main>
  );
}
