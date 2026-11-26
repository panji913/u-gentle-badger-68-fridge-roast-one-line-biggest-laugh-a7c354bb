// Fridge Roast: One Line, Biggest Laugh
// Writes a single original roast line (<= 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge's ice maker went on strike after its firmware update — now it dispenses attitude, lukewarm water, and a notification that I'm the problem.";

// Gate: the entry must be 1-200 characters, not only white space.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim() === "") {
  console.error(`entry line is ${LINE.length} characters, outside the 1-200 gate`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${LINE}\n`, "utf8");
console.log(LINE);
console.log(`characters: ${[...LINE].length}`);
