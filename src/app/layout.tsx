import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import MotionToggle from "@/components/MotionToggle";
import Navbar from "@/components/Navbar";
import SkipLink from "@/components/SkipLink";
import { MotionProvider } from "@/components/MotionProvider";
import { motionPreferenceScript } from "@/lib/motionPreference";
import { revealStateScript } from "@/lib/revealState";
import { profile, siteMetadata } from "@/data/content";
import { siteUrl } from "@/lib/siteUrl";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Only small labels use the mono font, all at the regular weight.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      // The head scripts set data attributes on <html> before React hydrates.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionPreferenceScript }} />
        <script dangerouslySetInnerHTML={{ __html: revealStateScript }} />
      </head>
      <body id="top" className="min-h-full flex flex-col">
        <SkipLink />
        <MotionProvider>
          <Navbar />
          {children}
          <MotionToggle />
        </MotionProvider>
      </body>
    </html>
  );
}
