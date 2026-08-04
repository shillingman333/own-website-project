export const metadata = {
  title: "Gallery — care, made visible",
  description: "Animals, people in poverty, and the planet we share.",
};

const pieces = [
  {
    className: "animals",
    number: "01",
    title: "Animals are not abstractions",
    text: "Vegetarianism and veganism begin with attention: noticing another life, then letting that knowledge affect an ordinary choice. Every meal is a decision.",
  },
  {
    className: "people",
    number: "02",
    title: "Dignity must reach everyone",
    text: "Caring for the poorest means refusing to let distance turn a person into a statistic. Need is still need, wherever it is. Read the JustGiving comments for Odile and Eva when motivation runs low.",
  },
  {
    className: "planet",
    number: "03",
    title: "One connected system",
    text: "Human welfare, animal welfare, and the environment are not competing causes. They are overlapping parts of the same home. You can't fix one without caring about the others.",
  },
];

export default function GalleryPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Gallery / was mir wichtig ist</p>
      <h1 className="display-title">Care, made visible.</h1>
      <p className="lede">
        A small collection about the lives and systems I do not want to look away from:
        animals, people living in poverty, and the planet we share.
      </p>

      <section className="gallery-grid" aria-label="Gallery of illustrated values">
        {pieces.map((piece) => (
          <article className={`gallery-piece ${piece.className}`} key={piece.title}>
            <div className="gallery-caption">
              <small className="kicker">{piece.number}</small>
              <strong>{piece.title}</strong>
              <p>{piece.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="content-grid">

        <article className="card span-6 bg-lime">
          <p className="kicker">From values to choices</p>
          <h2>Persistent, practical altruism.</h2>
          <p>
            I try to make choices — big and small — that reduce suffering and increase
            wellbeing. Not perfectly. Not always consistently. But as a genuine direction:
            I want my life to contain less harm than it otherwise might.
          </p>
        </article>

        <article className="card span-6 bg-yellow">
          <p className="kicker">Global issues worth knowing</p>
          <h2>FGM, poverty, and why they connect.</h2>
          <p>
            The causes I keep returning to are global: female genital mutilation, extreme
            poverty, the climate crisis, animal suffering at industrial scale. These are
            connected — they all reflect systems that prioritise some lives over others.
            Understanding that connection matters.
          </p>
        </article>

        <article className="card span-12 gt-note">
          <p className="kicker">Volunteering as practice</p>
          <h2>Caring gets real when it meets a person.</h2>
          <p>
            Volunteering with Samaritans turns large concerns into immediate relationships:
            listening, noticing, and offering practical help. Acting as a mental health ally
            at GT added another kind of practice — bringing warmth, using humour to help
            people feel at ease, and being someone who could hold difficult conversations
            without flinching. These aren't small things. They're what I want more of.
          </p>
        </article>

        <article className="card span-12 bg-coral">
          <p className="kicker">A note on connected living</p>
          <h2>Eating raw food, walking on the earth, swimming in water.</h2>
          <p>
            Part of caring for the planet is re-learning your relationship with it.
            Connected living — eating close to the source, spending time in nature, reducing
            what stands between you and the world — changes how you see it, and therefore
            how you treat it.
          </p>
        </article>

      </section>
    </main>
  );
}
