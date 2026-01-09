import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt - Bezpłatna wycena | Specroll Wałbrzych",
  description:
    "Skontaktuj się z nami w sprawie bezpłatnej wyceny rolet, żaluzji lub bram garażowych. ☎ +48 666 088 953 ✉ kontakt@specroll.pl. Obsługujemy Wałbrzych i okolice.",
  keywords: [
    "kontakt Specroll",
    "wycena rolet Wałbrzych",
    "wycena żaluzji",
    "pomiar rolet",
    "Specroll Wałbrzych kontakt",
    "bezpłatna wycena",
  ],
  openGraph: {
    title: "Kontakt - Bezpłatna wycena | Specroll Wałbrzych",
    description:
      "Skontaktuj się z nami w sprawie bezpłatnej wyceny rolet, żaluzji lub bram garażowych. Obsługujemy Wałbrzych i okolice.",
  },
  alternates: {
    canonical: "https://specroll.pl/kontakt",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
