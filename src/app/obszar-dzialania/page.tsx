import { Metadata } from "next";
import Link from "next/link";
import {
  WebPageSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/StructuredData";
import Script from "next/script";

// Service area cities with details
const cities = [
  {
    name: "Wałbrzych",
    description:
      "Główny obszar działania firmy Specroll. Obsługujemy wszystkie dzielnice: Śródmieście, Podgórze, Biały Kamień, Sobięcin, Szczawienko, Nowe Miasto, Stary Zdrój, Rusinowa i Poniatów.",
    population: "~110 000",
    distance: "0 km",
    services: [
      "Rolety wewnętrzne i zewnętrzne",
      "Żaluzje aluminiowe i drewniane",
      "Plisy okienne",
      "Bramy garażowe",
      "Markizy tarasowe",
      "Moskitiery",
    ],
  },
  {
    name: "Szczawno-Zdrój",
    description:
      "Uzdrowiskowe miasto sąsiadujące z Wałbrzychem. Realizujemy projekty w domach jednorodzinnych, pensjonatach i sanatoriach. Bezpłatny dojazd na pomiar.",
    population: "~5 500",
    distance: "5 km",
    services: [
      "Rolety do pensjonatów",
      "Żaluzje do sanatoriów",
      "Moskitiery",
      "Markizy tarasowe",
    ],
  },
  {
    name: "Świebodzice",
    description:
      "Miasto położone 10 km od Wałbrzycha. Obsługujemy klientów indywidualnych oraz firmy. Realizujemy projekty mieszkaniowe i komercyjne.",
    population: "~23 000",
    distance: "10 km",
    services: [
      "Rolety mieszkaniowe",
      "Żaluzje do biur",
      "Bramy garażowe",
      "Plisy okienne",
    ],
  },
  {
    name: "Świdnica",
    description:
      "Drugie co do wielkości miasto w powiecie. Regularnie realizujemy projekty dla mieszkańców Świdnicy i okolic. Bezpłatna wycena i pomiar.",
    population: "~57 000",
    distance: "25 km",
    services: [
      "Rolety na wymiar",
      "Żaluzje aluminiowe",
      "Bramy garażowe segmentowe",
      "Markizy",
    ],
  },
  {
    name: "Boguszów-Gorce",
    description:
      "Miasto górnicze w bezpośrednim sąsiedztwie Wałbrzycha. Obsługujemy wszystkie osiedla i dzielnice.",
    population: "~15 000",
    distance: "5 km",
    services: ["Rolety", "Żaluzje", "Moskitiery", "Plisy"],
  },
  {
    name: "Jedlina-Zdrój",
    description:
      "Uzdrowisko w Górach Wałbrzyskich. Realizujemy montaże w domach jednorodzinnych i obiektach uzdrowiskowych.",
    population: "~5 000",
    distance: "12 km",
    services: ["Rolety", "Żaluzje", "Markizy", "Moskitiery"],
  },
  {
    name: "Głuszyca",
    description:
      "Gmina w Górach Sowich. Obsługujemy mieszkańców Głuszycy i okolicznych miejscowości.",
    population: "~9 000",
    distance: "15 km",
    services: ["Rolety zewnętrzne", "Bramy garażowe", "Moskitiery"],
  },
  {
    name: "Mieroszów",
    description:
      "Miasto przy granicy z Czechami. Dojeżdżamy bezpłatnie na pomiar i wycenę.",
    population: "~4 000",
    distance: "18 km",
    services: ["Rolety", "Żaluzje", "Plisy", "Moskitiery"],
  },
];

// FAQ for area page
const areaFaq = [
  {
    question: "Jaki jest obszar działania firmy Specroll?",
    answer:
      "Specroll obsługuje Wałbrzych oraz miejscowości w promieniu około 30 km, w tym: Szczawno-Zdrój, Świebodzice, Świdnicę, Boguszów-Gorce, Jedlinę-Zdrój, Głuszycę i Mieroszów. W szczególnych przypadkach realizujemy również projekty w dalszych lokalizacjach - skontaktuj się z nami, aby ustalić szczegóły.",
  },
  {
    question: "Czy dojazd na pomiar i wycenę jest bezpłatny?",
    answer:
      "Tak, dojazd na bezpłatny pomiar i wycenę jest gratis w całym naszym obszarze działania (do 30 km od Wałbrzycha). Nie pobieramy żadnych dodatkowych opłat za wizytę, nawet jeśli ostatecznie nie zdecydujesz się na zamówienie.",
  },
  {
    question: "Czy obsługujecie miejscowości spoza listy?",
    answer:
      "Tak, jeśli Twoja miejscowość nie jest wymieniona na liście, ale znajduje się w rozsądnej odległości od Wałbrzycha, chętnie rozważymy realizację projektu. Skontaktuj się z nami telefonicznie lub przez formularz, aby ustalić możliwości i ewentualne warunki.",
  },
  {
    question: "Jak szybko możecie przyjechać na wycenę?",
    answer:
      "Standardowo umawiamy wizyty wyceniające w ciągu 2-3 dni roboczych od kontaktu. W pilnych przypadkach staramy się przyjechać szybciej. W Wałbrzychu i najbliższych miejscowościach często możemy umówić wizytę na następny dzień.",
  },
];

const breadcrumbItems = [
  { name: "Strona główna", url: "https://specroll.pl" },
  { name: "Obszar działania", url: "https://specroll.pl/obszar-dzialania" },
];

// GeoCircle schema for service area
function ServiceAreaSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Montaż rolet, żaluzji i bram garażowych",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://specroll.pl/#localbusiness",
      name: "Specroll",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 50.7714,
        longitude: 16.2843,
      },
      geoRadius: "30000",
    },
    serviceArea: [
      {
        "@type": "City",
        name: "Wałbrzych",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "województwo dolnośląskie",
        },
      },
      { "@type": "City", name: "Szczawno-Zdrój" },
      { "@type": "City", name: "Świebodzice" },
      { "@type": "City", name: "Świdnica" },
      { "@type": "City", name: "Boguszów-Gorce" },
      { "@type": "City", name: "Jedlina-Zdrój" },
      { "@type": "City", name: "Głuszyca" },
      { "@type": "City", name: "Mieroszów" },
    ],
  };

  return (
    <Script
      id="service-area-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export const metadata: Metadata = {
  title: "Obszar działania - Wałbrzych, Szczawno-Zdrój, Świebodzice | Specroll",
  description:
    "Specroll obsługuje Wałbrzych i okolice: Szczawno-Zdrój, Świebodzice, Świdnicę i miejscowości w promieniu 30 km. Bezpłatny dojazd na pomiar. Montaż rolet, żaluzji, bram garażowych.",
  keywords: [
    "rolety Wałbrzych",
    "żaluzje Szczawno-Zdrój",
    "bramy garażowe Świebodzice",
    "moskitiery Świdnica",
    "montaż rolet okolice Wałbrzycha",
    "rolety Boguszów-Gorce",
    "żaluzje Jedlina-Zdrój",
    "osłony okienne Głuszyca",
    "montaż rolet Dolny Śląsk",
  ],
  openGraph: {
    title: "Obszar działania - Wałbrzych i okolice | Specroll",
    description:
      "Specroll obsługuje Wałbrzych i okolice: Szczawno-Zdrój, Świebodzice, Świdnicę. Bezpłatny dojazd na pomiar w promieniu 30 km.",
  },
  alternates: {
    canonical: "https://specroll.pl/obszar-dzialania",
  },
};

export default function ObszarDzialaniaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-32 pb-16">
      <WebPageSchema
        name="Obszar działania - Specroll Wałbrzych"
        description="Specroll obsługuje Wałbrzych i okolice w promieniu 30 km: Szczawno-Zdrój, Świebodzice, Świdnicę i inne miejscowości."
        url="/obszar-dzialania"
        dateModified="2026-02-03"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema questions={areaFaq} />
      <ServiceAreaSchema />

      <div className="container-center">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Lokalna obsługa
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Gdzie działa <span className="gradient-text">Specroll</span>?
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specroll to lokalna firma z Wałbrzycha. Obsługujemy klientów z
            Wałbrzycha i okolicznych miejscowości w promieniu około 30 km.
            Oferujemy bezpłatny dojazd na pomiar i wycenę w całym naszym obszarze
            działania.
          </p>
        </header>

        {/* Map placeholder info */}
        <section className="mb-16" aria-labelledby="map-heading">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100">
            <h2 id="map-heading" className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Promień obsługi: około 30 km od Wałbrzycha
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Nasza firma działa na terenie Wałbrzycha i okolicznych miejscowości
              województwa dolnośląskiego. Dojeżdżamy bezpłatnie do klientów w
              celu pomiaru i wyceny.
            </p>
          </div>
        </section>

        {/* Cities Grid */}
        <section aria-labelledby="cities-heading">
          <h2
            id="cities-heading"
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Obsługiwane miejscowości
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cities.map((city, index) => (
              <article
                key={city.name}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {city.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {city.distance} od centrum • ~{city.population} mieszkańców
                    </p>
                  </div>
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{city.description}</p>
                <div className="flex flex-wrap gap-2">
                  {city.services.slice(0, 4).map((service) => (
                    <span
                      key={service}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Additional info */}
        <section className="mt-16" aria-labelledby="additional-info">
          <div className="max-w-4xl mx-auto">
            <h2 id="additional-info" className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Dlaczego warto wybrać lokalną firmę?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Szybka reakcja",
                  description:
                    "Jako lokalna firma możemy szybko zareagować na Twoje potrzeby - wycena często następnego dnia.",
                  icon: "⚡",
                },
                {
                  title: "Bezpłatny dojazd",
                  description:
                    "Nie doliczamy kosztów dojazdu do wyceny ani montażu w naszym obszarze działania.",
                  icon: "🚗",
                },
                {
                  title: "Lokalna gwarancja",
                  description:
                    "Jesteśmy na miejscu - w razie potrzeby serwisu czy reklamacji przyjedziemy szybko.",
                  icon: "🛡️",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-20" aria-labelledby="area-faq-heading">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                FAQ
              </span>
              <h2
                id="area-faq-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Pytania o obszar działania
              </h2>
            </div>
            <div className="space-y-6">
              {areaFaq.map((item, index) => (
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
        <section className="mt-16 text-center" aria-labelledby="area-cta">
          <h2 id="area-cta" className="sr-only">
            Skontaktuj się z nami
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mieszkasz w naszym obszarze działania?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Skontaktuj się z nami i umów bezpłatną wycenę. Przyjedziemy,
              zmierzymy okna i przedstawimy ofertę bez zobowiązań.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-modern-primary">
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
          </div>
        </section>
      </div>
    </main>
  );
}
