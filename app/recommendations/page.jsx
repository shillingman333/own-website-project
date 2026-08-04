export const metadata = {
  title: "Recommendations",
  description: "Things I recommend you buy and use — from my Medium article.",
};

const sections = [
  {
    title: "Apps",
    items: [
      {
        name: "Night Shift / f.lux",
        meta: "£0",
        why: "Setting your phone and computer screens to turn redder at night helps prevent blue light from interfering with sleep and circadian rhythm. I use f.lux on my laptop, and the built-in Night Shift / equivalent on my phone.",
      },
      {
        name: "Feedly",
        meta: "News & blogs",
        why: "An all-in-one app for blogs and news, organised into sections by interest. Easy to navigate — a simple way to follow what you care about without opening twenty tabs.",
      },
      {
        name: "Insight Timer",
        meta: "Free",
        why: "Ad-free (for the core app), with thousands of meditations and talks, plus a timer where you choose the sound and duration. Guided and unguided options — a solid free resource.",
      },
      {
        name: "Waking Up (Sam Harris)",
        meta: "Subscription after intro",
        why: "Beyond a few free meditations, the subscription opens daily meditations, full podcasts, and other content. Useful if you find Harris's way of thinking helpful.",
      },
    ],
  },
  {
    title: "Products",
    items: [
      {
        name: "External portable battery",
        meta: "£10–25",
        why: "Obvious but excellent: peace of mind when your phone battery isn't great, or you're travelling and using a lot of data. Anker options often get strong reviews if you're buying online.",
      },
      {
        name: "Bluetooth noise-cancelling headphones",
        meta: "From ~£90",
        why: "Regular work calls, music, podcasts — good noise-cancelling is a worthwhile investment. I bought Jabra Elite headphones and found them good for noise cancelling, battery life, and call clarity. If you can spend more, Sony WH-1000XM series are widely well-rated.",
      },
      {
        name: "Stannous fluoride toothpaste",
        meta: "£3–4",
        why: "Contains stannous fluoride rather than sodium fluoride, which does a better job at preventing tooth decay and gum disease. Don't rinse, eat, or drink immediately after brushing — let the fluoride sit. An electric toothbrush is also worth having.",
      },
      {
        name: "Meditation cushion",
        meta: "Not essential for everyone",
        why: "If you want one, Present Mind (around £30) is comfortable, durable, washable, and works as a cushion for lying down too.",
      },
      {
        name: "Foam roller",
        meta: "£20–30",
        why: "Useful for sports recovery, running aches, and simple muscle relaxation — including a basic back massage. A 2-in-1 set with extra firm balls can be good value around £25.",
      },
    ],
  },
  {
    title: "Investing",
    items: [
      {
        name: "Vanguard",
        meta: "Passive funds",
        why: "For long-term saving without spending hours on markets, passive funds that track the market as a whole make sense. Low fees (around 0.2–0.4%). Stocks and Shares ISAs are tax-free in the UK. Options include Target Retirement funds, All-World, and LifeStrategy.",
      },
    ],
  },
];

export default function RecommendationsPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Recommendations</p>
      <h1 className="display-title">Things I recommend you buy and use.</h1>
      <p className="rec-source">
        Drawn from{" "}
        <a
          href="https://medium.com/@jacobshilling/things-i-recommend-you-buy-and-use-jacob-edition-60d12a4a22ad"
          target="_blank"
          rel="noreferrer"
        >
          my Medium article
        </a>
        . Some of these I&apos;d first seen in Effective Altruism–style recommendation lists;
        I&apos;ll keep adding as I find new things that are worth sharing.
      </p>

      {sections.map((section) => (
        <section key={section.title} style={{ marginBottom: "2.5rem" }}>
          <h2 className="rec-section-title">{section.title}</h2>
          <div className="rec-grid">
            {section.items.map((item) => (
              <article className="rec-card" key={item.name}>
                <p className="rec-meta">{item.meta}</p>
                <h3>{item.name}</h3>
                <p>{item.why}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
