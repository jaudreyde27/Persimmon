import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

// Warm, humanist sans for headings/labels — softer than a geometric grotesque.
const headingFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
});

// Brand wordmark font (used only in the logo).
const logoFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-logo",
  display: "swap",
});

const SITE_URL = "https://persimmon-care.com";
const SITE_NAME = "Persimmon Care Network";
const SITE_DESCRIPTION =
  "Comprehensive diabetes care — remote patient monitoring and high-touch, between-visit support, partnering with your practice at no extra cost to providers.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s — Persimmon Care Network",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Persimmon Care Network — give your patients comprehensive diabetes care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${logoFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
