export default function AboutContent({ showHeader = true }) {
  return (
    <>
      {showHeader && (
        <>
          <p className="eyebrow">About</p>
          <h2 className="display-title">Hi, I&apos;m Jacob.</h2>
          <p className="lede">
            I&apos;m Jacob. I believe that one person, listening properly, can make a real
            difference — the spark that helps things shift, not just the person who watches
            and waits.
          </p>
        </>
      )}

      <section className="content-grid">
        <article className="card span-12">
          <p className="kicker">Who I am</p>
          <h3>The human part.</h3>
          <p>
            I&apos;m Jacob. I believe empathy unlocks potential. I care about connection — with people,
            animals, nature, and ordinary moments in a day. I try to live simply and
            gently, with patience for myself and others, even when I don&apos;t always manage it.
          </p>
          <p>
            I spent several years in data and analytics consulting — marketing
            effectiveness and media measurement. It taught me a lot: how to build
            things properly, write Python, turn messy problems into usable systems, and
            communicate complex work. But the work itself wasn&apos;t what I cared about most.
            I was good at helping a company sell more. I want to spend my working life
            helping people instead.
          </p>
        </article>

        <article className="card span-7 bg-soft">
          <p className="kicker">Consulting & analytics</p>
          <h3>Seven years at Gain Theory.</h3>
          <p>
            Building data pipelines, automating processes, and creating systems for
            marketing effectiveness work — getting the infrastructure right so the real
            work can happen.
          </p>
          <p>
            Included work on Sensor (GT&apos;s multichannel attribution solution) and
            AI-assisted tools — one of which was shown by the global CEO at Cannes Lions.
          </p>
        </article>

        <article className="card span-5">
          <p className="kicker">Supporting people</p>
          <h3>Samaritans & mental health ally.</h3>
          <p>
            Volunteering with Samaritans and acting as a mental health ally at work —
            listening without judgement. Some of the most meaningful work I&apos;ve done.
          </p>
        </article>

        <article className="card span-12 bg-soft">
          <p className="kicker">What I&apos;m moving toward</p>
          <h3>Holding the question openly.</h3>
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
    </>
  );
}
