import Image from "next/image";
import Link from "next/link";

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

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container-center">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-medium text-gray-900 mb-4">
            Nasze Produkty
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferujemy szeroki wybór wysokiej jakości produktów do osłony
            okiennej i nie tylko. Każdy produkt można dostosować do
            indywidualnych potrzeb.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.link}
              className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  <span>Dowiedz się więcej</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
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
            className="inline-flex items-center justify-center bg-blue-300 text-black font-medium py-3 px-8 rounded-full hover:scale-[1.03] active:scale-100 !duration-200 ease-[cubic-bezier(.15,1.14,.88,.98)]"
          >
            Zapytaj o wycenę
          </Link>
        </div>
      </div>
    </main>
  );
}
