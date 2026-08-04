export const metadata = {
  title: "Future home — a wishlist",
  description: "Things I want in my own home, one day.",
};

const wishlist = [
  { emoji: "🎹", name: "Piano" },
  { emoji: "📻", name: "Physical radio" },
  { emoji: "🧹", name: "Cordless portable hoover", note: "Like Holly's grandparents have in Middlewich" },
  { emoji: "🍪", name: "Cracker tin" },
  { emoji: "🛏️", name: "Bed linen larger than the bed" },
  { emoji: "📝", name: "Magnetic memo pad for the fridge" },
  { emoji: "✏️", name: "Drawing tablet", note: "Also for children" },
  { emoji: "🥗", name: "Sectioned lunch box" },
  { emoji: "🛋️", name: "Mostly second-hand furniture" },
  { emoji: "☀️", name: "A light space" },
  { emoji: "📖", name: "Communal values book", note: "Made together before the house purchase" },
  { emoji: "🍎", name: "Fruit bowl" },
];

export default function HousePage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Future home</p>
      <h1 className="display-title">One day, a house.</h1>
      <p className="lede">
        Not yet. But it's worth thinking about — not just what you want in a house, but
        what you want a house to <em>be</em>.
      </p>

      <section className="content-grid" style={{ marginBottom: "2rem" }}>
        <article className="card span-12 bg-yellow">
          <p className="kicker">Most important item on this list</p>
          <h2>A communal values book.</h2>
          <p>
            Before the furniture, before the kitchen — make the book. A shared document
            of what matters, how we want to live, what kind of home we're trying to
            create. Ideally made together well before the house purchase.
          </p>
        </article>
      </section>

      <div className="house-list">
        {wishlist.map((item) => (
          <div className="house-item" key={item.name}>
            <span style={{ fontSize: "1.4rem" }}>{item.emoji}</span>
            <strong style={{ fontSize: "0.88rem" }}>{item.name}</strong>
            {item.note && (
              <span style={{ fontSize: "0.75rem", opacity: 0.55, fontWeight: 400 }}>{item.note}</span>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
