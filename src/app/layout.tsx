import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogProvider } from "@/app/Providers";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Specroll | Rolety, żaluzje i bramy garażowe w Wałbrzychu",
  description:
    "Profesjonalny montaż rolet, żaluzji i bram garażowych w Wałbrzychu i okolicach. Bezpłatna wycena i fachowe doradztwo.",
  metadataBase: new URL("https://specroll.pl"),
  keywords:
    "rolety, żaluzje, bramy garażowe, markizy, moskitiery, plisy, Wałbrzych, montaż, wycena",
  authors: [{ name: "Specroll" }],
  creator: "Specroll",
  publisher: "Specroll",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://specroll.pl",
    siteName: "Specroll",
    title: "Specroll | Rolety, żaluzje i bramy garażowe w Wałbrzychu",
    description:
      "Profesjonalny montaż rolet, żaluzji i bram garażowych w Wałbrzychu i okolicach. Bezpłatna wycena i fachowe doradztwo.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Specroll - Rolety, żaluzje i bramy garażowe w Wałbrzychu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Specroll | Rolety, żaluzje i bramy garażowe w Wałbrzychu",
    description:
      "Profesjonalny montaż rolet, żaluzji i bram garażowych w Wałbrzychu i okolicach. Bezpłatna wycena i fachowe doradztwo.",
    images: ["/og-image.jpg"],
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
        </PostHogProvider>
      </body>
    </html>
  );
}
