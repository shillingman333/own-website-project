export const metadata = {
  title: "Experience — what I've built",
  description: "Seven years at Gain Theory: data, Python, AI tools, and supporting people.",
};

export default function ExperiencePage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Experience / erfahrung</p>
      <h1 className="display-title">What I've built and done.</h1>
      <p className="lede">
        Seven years at Gain Theory, a marketing analytics consultancy. The work I gravitated
        toward was always about building things that made other people's jobs better — and
        supporting the people doing those jobs.
      </p>

      <section className="content-grid">

        <article className="card span-12 bg-dark">
          <p className="kicker">Gain Theory / 7 years</p>
          <h2 style={{ color: "var(--coral)" }}>Marketing effectiveness & media measurement.</h2>
          <p style={{ color: "rgba(255,255,255,0.8)" }}>
            Gain Theory is a global marketing analytics consultancy, part of WPP. The core
            work was helping major brands understand which marketing activity was actually
            driving results — and building the infrastructure for that analysis to happen
            reliably, clearly, and at scale.
          </p>
        </article>

        <article className="card span-6 bg-blue">
          <p className="kicker">Python & code improvements</p>
          <h2>Sensor — making the backend faster.</h2>
          <p>
            Sensor is Gain Theory's multichannel marketing attribution and incrementality
            testing solution. I worked on improvements to the backend speed of calculating
            results — identifying bottlenecks, refactoring code, and testing at scale.
          </p>
          <p>
            More broadly, I implemented Python improvements across a range of projects:
            cleaner structure, better documentation, and removing the kind of friction that
            slows analysts down over time.
          </p>
        </article>

        <article className="card span-6 bg-yellow">
          <p className="kicker">AI agents</p>
          <h2>Built and introduced GT-specific AI tools for analysts.</h2>
          <p>
            Using WPP's WPP Open platform (the parent company's AI infrastructure), I built
            and introduced AI agents designed for GT's analyst workflow — tools that could
            help with code, analysis, documentation, and communication. Getting people to
            actually use them was as much the challenge as building them.
          </p>
        </article>

        <article className="card span-6 bg-coral">
          <p className="kicker">Cannes Lions moment</p>
          <h2>An internal tool showcased by the global CEO.</h2>
          <p>
            I built an internal AI-assisted app that was picked up and showcased by WPP's
            global CEO at Cannes Lions — described as the "Oscars" of advertising. That
            wasn't the goal, but it was a good reminder that building something genuinely
            useful gets noticed.
          </p>
        </article>

        <article className="card span-6 bg-mint">
          <p className="kicker">Wargaming dashboards</p>
          <h2>Webpages displaying wargaming scenario results.</h2>
          <p>
            Built webpages that displayed wargaming dashboards — interactive tools for
            clients to explore "what if" marketing scenarios visually. Clean, usable
            interfaces for complex outputs. Making the results legible was the work.
          </p>
        </article>

        <article className="card span-12">
          <p className="kicker">Supporting analysts</p>
          <h2>Working closely alongside people — not just above them.</h2>
          <p>
            Worked closely with analysts supporting them with code reviews, debugging,
            pair-programming sessions, and general technical unblocking. Running training
            sessions, pointing people toward shortcuts, and being the person they came to
            when they were stuck. That role — informal teacher, unblocker, trusted colleague
            — is one I consistently found myself in, and consistently enjoyed.
          </p>
        </article>

        <article className="card span-7 gt-note">
          <p className="kicker">What GT taught me</p>
          <h2>Precision and care are compatible.</h2>
          <p>
            The things I got best at — clear communication, structured thinking, removing
            friction, making complex work accessible — turned out to be about people as much
            as data. The technical skill is useful. The human skill is what made it land.
          </p>
        </article>

        <article className="card span-5 bg-lavender">
          <p className="kicker">What I didn't find there</p>
          <h2>However well I did it...</h2>
          <p>
            I was good at helping a company sell more. Over time I realised that wasn't the
            thing I actually cared about. What GT gave me is a foundation. What I do next
            will be built on top of it.
          </p>
        </article>

        <article className="card span-12 bg-lime">
          <p className="kicker">Volunteering alongside the day job</p>
          <h2>The work that felt most like me.</h2>
          <p>
            Volunteering with <strong>Samaritans</strong> and acting as a <strong>mental
            health ally</strong> at GT weren't add-ons to my working life — they were the
            most direct expression of the thing I actually wanted to do. Listening to
            someone in distress, holding space without judgement, being reliably present:
            these felt more important than any dashboard I built or pipeline I optimised.
          </p>
        </article>

      </section>
    </main>
  );
}
