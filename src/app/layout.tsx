import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import {
  LocalBusinessSchema,
  WebsiteSchema,
  OrganizationSchema,
} from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Specroll | Rolety, żaluzje i bramy garażowe w Wałbrzychu - Profesjonalny montaż",
    template: "%s | Specroll Wałbrzych",
  },
  description:
    "Specroll - profesjonalny montaż rolet, żaluzji, plisów, bram garażowych, markiz i moskitier w Wałbrzychu i okolicach. Bezpłatna wycena i pomiar. Ponad 20 lat doświadczenia, 1000+ zadowolonych klientów. Tel: +48 666 088 953",
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
  authors: [
    {
      name: "Specroll",
      url: "https://specroll.pl",
    },
  ],
  creator: "Specroll",
  publisher: "Specroll",
  category: "Construction & Home Improvement",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://specroll.pl",
    siteName: "Specroll",
    title:
      "Specroll | Rolety, żaluzje i bramy garażowe w Wałbrzychu - Profesjonalny montaż",
    description:
      "Specroll - profesjonalny montaż rolet, żaluzji, plisów, bram garażowych, markiz i moskitier w Wałbrzychu i okolicach. Bezpłatna wycena, ponad 20 lat doświadczenia.",
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
  alternates: {
    canonical: "https://specroll.pl",
  },
  other: {
    // Additional meta tags for AI crawlers
    "ai-content-declaration": "human-written",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        {/* Consent management - autoblocker must load before other scripts for GDPR */}
        <Script
          src="https://web.cmp.usercentrics.eu/modules/autoblocker.js"
          strategy="beforeInteractive"
        />
        <Script
          id="usercentrics-cmp"
          src="https://web.cmp.usercentrics.eu/ui/loader.js"
          data-settings-id="oDMGZID_1Rq1qc"
          strategy="lazyOnload"
          async
        />
        {/* Note: Google Fonts preconnects removed - next/font/google self-hosts fonts */}
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
        {/* Structured Data - JSON-LD schemas in body for better performance */}
        <OrganizationSchema />
        <LocalBusinessSchema url="https://specroll.pl" />
        <WebsiteSchema />
      </body>
    </html>
  );
}
