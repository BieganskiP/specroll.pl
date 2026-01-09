import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const services = [
  {
    title: "Bezpłatna wycena",
    description:
      "Nasz specjalista przyjedzie do Ciebie, dokona pomiarów i przedstawi najlepsze rozwiązania dopasowane do Twoich potrzeb.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
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
      "Zespół doświadczonych montażystów zadba o prawidłową instalację produktów, gwarantując ich długotrwałe i bezproblemowe działanie.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
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
      "Świadczymy usługi serwisowe i naprawcze dla wszystkich naszych produktów, zapewniając ich długotrwałe i bezawaryjne działanie.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
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

const process = [
  {
    number: "01",
    title: "Kontakt",
    description:
      "Skontaktuj się z nami telefonicznie lub przez formularz kontaktowy.",
  },
  {
    number: "02",
    title: "Pomiar i wycena",
    description: "Nasz specjalista przyjedzie na bezpłatny pomiar i wycenę.",
  },
  {
    number: "03",
    title: "Zamówienie",
    description:
      "Potwierdzamy szczegóły i przyjmujemy zamówienie do realizacji.",
  },
  {
    number: "04",
    title: "Montaż",
    description: "Profesjonalny montaż w ustalonym terminie.",
  },
];

export const metadata: Metadata = {
  title: "Usługi - Montaż, pomiar, serwis | Specroll Wałbrzych",
  description:
    "Kompleksowe usługi: bezpłatna wycena, profesjonalny montaż rolet i żaluzji, serwis i naprawa. Doświadczony zespół montażystów. Wałbrzych i okolice.",
  keywords: [
    "montaż rolet Wałbrzych",
    "montaż żaluzji",
    "serwis rolet",
    "naprawa żaluzji",
    "bezpłatna wycena",
    "pomiar okien",
    "automatyka rolet",
  ],
  openGraph: {
    title: "Usługi - Montaż, pomiar, serwis | Specroll Wałbrzych",
    description:
      "Kompleksowe usługi: bezpłatna wycena, profesjonalny montaż rolet i żaluzji, serwis i naprawa. Doświadczony zespół montażystów.",
  },
  alternates: {
    canonical: "https://specroll.pl/uslugi",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-32 pb-16">
      <div className="container-center">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Profesjonalna obsługa
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Nasze <span className="gradient-text">Usługi</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Oferujemy kompleksowe usługi od pomiaru, przez doradztwo, po montaż
            i serwis. Nasi specjaliści pomogą dobrać najlepsze rozwiązania dla
            Twojego domu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
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
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-16 shadow-modern-lg border border-blue-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Jak <span className="gradient-text">działamy</span>?
              </h2>
              <p className="text-gray-600">Prosty proces w 4 krokach</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div
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
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            href="/kontakt"
            className="btn-modern-primary"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </main>
  );
}
