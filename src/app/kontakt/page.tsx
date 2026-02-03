import { Metadata } from "next";
import ContactForm from "./ContactForm";
import {
  WebPageSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/StructuredData";
import Script from "next/script";

// ContactPage schema with LocalBusiness contact info
function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt - Specroll",
    description:
      "Skontaktuj się z firmą Specroll w sprawie bezpłatnej wyceny rolet, żaluzji lub bram garażowych. Obsługujemy Wałbrzych i okolice.",
    url: "https://specroll.pl/kontakt",
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": "https://specroll.pl/#localbusiness",
      name: "Specroll",
      telephone: ["+48 666 088 953", "+48 694 749 815"],
      email: "kontakt@specroll.pl",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wałbrzych",
        addressRegion: "dolnośląskie",
        postalCode: "58-300",
        addressCountry: "PL",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "10:00",
          closes: "14:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+48 666 088 953",
          contactType: "customer service",
          availableLanguage: ["Polish"],
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 50.7714,
              longitude: 16.2843,
            },
            geoRadius: "30000",
          },
        },
        {
          "@type": "ContactPoint",
          telephone: "+48 694 749 815",
          contactType: "sales",
          availableLanguage: ["Polish"],
        },
        {
          "@type": "ContactPoint",
          email: "kontakt@specroll.pl",
          contactType: "customer service",
          availableLanguage: ["Polish"],
        },
      ],
    },
  };

  return (
    <Script
      id="contact-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ for contact page
const contactFaq = [
  {
    question: "Jak mogę skontaktować się ze Specroll?",
    answer:
      "Możesz skontaktować się z nami telefonicznie pod numery +48 666 088 953 lub +48 694 749 815 (poniedziałek-piątek 9:00-17:00, sobota 10:00-14:00), mailowo na adres kontakt@specroll.pl lub wypełniając formularz kontaktowy na tej stronie. Odpowiadamy zwykle w ciągu 24 godzin.",
  },
  {
    question: "Jak zamówić bezpłatną wycenę rolet lub żaluzji?",
    answer:
      "Aby zamówić bezpłatną wycenę, zadzwoń pod numer +48 666 088 953 lub wypełnij formularz kontaktowy. Umówimy termin wizyty naszego specjalisty, który przyjedzie, dokona pomiarów i przedstawi szczegółową wycenę. Usługa jest całkowicie bezpłatna i niezobowiązująca.",
  },
  {
    question: "Jaki jest czas odpowiedzi na zapytanie?",
    answer:
      "Na zapytania telefoniczne odpowiadamy natychmiast w godzinach pracy. Na wiadomości email i formularze kontaktowe odpowiadamy zwykle w ciągu 24 godzin w dni robocze. W pilnych sprawach zalecamy kontakt telefoniczny.",
  },
];

const breadcrumbItems = [
  { name: "Strona główna", url: "https://specroll.pl" },
  { name: "Kontakt", url: "https://specroll.pl/kontakt" },
];

export const metadata: Metadata = {
  title: "Kontakt - Bezpłatna wycena rolet i żaluzji | Specroll Wałbrzych",
  description:
    "Skontaktuj się ze Specroll w sprawie bezpłatnej wyceny rolet, żaluzji lub bram garażowych. Tel: +48 666 088 953, email: kontakt@specroll.pl. Obsługujemy Wałbrzych, Szczawno-Zdrój, Świebodzice i okolice.",
  keywords: [
    "kontakt Specroll",
    "wycena rolet Wałbrzych",
    "wycena żaluzji",
    "pomiar rolet",
    "telefon Specroll",
    "bezpłatna wycena osłon okiennych",
    "kontakt montaż rolet",
  ],
  openGraph: {
    title: "Kontakt - Bezpłatna wycena rolet i żaluzji | Specroll Wałbrzych",
    description:
      "Skontaktuj się ze Specroll: tel. +48 666 088 953, email: kontakt@specroll.pl. Bezpłatna wycena rolet, żaluzji i bram w Wałbrzychu i okolicach.",
  },
  alternates: {
    canonical: "https://specroll.pl/kontakt",
  },
};

export default function ContactPage() {
  return (
    <>
      <WebPageSchema
        name="Kontakt - Specroll Wałbrzych"
        description="Skontaktuj się z firmą Specroll w sprawie bezpłatnej wyceny rolet, żaluzji lub bram garażowych. Obsługujemy Wałbrzych i okolice."
        url="/kontakt"
        dateModified="2026-02-03"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ContactPageSchema />
      <FAQSchema questions={contactFaq} />
      <ContactForm />
    </>
  );
}
