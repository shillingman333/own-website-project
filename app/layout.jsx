import { Fraunces, Manrope } from "next/font/google";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

export const metadata = {
  title: {
    default: "catalyst — a work in progress",
    template: "%s — catalyst",
  },
  description:
    "A personal site about caring, curiosity, and helping where it matters.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const runners = ["🏃", "🏃‍♀️", "🏃", "🏃‍♂️", "🏃‍♀️", "🏃", "🏃‍♂️", "🏃‍♀️", "🏃", "🏃‍♂️", "🏃‍♀️", "🏃"];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>
        <SiteHeader />

        {children}

        <div className="site-end">
          <a
            href="https://medium.com/@jacobshilling"
            target="_blank"
            rel="noreferrer"
            className="medium-link"
          >
            Writing on Medium →
          </a>
        </div>

        <footer className="runner-footer">
          <Link href="/why" className="runner-strapline">
            Physical potential — see what this is! <span>↗</span>
          </Link>
          <div className="runner-track" aria-hidden="true">
            {[...runners, ...runners].map((runner, index) => (
              <span style={{ "--runner": index }} key={index}>
                {runner}
              </span>
            ))}
          </div>
        </footer>
      </body>
    </html>
  );
}
