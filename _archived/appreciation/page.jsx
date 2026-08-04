export const metadata = {
  title: "Appreciation — psychological wins",
  description: "What I've learnt, overcome, and grown through.",
};

export default function AppreciationPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Appreciation</p>
      <h1 className="display-title">Look what you've learnt.</h1>
      <p className="lede">
        Not achievements in the career sense. Genuine growth — the moments where a
        pattern shifted, a fear loosened its grip, or a new way of being with difficulty
        arrived.
      </p>

      <section className="content-grid">

        <article className="card span-12 bg-sky">
          <p className="kicker">Coping strategy</p>
          <h2>The stepping away.</h2>
          <p>
            I've learnt — genuinely, not just read about — the value of stepping away when
            something is too activating to think clearly. Not avoidance. A deliberate pause
            that makes return possible.
          </p>
        </article>

        <article className="card span-6 bg-yellow">
          <p className="kicker">The big one</p>
          <h2>Things get easier.</h2>
          <p>
            I can overcome a lot of anxiety. Not always quickly, not always gracefully.
            But things that once felt impossible — certain conversations, certain tasks,
            certain social situations — have become manageable. The evidence has
            accumulated.
          </p>
        </article>

        <article className="card span-6">
          <p className="kicker">Samaritans</p>
          <h2>The second shift was one of the best days I've had.</h2>
          <p>
            Sitting with a stranger in difficulty, offering nothing except presence and
            attention — and feeling, at the end, more alive and more connected than almost
            anything else I've done. That's information. I should act on it.
          </p>
        </article>

        <article className="card span-6 bg-lavender">
          <p className="kicker">Receiving care</p>
          <h2>Letting people help is its own skill.</h2>
          <p>
            I've got better at being supported. At saying "this is hard" without
            immediately following it with "but I'm fine really."
          </p>
        </article>

        <article className="card span-6 bg-coral">
          <p className="kicker">A reminder</p>
          <h2>Look at what you can do, not what you can't.</h2>
          <p>
            The list of things that used to be hard and are now possible is long, and
            growing, and worth reviewing when the fog arrives.
          </p>
        </article>

      </section>
    </main>
  );
}
