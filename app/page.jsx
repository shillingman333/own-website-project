"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const FLASH_COLORS = [
  { bg: "#E8702A", color: "#FFFFFF" },
  { bg: "#F7F7F8", color: "#0F2744" },
  { bg: "#FFF1E6", color: "#0F2744" },
  { bg: "#0F2744", color: "#FFFFFF" },
];

const BLOG_URL =
  "https://medium.com/@jacobshilling/embracing-lifes-opportunities-a-journey-of-purpose-and-connection-ef1cf4233bc3";

function FlashTile({ label, sublabel, className = "", style = {} }) {
  const [scheme, setScheme] = useState(FLASH_COLORS[0]);

  useEffect(() => {
    setScheme(FLASH_COLORS[Math.floor(Math.random() * FLASH_COLORS.length)]);
    const interval = setInterval(() => {
      setScheme((prev) => {
        const next = FLASH_COLORS[Math.floor(Math.random() * FLASH_COLORS.length)];
        return next.bg === prev.bg
          ? FLASH_COLORS[(FLASH_COLORS.findIndex((c) => c.bg === prev.bg) + 1) % FLASH_COLORS.length]
          : next;
      });
    }, 2200 + Math.random() * 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flash-tile ${className}`.trim()}
      style={{ background: scheme.bg, color: scheme.color, ...style }}
    >
      {sublabel && <small style={{ color: scheme.color, opacity: 0.6 }}>{sublabel}</small>}
      {label && <strong>{label}</strong>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="home-grid">

      <Link href="/alias" className="tile home-catalyst">
        <small>work alias</small>
        <div className="alias-name">catalyst</div>
        <div className="alias-sub">be the change →</div>
      </Link>

      <a
        href={BLOG_URL}
        target="_blank"
        rel="noreferrer"
        className="tile home-blog"
      >
        <small>writing</small>
        <strong>Embracing Life&apos;s Opportunities</strong>
        <p>
          I have what I need materially. That frees me to put energy into helping others,
          into dreams of recovery, opportunity for the poorest, and peace within myself
          and community — and into the small bits of work that still matter because the
          world is large and we are small.
        </p>
        <span className="home-blog-link">Read on Medium →</span>
      </a>

      <section className="tile mantra">
        <p>
          I fully and unconditionally accept all aspects of myself and who I am right now.
          I acknowledge and accept my strengths and my weaknesses.
          I accept that I am a <em>work in progress.</em>{" "}
          And today, I am ready, open, and willing to learn and grow.
        </p>
      </section>

      <Link href="/reframes#attention" className="tile anxiety-tile">
        <span className="red-blob" aria-hidden="true" />
        <small>the biggest anxiety maker — open it</small>
      </Link>

      <div className="tile home-amazing">
        <small>the point</small>
        <h2>Make this life amazing. It&apos;s not long.</h2>
        <p>
          Use all the logical and psychological tools. Knowledge of how the brain works is an advantage.
        </p>
        <p className="austrian">
          Austrian school of thought: the cleaner in the restaurant is as important as the cook.
        </p>
      </div>

      <FlashTile sublabel="a reminder" label="You are enough." className="home-flash" />

      <Link href="/why" className="tile home-why">
        <small>why</small>
        <strong>Help where help is needed.</strong>
      </Link>

      <Link href="/inspirations" className="tile home-inspiration">
        <small>inspirations</small>
        <strong>People, words & ideas</strong>
      </Link>

      <Link href="/reframes" className="tile home-reframes">
        <small>reframes</small>
        <strong>Weaknesses → positives</strong>
      </Link>

      <Link href="/alias" className="tile home-alias-link">
        <small>about</small>
        <strong>Who is catalyst?</strong>
      </Link>

    </main>
  );
}
