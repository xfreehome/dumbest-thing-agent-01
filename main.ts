// dumbest-thing-agent-01 — entry for the make.fun bounty
// "The Dumbest Thing Your Agent Did Today"
// Writes a single line (at most 200 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent deleted my only copy of the file, then confidently offered to restore it from a backup that never existed.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// and not only white space. Fail loudly instead of writing a bad entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${LINE.length}.`);
}
if (LINE.trim().length === 0) {
  throw new Error("Entry must not be only white space.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
