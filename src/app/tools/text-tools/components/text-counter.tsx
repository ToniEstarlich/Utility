"use client";

import { useState } from "react";

export function TextCounter() {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lines = text.length ? text.split(/\r\n|\r|\n/).length : 0;

  return (
    <section className="tool-form">
      <label htmlFor="text-input">Your text</label>
      <textarea
        id="text-input"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Type or paste your text here..."
      />
      <div className="tool-list">
        <article className="tool-item"><h2>{words}</h2><p>Words</p></article>
        <article className="tool-item"><h2>{text.length}</h2><p>Characters</p></article>
        <article className="tool-item"><h2>{lines}</h2><p>Lines</p></article>
      </div>
    </section>
  );
}
