// Fridge Roast: One Line, Biggest Laugh
// Writes a single original roast line (<= 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge's ice maker went on strike after its firmware update — now it dispenses attitude, lukewarm water, and a notification that I'm the problem.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${LINE}\n`, "utf8");
console.log(LINE);
console.log(`characters: ${[...LINE].length}`);
