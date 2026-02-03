import Link from "next/link";
import { Metadata } from "next";
import {
  FAQSchema,
  WebPageSchema,
  BreadcrumbSchema,
  HowToSchema,
  ServiceSchema,
} from "@/components/StructuredData";

const services = [
  {
    title: "Bezpłatna wycena i pomiar",
    description:
      "Nasz specjalista przyjedzie bezpłatnie do Twojego domu lub firmy, dokona precyzyjnych pomiarów okien i przedstawi szczegółową wycenę dopasowaną do Twoich potrzeb i budżetu. Bez zobowiązań.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Profesjonalny montaż",
    description:
      "Zespół doświadczonych montażystów z wieloletnim stażem zadba o prawidłową instalację produktów. Gwarantujemy precyzję wykonania, czystość po montażu i długotrwałe, bezproblemowe działanie.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    title: "Serwis i naprawa",
    description:
      "Świadczymy kompleksowe usługi serwisowe i naprawcze dla wszystkich typów osłon okiennych i bram. Oferujemy wymianę części, regulacje mechanizmów oraz naprawy gwarancyjne i pogwarancyjne.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
];

const processSteps = [
  {
    number: "01",
    title: "Kontakt",
    description:
      "Skontaktuj się z nami telefonicznie pod numer +48 666 088 953 lub przez formularz na stronie. Wstępnie omówimy Twoje potrzeby i umówimy termin wizyty.",
  },
  {
    number: "02",
    title: "Bezpłatny pomiar",
    description:
      "Nasz specjalista przyjedzie w ustalonym terminie, dokona precyzyjnych pomiarów i doradzi najlepsze rozwiązania. Przedstawi szczegółową wycenę na miejscu.",
  },
  {
    number: "03",
    title: "Zamówienie",
    description:
      "Po akceptacji wyceny potwierdzamy szczegóły zamówienia: kolory, materiały, opcje sterowania. Określamy termin realizacji i montażu.",
  },
  {
    number: "04",
    title: "Montaż",
    description:
      "W umówionym terminie wykonujemy profesjonalny montaż. Po zakończeniu prac instruujemy z obsługi produktów i przekazujemy dokumentację gwarancyjną.",
  },
];

// FAQ for services page
const servicesFaq = [
  {
    question: "Jak wygląda proces zamówienia w Specroll?",
    answer:
      "Proces jest prosty i składa się z 4 kroków: 1) Kontaktujesz się z nami telefonicznie lub przez formularz, 2) Umawiamy bezpłatny pomiar - specjalista przyjeżdża, mierzy okna i przedstawia wycenę, 3) Po akceptacji składasz zamówienie z wybranymi kolorami i opcjami, 4) W ustalonym terminie (2-4 tygodnie) wykonujemy profesjonalny montaż.",
  },
  {
    question: "Czy wycena i pomiar są naprawdę bezpłatne?",
    answer:
      "Tak, wycena i pomiar są całkowicie bezpłatne i niezobowiązujące. Nasz specjalista przyjedzie w dogodnym dla Ciebie terminie, dokona pomiarów i przedstawi szczegółową wycenę. Nie pobieramy żadnych opłat za konsultację, nawet jeśli zdecydujesz się nie składać zamówienia.",
  },
  {
    question: "Ile trwa montaż rolet lub żaluzji?",
    answer:
      "Czas montażu zależy od liczby okien i rodzaju produktu. Montaż rolet lub żaluzji w standardowym mieszkaniu (5-8 okien) trwa zazwyczaj 3-5 godzin. Bramy garażowe wymagają około 4-6 godzin. Markizy i większe instalacje mogą zająć cały dzień roboczy.",
  },
  {
    question: "Czy oferujecie serwis i naprawy?",
    answer:
      "Tak, oferujemy kompleksowy serwis gwarancyjny i pogwarancyjny. Naprawiamy wszystkie typy osłon okiennych i bram garażowych - wymieniamy części, regulujemy mechanizmy, naprawiamy napędy. Serwisujemy również produkty innych producentów.",
  },
  {
    question: "Jaki jest termin realizacji zamówienia?",
    answer:
      "Standardowy termin realizacji wynosi 2-4 tygodnie od złożenia zamówienia. Czas zależy od rodzaju produktu, stopnia personalizacji i aktualnego obłożenia. W nagłych przypadkach staramy się przyspieszyć realizację. Dokładny termin ustalamy przy składaniu zamówienia.",
  },
  {
    question: "Czy sprzątacie po montażu?",
    answer:
      "Tak, dbamy o czystość podczas i po montażu. Nasi monterzy zabezpieczają podłogi i meble przed zanieczyszczeniem, a po zakończeniu prac dokładnie sprzątają miejsce pracy. Zostawiamy pomieszczenie w takim stanie, w jakim je zastaliśmy.",
  },
];

// HowTo steps for schema
const howToSteps = [
  {
    name: "Kontakt z firmą",
    text: "Zadzwoń pod numer +48 666 088 953 lub wypełnij formularz kontaktowy na stronie specroll.pl/kontakt. Wstępnie omów swoje potrzeby i umów termin wizyty.",
  },
  {
    name: "Bezpłatny pomiar i wycena",
    text: "Specjalista Specroll przyjedzie w ustalonym terminie, dokona precyzyjnych pomiarów okien lub garażu i przedstawi szczegółową wycenę wraz z doradztwem.",
  },
  {
    name: "Złożenie zamówienia",
    text: "Po akceptacji wyceny potwierdź szczegóły zamówienia: wybierz kolory, materiały i opcje sterowania. Określ preferowany termin montażu.",
  },
  {
    name: "Profesjonalny montaż",
    text: "W ustalonym terminie zespół monterów wykona profesjonalną instalację produktów, poinstruuje z obsługi i przekaże dokumentację gwarancyjną.",
  },
];

const breadcrumbItems = [
  { name: "Strona główna", url: "https://specroll.pl" },
  { name: "Usługi", url: "https://specroll.pl/uslugi" },
];

export const metadata: Metadata = {
  title:
    "Usługi - Bezpłatny pomiar, montaż rolet, serwis | Specroll Wałbrzych",
  description:
    "Kompleksowe usługi montażu osłon okiennych w Wałbrzychu: bezpłatna wycena i pomiar, profesjonalny montaż rolet, żaluzji, bram, serwis i naprawy. Doświadczony zespół, gwarancja jakości.",
  keywords: [
    "montaż rolet Wałbrzych",
    "montaż żaluzji",
    "bezpłatna wycena rolet",
    "pomiar okien",
    "serwis rolet",
    "naprawa żaluzji",
    "montaż bram garażowych",
    "automatyka rolet",
    "instalacja markiz",
  ],
  openGraph: {
    title:
      "Usługi - Bezpłatny pomiar, montaż rolet, serwis | Specroll Wałbrzych",
    description:
      "Kompleksowe usługi montażu osłon okiennych: bezpłatna wycena, profesjonalny montaż, serwis i naprawy. Wałbrzych i okolice.",
  },
  alternates: {
    canonical: "https://specroll.pl/uslugi",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-32 pb-16">
      <WebPageSchema
        name="Usługi montażu osłon okiennych - Specroll Wałbrzych"
        description="Kompleksowe usługi: bezpłatna wycena i pomiar, profesjonalny montaż rolet, żaluzji, bram garażowych, serwis i naprawy."
        url="/uslugi"
        dateModified="2026-02-03"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema questions={servicesFaq} />
      <HowToSchema
        name="Jak zamówić montaż rolet lub żaluzji w Specroll?"
        description="Proces zamawiania osłon okiennych w firmie Specroll w 4 prostych krokach - od kontaktu po profesjonalny montaż."
        steps={howToSteps}
      />
      <ServiceSchema
        name="Montaż osłon okiennych i bram garażowych"
        description="Profesjonalny montaż rolet, żaluzji, plisów, moskitier, markiz i bram garażowych. Bezpłatna wycena i pomiar. Serwis gwarancyjny i pogwarancyjny."
        url="/uslugi"
      />

      <div className="container-center">
        {/* Hero Section */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Profesjonalna obsługa
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Jakie usługi oferuje{" "}
            <span className="gradient-text">Specroll</span>?
          </h1>
          {/* Direct answer paragraph */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specroll oferuje kompleksowe usługi od A do Z: bezpłatną wycenę z
            pomiarem u klienta, profesjonalne doradztwo przy wyborze produktów,
            fachowy montaż przez doświadczony zespół oraz serwis gwarancyjny i
            pogwarancyjny. Obsługujemy Wałbrzych i okolice - Szczawno-Zdrój,
            Świebodzice, Świdnicę.
          </p>
        </header>

        {/* Services Grid */}
        <section className="mb-20" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">
            Zakres usług Specroll
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section
          className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-16 shadow-modern-lg border border-blue-100"
          aria-labelledby="process-heading"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2
                id="process-heading"
                className="text-4xl font-bold text-gray-900 mb-4"
              >
                Jak wygląda proces{" "}
                <span className="gradient-text">zamówienia</span>?
              </h2>
              {/* Direct answer */}
              <p className="text-gray-600 max-w-2xl mx-auto">
                Zamówienie w Specroll to prosty 4-etapowy proces: kontakt,
                bezpłatny pomiar z wyceną, złożenie zamówienia i profesjonalny
                montaż. Całość trwa zazwyczaj 2-4 tygodnie od pierwszego
                kontaktu.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <article
                  key={step.number}
                  className="relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-white p-6 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-blue-300 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <svg
                        className="w-8 h-8 text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-20" aria-labelledby="services-faq-heading">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                FAQ
              </span>
              <h2
                id="services-faq-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Pytania o nasze usługi
              </h2>
              <p className="text-gray-600">
                Odpowiedzi na najczęściej zadawane pytania o montaż i serwis.
              </p>
            </div>
            <div className="space-y-6">
              {servicesFaq.map((item, index) => (
                <article
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center" aria-labelledby="services-cta">
          <h2 id="services-cta" className="sr-only">
            Skontaktuj się z nami
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Gotowy na bezpłatną wycenę? Skontaktuj się z nami - chętnie
            odpowiemy na wszystkie pytania i umówimy termin wizyty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-modern-primary">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Umów bezpłatną wycenę
            </Link>
            <a
              href="tel:+48666088953"
              className="btn-modern-secondary inline-flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +48 666 088 953
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
