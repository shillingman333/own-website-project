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
    <>
      <section className="page-shell home-about">
        <p className="eyebrow">Home</p>
        <h1 className="display-title">Hi, I&apos;m Jacob.</h1>
        <p className="lede">
          The goal of this website is to share some things I find important to me,
          and where I am at in terms of my career.
        </p>
        <p className="lede">
          I believe that one person, listening properly, can make a real difference —
          the spark that helps things shift, not just the person who watches and waits.
        </p>
      </section>

      <main className="home-grid">
        <Link href="/career" className="tile home-name">
          <small>career</small>
          <div className="display-name">Where I am</div>
          <div className="name-sub">experience &amp; direction →</div>
        </Link>

        <Link href="/who-i-am" className="tile home-blog">
          <small>who I am</small>
          <strong>Inspirations, spirituality &amp; reframes</strong>
          <p>
            People and ideas that shape me, silence and presence, and the kinder
            frames I try to bring to my own weaknesses.
          </p>
          <span className="home-blog-link">Open →</span>
        </Link>

        <section className="tile mantra">
          <p>
            I fully and unconditionally accept all aspects of myself and who I am right now.
            I acknowledge and accept my strengths and my weaknesses.
            I accept that I am a <em>work in progress.</em>{" "}
            And today, I am ready, open, and willing to learn and grow.
          </p>
        </section>

        <Link href="/who-i-am#attention" className="tile anxiety-tile">
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

        <Link href="/recommendations" className="tile home-why">
          <small>recommendations</small>
          <strong>Things I recommend you buy and use.</strong>
        </Link>

        <a
          href={BLOG_URL}
          target="_blank"
          rel="noreferrer"
          className="tile home-inspiration"
        >
          <small>writing</small>
          <strong>Embracing Life&apos;s Opportunities</strong>
        </a>

        <Link href="/who-i-am#inspirations" className="tile home-reframes">
          <small>inspirations</small>
          <strong>People, words &amp; ideas</strong>
        </Link>
      </main>
    </>
  );
}
