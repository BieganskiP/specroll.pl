import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  LocalBusinessSchema,
  WebsiteSchema,
  OrganizationSchema,
} from "@/components/StructuredData";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import { PostHogProvider } from "@/components/PostHogProvider";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Rolety, żaluzje i bramy garażowe Wałbrzych | Specroll",
    template: "%s | Specroll Wałbrzych",
  },
  description:
    "Profesjonalny montaż rolet, żaluzji, plisów, bram garażowych i markiz w Wałbrzychu i okolicach. Bezpłatna wycena. Tel: +48 666 088 953",
  metadataBase: new URL("https://specroll.pl"),
  keywords: [
    "rolety Wałbrzych",
    "żaluzje Wałbrzych",
    "bramy garażowe Wałbrzych",
    "markizy tarasowe",
    "moskitiery",
    "plisy okienne",
    "montaż rolet",
    "automatyka bram",
    "rolety zewnętrzne",
    "żaluzje aluminiowe",
    "Szczawno-Zdrój",
    "Świebodzice",
    "osłony okienne",
    "rolety na wymiar",
  ],
  authors: [{ name: "Specroll", url: "https://specroll.pl" }],
  creator: "Specroll",
  publisher: "Specroll",
  category: "Construction & Home Improvement",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://specroll.pl",
    siteName: "Specroll",
    title: "Rolety, żaluzje i bramy garażowe Wałbrzych | Specroll",
    description:
      "Profesjonalny montaż rolet, żaluzji, plisów, bram garażowych i markiz w Wałbrzychu i okolicach. Bezpłatna wycena. Tel: +48 666 088 953",
    images: [
      {
        url: "/zaluzje-47.webp",
        width: 1200,
        height: 630,
        alt: "Specroll - Profesjonalne rolety, żaluzje i bramy garażowe w Wałbrzychu",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Specroll | Rolety, żaluzje i bramy garażowe w Wałbrzychu",
    description:
      "Profesjonalny montaż rolet, żaluzji i bram garażowych w Wałbrzychu i okolicach. Bezpłatna wycena i fachowe doradztwo.",
    images: ["/zaluzje-47.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://specroll.pl" },
  other: { "ai-content-declaration": "human-written" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        {/* WCAG 2.1 – skip navigation link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Przejdź do treści
        </a>

        <CookieConsentProvider>
          <PostHogProvider>
            {children}
            <Footer />
            <CookieBanner />
          </PostHogProvider>
        </CookieConsentProvider>

        <Analytics />
        <SpeedInsights />

        {/* Structured Data – JSON-LD */}
        <OrganizationSchema />
        <LocalBusinessSchema url="https://specroll.pl" />
        <WebsiteSchema />
      </body>
    </html>
  );
}
