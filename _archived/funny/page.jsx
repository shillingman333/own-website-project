export const metadata = {
  title: "Funny — a serious case for not being serious",
  description: "Humour as a social skill and a way of staying in the room.",
};

export default function FunnyPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Funny / ein bisschen humor</p>
      <h1 className="display-title">A serious case for not being serious.</h1>
      <p className="lede">
        My sense of humour went down well at GT. That belongs here because humour is not a
        distraction from caring. Sometimes it is how people breathe, connect, and stay in
        the room.
      </p>

      <section className="content-grid">

        <article className="card span-4 bg-yellow">
          <p className="kicker">01 — detail</p>
          <h2>I was going to perfect this joke.</h2>
          <p>Then I decided it did not feel worth the attention to deta—</p>
        </article>

        <article className="card span-4 bg-pink">
          <p className="kicker">02 — ambition</p>
          <h2>My five-year plan?</h2>
          <p>A carefully colour-coded work in progress.</p>
        </article>

        <article className="card span-4 bg-lime">
          <p className="kicker">03 — efficiency</p>
          <h2>Maximum impact. Minimum effort.</h2>
          <p>Finally — a purpose statement and a nap schedule in one.</p>
        </article>

        <article className="card span-4 bg-sky">
          <p className="kicker">04 — self-awareness</p>
          <h2>I care deeply about things.</h2>
          <p>Including, embarrassingly, whether the fonts are right.</p>
        </article>

        <article className="card span-4 bg-lavender">
          <p className="kicker">05 — wellbeing</p>
          <h2>My anxiety said hello.</h2>
          <p>I introduced it to my mindfulness practice. They're collaborating now.</p>
        </article>

        <article className="card span-4 bg-orange">
          <p className="kicker">06 — authenticity</p>
          <h2>"Just be yourself."</h2>
          <p>Bold advice for someone who is still figuring out who that is.</p>
        </article>

        <article className="card span-7 gt-note">
          <p className="kicker">Why keep this page?</p>
          <h2>Lightness is a social skill.</h2>
          <p>
            GT offered evidence that humour could help me connect. In volunteering and
            purposeful work, that same instinct can lower the temperature, make conversation
            less formal, and leave more space for honest listening. The Samaritans training
            talks about lightness too — not as deflection, but as permission for the other
            person to relax.
          </p>
          <p>
            Humour that works doesn't need someone to become smaller. It opens things up.
          </p>
        </article>

        <article className="card span-5 bg-coral">
          <p className="kicker">The rule</p>
          <h2>Laugh with. Never down.</h2>
          <p>
            The kind of humour I value makes a room more generous. It does not need someone
            else to become smaller for the joke to work. At GT, the best moments of levity
            were also moments of real connection. I want more of those.
          </p>
        </article>

        <article className="card span-12 bg-yellow">
          <p className="kicker">A final note</p>
          <h2>Being happy is a basis for being an effective altruist.</h2>
          <p>
            Genuinely. A depleted, joyless person helps no one well. Joy is not a reward
            for getting everything right — it's part of the infrastructure for doing good
            work over a long time. The humour, the fun, the lightness: they're not
            distractions. They're maintenance.
          </p>
        </article>

      </section>
    </main>
  );
}
