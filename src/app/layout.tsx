import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogProvider } from "@/app/Providers";
import Script from "next/script";
import {
  LocalBusinessSchema,
  WebsiteSchema,
} from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Specroll | Rolety, żaluzje i bramy garażowe w Wałbrzychu",
    template: "%s | Specroll",
  },
  description:
    "Profesjonalny montaż rolet, żaluzji i bram garażowych w Wałbrzychu i okolicach. Bezpłatna wycena i fachowe doradztwo. ⭐ 5+ lat doświadczenia ⭐ 1000+ zadowolonych klientów",
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
  ],
  authors: [{ name: "Specroll" }],
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
    title: "Specroll | Rolety, żaluzje i bramy garażowe w Wałbrzychu",
    description:
      "Profesjonalny montaż rolet, żaluzji i bram garażowych w Wałbrzychu i okolicach. Bezpłatna wycena i fachowe doradztwo. ⭐ 5+ lat doświadczenia ⭐ 1000+ zadowolonych klientów",
    images: [
      {
        url: "/zaluzje-47.webp",
        width: 1200,
        height: 630,
        alt: "Specroll - Rolety, żaluzje i bramy garażowe w Wałbrzychu",
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
    creator: "@specroll", // Replace with actual Twitter handle if exists
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <Script
          src="https://web.cmp.usercentrics.eu/modules/autoblocker.js"
          strategy="beforeInteractive"
        />
        <Script
          id="usercentrics-cmp"
          src="https://web.cmp.usercentrics.eu/ui/loader.js"
          data-settings-id="oDMGZID_1Rq1qc"
          strategy="afterInteractive"
          async
        />
      </head>
      <body className={inter.className}>
        <PostHogProvider>
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
          <LocalBusinessSchema url="https://specroll.pl" />
          <WebsiteSchema />
        </PostHogProvider>
      </body>
    </html>
  );
}
