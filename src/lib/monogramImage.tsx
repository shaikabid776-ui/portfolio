import { ImageResponse } from "next/og";
import { hero } from "@/data/content";
import { brandColors } from "@/lib/brandColors";
import { serifFontFamily, serifFonts } from "@/lib/imageFonts";

type MonogramImageSize = {
  width: number;
  height: number;
};

// Shared by the favicon and the Apple touch icon, which differ only in size.
export function monogramImage(size: MonogramImageSize) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brandColors.background,
          color: brandColors.foreground,
          fontFamily: serifFontFamily,
          fontSize: size.height * 0.62,
          letterSpacing: "-0.04em",
        }}
      >
        <span>{hero.firstName[0]}</span>
        <span style={{ fontStyle: "italic" }}>{hero.lastName[0]}</span>
      </div>
    ),
    { ...size, fonts: serifFonts },
  );
}
