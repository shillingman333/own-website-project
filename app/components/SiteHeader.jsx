"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  ["about", "/alias"],
  ["why", "/why"],
  ["inspirations", "/inspirations"],
  ["reframes", "/reframes"],
  ["spirituality", "/spirituality"],
  ["recommendations", "/recommendations"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-bar">
        <Link className="wordmark" href="/" aria-label="catalyst, home" onClick={() => setOpen(false)}>
          catalyst
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <nav
        id="main-nav"
        className={open ? "site-nav is-open" : "site-nav"}
        aria-label="Main navigation"
      >
        {navItems.map(([label, href]) => (
          <Link href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
