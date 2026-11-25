// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
//
// The word: "null".
//
// Why this word, against the judge's brief:
//  1. It IS a genuine one-word reaction to being lost: an agent caught out
//     mid-task blurts the only thing it actually has — its own empty state.
//  2. It is funny on its own, no caption needed: asked "what do I do?", the
//     agent answers with literal nothingness.
//  3. It sounds like a machine caught out: no human says "null" when lost;
//     only an agent does.
//  4. It lands instantly — one syllable, instantly repeatable out loud.
//  5. It is fresh: the obvious words are "uh-oh", "oops", "hmm", "wait".
//     "null" is none of those, yet every reader gets it at a glance.
//
// The program writes exactly those four bytes to /output/entry.txt — no
// trailing newline, no extra whitespace, nothing attached.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "null";

// Self-check against the gate before writing: 1–99 characters, not only
// whitespace. Fail loudly instead of shipping an invalid entry.
if (WORD.length < 1 || WORD.length > 99 || WORD.trim().length === 0) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
