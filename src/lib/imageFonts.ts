import { readFile } from "node:fs/promises";
import { join } from "node:path";

const fontsDirectory = join(process.cwd(), "assets/fonts");

// Read at module load, outside any handler, so generated images are prerendered at build time.
const [serifRegular, serifItalic] = await Promise.all([
  readFile(join(fontsDirectory, "InstrumentSerif-Regular.ttf")),
  readFile(join(fontsDirectory, "InstrumentSerif-Italic.ttf")),
]);

export const serifFontFamily = "Instrument Serif";

export const serifFonts = [
  { name: serifFontFamily, data: serifRegular, style: "normal" as const, weight: 400 as const },
  { name: serifFontFamily, data: serifItalic, style: "italic" as const, weight: 400 as const },
];
