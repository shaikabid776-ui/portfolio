import { ImageResponse } from "next/og";
import { hero, profile, siteMetadata } from "@/data/content";
import { brandColors } from "@/lib/brandColors";
import { serifFontFamily, serifFonts } from "@/lib/imageFonts";

export const alt = siteMetadata.openGraphImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: brandColors.background,
          color: brandColors.foreground,
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: 9999,
            background: brandColors.accent,
          }}
        />
        <div
          style={{
            display: "flex",
            gap: 28,
            marginTop: 40,
            fontFamily: serifFontFamily,
            fontSize: 160,
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
          }}
        >
          <span>{hero.firstName}</span>
          <span style={{ fontStyle: "italic" }}>{hero.lastName}</span>
        </div>
        <div style={{ marginTop: 40, fontSize: 40, color: brandColors.muted }}>{profile.role}</div>
      </div>
    ),
    {
      ...size,
      fonts: serifFonts,
    },
  );
}
