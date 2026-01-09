import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const products = [
  {
    title: "Rolety",
    description:
      "Szeroki wybór rolet wewnętrznych i zewnętrznych do każdego typu okna.",
    image: "/rolety.jpg",
    link: "/produkty/rolety",
  },
  {
    title: "Żaluzje",
    description: "Klasyczne i nowoczesne żaluzje aluminiowe i drewniane.",
    image: "/zaluzje.jpg",
    link: "/produkty/zaluzje",
  },
  {
    title: "Plisy",
    description: "Eleganckie plisy okienne idealne do nietypowych okien.",
    image: "/plisy.jpg",
    link: "/produkty/plisy",
  },
  {
    title: "Bramy garażowe",
    description: "Bezpieczne i funkcjonalne bramy garażowe na wymiar.",
    image: "/bramy.jpg",
    link: "/produkty/bramy-garazowe",
  },
  {
    title: "Markizy",
    description: "Markizy tarasowe zapewniające ochronę przed słońcem.",
    image: "/markizy.jpg",
    link: "/produkty/markizy",
  },
  {
    title: "Moskitiery",
    description: "Skuteczna ochrona przed owadami dla okien i drzwi.",
    image: "/moskitiery.jpg",
    link: "/produkty/moskitiery",
  },
  {
    title: "Roletki",
    description: "Praktyczne i eleganckie roletki do każdego wnętrza.",
    image: "/roletki.jpg",
    link: "/produkty/roletki",
  },
];

export const metadata: Metadata = {
  title: "Produkty - Rolety, żaluzje, bramy | Specroll Wałbrzych",
  description:
    "Szeroki wybór rolet, żaluzji, plisów, bram garażowych, markiz i moskitier. Produkty najwyższej jakości z profesjonalnym montażem. Poznaj naszą ofertę!",
  keywords: [
    "produkty Specroll",
    "oferta rolet",
    "oferta żaluzji",
    "katalog produktów",
    "bramy garażowe oferta",
    "markizy tarasowe",
    "moskitiery okienne",
  ],
  openGraph: {
    title: "Produkty - Rolety, żaluzje, bramy | Specroll Wałbrzych",
    description:
      "Szeroki wybór rolet, żaluzji, plisów, bram garażowych, markiz i moskitier. Produkty najwyższej jakości z profesjonalnym montażem.",
  },
  alternates: {
    canonical: "https://specroll.pl/produkty",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-32 pb-16">
      <div className="container-center">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Nasza oferta
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Nasze <span className="gradient-text">Produkty</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Oferujemy szeroki wybór wysokiej jakości produktów do osłony
            okiennej i nie tylko. Każdy produkt można dostosować do
            indywidualnych potrzeb.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.title}
              href={product.link}
              className="card-modern group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Dowiedz się więcej</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/kontakt"
            className="btn-modern-primary"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Zapytaj o wycenę
          </Link>
        </div>
      </div>
    </main>
  );
}
