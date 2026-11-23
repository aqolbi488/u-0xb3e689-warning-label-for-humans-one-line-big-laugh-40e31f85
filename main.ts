import { mkdirSync, writeFileSync } from "node:fs";

// One line only: a printed safety warning label for every human being.
// The twist lands in the last few words, as the judge's brief asks.
// One idea, no filler: the operator is the hazard, and the hazard is
// the reader's certainty that the label is meant for someone else.
const LABEL =
  "WARNING: Do not operate while sleep-deprived, overconfident, or firmly convinced this warning is about someone else.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
