"use client";

import { useEffect, useState } from "react";

const episode =
  "What matters to me is fairly simple: family and friends, listening well, and " +
  "helping people where I can. I want to work on interesting projects that make life " +
  "better for humans, animals, and the environment. I don't have one fixed passion. " +
  "I notice who needs help, who reaches out, and where one useful idea could help lots " +
  "of people at once. Gain Theory and volunteering with Samaritans have shown me that " +
  "contribution can look like listening, bringing some humour, or simply doing the " +
  "useful thing in front of you. My direction could be artificial intelligence, climate " +
  "change, global poverty, or animal welfare. The subject may change. The aim does not: " +
  "help as much as possible, as simply as possible.";

export default function PodcastPlayer() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => window.speechSynthesis.cancel();
  }, []);

  function togglePlayback() {
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(episode);
    utterance.rate = 0.95;
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setPlaying(true);
  }

  return (
    <div className="podcast">
      <div className="podcast-art" aria-hidden="true">
        🎙️
      </div>
      <div>
        <p className="kicker">A short why</p>
        <h2>What matters, without the polished answer</h2>
        <p>
          Family, friends, useful work, and care for people, animals, and the environment.
        </p>
        <button type="button" onClick={togglePlayback}>
          {playing ? "Stop" : "Play"}
        </button>
      </div>
    </div>
  );
}
