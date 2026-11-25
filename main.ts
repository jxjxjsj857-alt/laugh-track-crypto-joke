// One crypto-trading joke for make.fun's "Laugh Track: The Crypto Trading
// Joke Contest". Writes exactly one line to /output/entry.txt. The gate
// allows 1-200 characters of UTF-8 text, not only whitespace; this line is
// 122 characters.
//
// The joke: "I day-trade for a living. My living is ramen, my day is one
// red candle, and my trade is telling my mom I'm not unemployed."
//
// Setup: "I day-trade for a living." Turn: each word of the setup — living,
// day, trade — is redefined by the grim reality of trading life. Punchline
// lands at the end (telling Mom I'm not unemployed), with recognisable
// details a trader repeats to a friend: ramen, the red candle, the family
// who thinks you're unemployed.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I day-trade for a living. My living is ramen, my day is one red candle, and my trade is telling my mom I'm not unemployed.";

const chars = [...JOKE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`joke must be 1-200 characters, got ${chars}`);
}
if (JOKE.trim() !== JOKE) {
  throw new Error("joke must not have leading or trailing whitespace");
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only whitespace");
}
if (JOKE.includes("\n")) {
  throw new Error("joke must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
