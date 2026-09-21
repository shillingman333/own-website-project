import { Fraunces, Manrope } from "next/font/google";
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
    default: "Jacob — a work in progress",
    template: "%s — Jacob",
  },
  description:
    "Sharing things that matter to me, and where I am in my career.",
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
