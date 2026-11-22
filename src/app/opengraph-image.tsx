import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hero, profile, siteMetadata } from "@/data/content";

export const alt = siteMetadata.openGraphImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse cannot read CSS variables, so these mirror the tokens in globals.css.
const colors = {
  background: "#0a0a0b",
  foreground: "#ededed",
  muted: "#8a8a8f",
  accent: "#7c9cff",
};

const fontsDirectory = join(process.cwd(), "assets/fonts");

// Read at module load, outside the handler, so the image is prerendered at build time.
const [serifRegular, serifItalic] = await Promise.all([
  readFile(join(fontsDirectory, "InstrumentSerif-Regular.ttf")),
  readFile(join(fontsDirectory, "InstrumentSerif-Italic.ttf")),
]);

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: colors.background,
          color: colors.foreground,
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: 9999,
            background: colors.accent,
          }}
        />
        <div
          style={{
            display: "flex",
            gap: 28,
            marginTop: 40,
            fontFamily: "Instrument Serif",
            fontSize: 160,
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
          }}
        >
          <span>{hero.firstName}</span>
          <span style={{ fontStyle: "italic" }}>{hero.lastName}</span>
        </div>
        <div style={{ marginTop: 40, fontSize: 40, color: colors.muted }}>{profile.role}</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serifRegular, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: serifItalic, style: "italic", weight: 400 },
      ],
    },
  );
}
