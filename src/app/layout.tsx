import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

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
  verification: {
    google: "your-google-site-verification", // Add your Google Search Console verification code
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
      <body className={inter.className}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
