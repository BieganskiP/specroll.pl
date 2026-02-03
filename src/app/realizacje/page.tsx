import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  WebPageSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/StructuredData";

// Realizacje data
const realizacje = [
  {
    id: 1,
    title: "Kompleksowa instalacja żaluzji w Zespole Szkół Politechnicznych",
    location: "Wałbrzych, Energetyk",
    description:
      "Montaż 47 sztuk żaluzji aluminiowych w salach lekcyjnych i biurach administracyjnych. Projekt obejmował precyzyjne dopasowanie do różnych rozmiarów okien oraz instalację w istniejącej infrastrukturze budynku.",
    image: "/zaluzje.jpg",
    imageAlt:
      "Żaluzje aluminiowe zamontowane w Zespole Szkół Politechnicznych Energetyk w Wałbrzychu",
    category: "Żaluzje",
    year: "2025",
  },
  {
    id: 2,
    title: "Rolety materiałowe w apartamencie",
    location: "Wałbrzych Śródmieście",
    description:
      "Instalacja rolet materiałowych dzień/noc w nowoczesnym apartamencie. Klient wybrał neutralną kolorystykę dopasowaną do minimalistycznego wnętrza. Montaż bezinwazyjny bez wiercenia w ramach okien PVC.",
    image: "/rolety.jpg",
    imageAlt:
      "Rolety wewnętrzne materiałowe w mieszkaniu w centrum Wałbrzycha",
    category: "Rolety",
    year: "2025",
  },
  {
    id: 3,
    title: "Plisy okienne w domu jednorodzinnym",
    location: "Szczawno-Zdrój",
    description:
      "Kompleksowa instalacja plisów w domu jednorodzinnym z oknami o nietypowych kształtach - trójkątnymi i trapezowymi. Rozwiązanie zapewniło pełną kontrolę światła przy zachowaniu estetyki nowoczesnego wnętrza.",
    image: "/plisy.jpg",
    imageAlt: "Plisy okienne zamontowane w domu jednorodzinnym w Szczawnie-Zdrój",
    category: "Plisy",
    year: "2024",
  },
  {
    id: 4,
    title: "Brama garażowa segmentowa z automatyką",
    location: "Świebodzice",
    description:
      "Montaż bramy garażowej segmentowej z napędem elektrycznym i sterowaniem smartfonem. Brama w kolorze antracytowym z panelem przetłaczanym, izolacja termiczna U=1.0 W/m²K.",
    image: "/bramy.jpg",
    imageAlt:
      "Brama garażowa segmentowa z automatyką w domu jednorodzinnym w Świebodzicach",
    category: "Bramy garażowe",
    year: "2024",
  },
  {
    id: 5,
    title: "Markiza tarasowa nad dużym tarasem",
    location: "Wałbrzych Biały Kamień",
    description:
      "Instalacja markizy tarasowej kasetowej o wysięgu 4 metrów z automatyką i czujnikiem wiatru. Tkanina wodoodporna w stonowanym kolorze, idealna do relaksu w upalne dni.",
    image: "/markizy.jpg",
    imageAlt: "Markiza tarasowa rozłożona nad tarasem domu w Wałbrzychu",
    category: "Markizy",
    year: "2024",
  },
  {
    id: 6,
    title: "Moskitiery do całego domu",
    location: "Świdnica",
    description:
      "Kompleksowa instalacja moskitier ramkowych we wszystkich oknach i drzwiach balkonowych domu jednorodzinnego. 12 sztuk moskitier z siatką z włókna szklanego, montaż na zawiasach aluminiowych.",
    image: "/moskitiery.jpg",
    imageAlt: "Moskitiery ramkowe zamontowane w oknach domu w Świdnicy",
    category: "Moskitiery",
    year: "2024",
  },
];

// FAQ for realizacje page
const realizacjeFaq = [
  {
    question: "Ile projektów zrealizował Specroll?",
    answer:
      "Od początku działalności zrealizowaliśmy ponad 2000 projektów dla klientów indywidualnych, firm oraz instytucji publicznych. Nasze realizacje obejmują montaże pojedynczych rolet w mieszkaniach, jak i kompleksowe instalacje w budynkach użyteczności publicznej z dziesiątkami okien.",
  },
  {
    question: "Czy mogę zobaczyć realizacje Specroll w mojej okolicy?",
    answer:
      "Tak, chętnie pokażemy nasze realizacje w Wałbrzychu i okolicach. Podczas wizyty wyceniającej możemy umówić się na obejrzenie podobnych instalacji u zadowolonych klientów (za ich zgodą). To doskonały sposób, aby zobaczyć jakość naszej pracy na żywo.",
  },
  {
    question: "Jak długo trwa realizacja typowego projektu?",
    answer:
      "Czas realizacji zależy od zakresu projektu. Pojedyncze okno to kwestia kilku godzin, mieszkanie z 5-8 oknami zajmuje około jednego dnia roboczego. Większe projekty (budynki biurowe, szkoły) planujemy indywidualnie, zazwyczaj realizując je etapami w ciągu kilku dni.",
  },
  {
    question: "Czy realizujecie projekty dla firm i instytucji?",
    answer:
      "Tak, obsługujemy zarówno klientów indywidualnych, jak i firmy, instytucje edukacyjne, wspólnoty mieszkaniowe oraz deweloperów. Dla większych projektów oferujemy korzystne warunki cenowe i elastyczne terminy realizacji dopasowane do potrzeb klienta.",
  },
];

const breadcrumbItems = [
  { name: "Strona główna", url: "https://specroll.pl" },
  { name: "Realizacje", url: "https://specroll.pl/realizacje" },
];

export const metadata: Metadata = {
  title: "Realizacje - Nasze projekty montażu rolet i żaluzji | Specroll Wałbrzych",
  description:
    "Zobacz realizacje firmy Specroll: montaże rolet, żaluzji, bram garażowych, markiz i moskitier w Wałbrzychu, Szczawnie-Zdroju, Świebodzicach i Świdnicy. Ponad 2000 zrealizowanych projektów.",
  keywords: [
    "realizacje Specroll",
    "montaż rolet Wałbrzych galeria",
    "żaluzje realizacje",
    "bramy garażowe przykłady",
    "portfolio montaży",
    "projekty osłon okiennych",
    "montaż rolet zdjęcia",
  ],
  openGraph: {
    title: "Realizacje - Nasze projekty montażu rolet i żaluzji | Specroll Wałbrzych",
    description:
      "Zobacz realizacje firmy Specroll: montaże rolet, żaluzji, bram garażowych w Wałbrzychu i okolicach. Ponad 2000 zrealizowanych projektów.",
    images: [
      {
        url: "/zaluzje.jpg",
        width: 1200,
        height: 630,
        alt: "Realizacje Specroll - profesjonalne montaże rolet i żaluzji",
      },
    ],
  },
  alternates: {
    canonical: "https://specroll.pl/realizacje",
  },
};

export default function RealizacjePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-32 pb-16">
      <WebPageSchema
        name="Realizacje - Specroll Wałbrzych"
        description="Galeria realizacji firmy Specroll: montaże rolet, żaluzji, bram garażowych, markiz i moskitier w Wałbrzychu i okolicach."
        url="/realizacje"
        dateModified="2026-02-03"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema questions={realizacjeFaq} />

      <div className="container-center">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Portfolio
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Jakie projekty zrealizował{" "}
            <span className="gradient-text">Specroll</span>?
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zrealizowaliśmy ponad 2000 projektów dla klientów w Wałbrzychu i
            okolicach. Od pojedynczych rolet w mieszkaniach, przez kompleksowe
            instalacje w domach jednorodzinnych, po duże projekty w szkołach i
            biurach. Poniżej prezentujemy wybrane realizacje.
          </p>
        </header>

        {/* Stats Section */}
        <section className="mb-16" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">
            Statystyki realizacji Specroll
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "2000+", label: "Zrealizowanych projektów" },
              { number: "1000+", label: "Zadowolonych klientów" },
              { number: "20+", label: "Lat doświadczenia" },
              { number: "4", label: "Obsługiwane miasta" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Realizacje Grid */}
        <section aria-labelledby="realizacje-heading">
          <h2 id="realizacje-heading" className="sr-only">
            Wybrane realizacje Specroll
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realizacje.map((projekt, index) => (
              <article
                key={projekt.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={projekt.image}
                    alt={projekt.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {projekt.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {projekt.title}
                  </h3>
                  <p className="text-sm text-blue-600 mb-3 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
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
                    {projekt.location} • {projekt.year}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {projekt.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-20" aria-labelledby="realizacje-faq-heading">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                FAQ
              </span>
              <h2
                id="realizacje-faq-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Pytania o nasze realizacje
              </h2>
              <p className="text-gray-600">
                Odpowiedzi na najczęściej zadawane pytania o nasze projekty.
              </p>
            </div>
            <div className="space-y-6">
              {realizacjeFaq.map((item, index) => (
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
        <section className="mt-16 text-center" aria-labelledby="realizacje-cta">
          <h2 id="realizacje-cta" className="sr-only">
            Skontaktuj się z nami
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Chcesz dołączyć do grona zadowolonych klientów?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby umówić bezpłatną wycenę. Chętnie
              zrealizujemy również Twój projekt!
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
