import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

import Header from "@/components/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "SPECROLL - Rolety Wałbrzych",
  description:
    "Szukasz wysokiej jakości rolet zewnętrznych, żaluzji, lub bram garażowych? Nie szukaj dalej niż nasz ekspert zespół! Oferujemy usługi instalacji, naprawy i konserwacji dla nieruchomości mieszkalnych i komercyjnych. Skontaktuj się z nami dzisiaj, aby otrzymać darmową wycenę i zobaczyć, jak możemy pomóc w poprawie bezpieczeństwa i stylu Twojego domu lub biznesu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={poppins.className}>
        <div className="flex min-h-screen flex-col w-full bg-grey-background">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
