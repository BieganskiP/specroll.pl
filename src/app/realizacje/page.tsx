import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realizacje - Nasze projekty | Specroll Wałbrzych",
  description:
    "Zobacz nasze realizacje i projekty montażu rolet, żaluzji i bram garażowych w Wałbrzychu i okolicach. Galeria zrealizowanych prac.",
  keywords: [
    "realizacje Specroll",
    "galeria projektów",
    "montaże rolet",
    "przykłady realizacji",
    "portfolio",
  ],
  openGraph: {
    title: "Realizacje - Nasze projekty | Specroll Wałbrzych",
    description:
      "Zobacz nasze realizacje i projekty montażu rolet, żaluzji i bram garażowych w Wałbrzychu i okolicach.",
  },
  alternates: {
    canonical: "https://specroll.pl/realizacje",
  },
};

export default function Realizacje() {
  return (
    <div>
      <h1>Realizacje</h1>
      <p>page</p>
    </div>
  );
}
