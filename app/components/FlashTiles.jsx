"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const FLASH_COLORS = [
  { bg: "#E8702A", color: "#FFFFFF" },
  { bg: "#F7F7F8", color: "#0F2744" },
  { bg: "#FFF1E6", color: "#0F2744" },
  { bg: "#0F2744", color: "#FFFFFF" },
];

function useFlashScheme() {
  const [scheme, setScheme] = useState(FLASH_COLORS[0]);

  useEffect(() => {
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

  return scheme;
}

export function FlashTile({ label, sublabel, className = "" }) {
  const scheme = useFlashScheme();

  return (
    <div
      className={`flash-tile ${className}`.trim()}
      style={{ background: scheme.bg, color: scheme.color }}
    >
      {sublabel && <small style={{ color: scheme.color, opacity: 0.6 }}>{sublabel}</small>}
      {label && <strong>{label}</strong>}
    </div>
  );
}

export function FlashLink({ href, className = "", external = false, children }) {
  const scheme = useFlashScheme();
  const style = {
    background: scheme.bg,
    color: scheme.color,
    borderColor: scheme.bg,
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`tile flash-link-tile ${className}`.trim()}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`tile flash-link-tile ${className}`.trim()}
      style={style}
    >
      {children}
    </Link>
  );
}
