import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import ZoomableImage from "@/components/ZoomableImage";

// Product data - in a real app, this would come from a database or CMS
const productsData = {
  rolety: {
    title: "Rolety",
    description:
      "Szeroki wybór rolet wewnętrznych i zewnętrznych do każdego typu okna.",
    longDescription: `Nasze rolety to idealne rozwiązanie do każdego wnętrza. Oferujemy:
    - Rolety materiałowe
    - Rolety dzień/noc
    - Rolety zewnętrzne
    - Rolety do okien dachowych
    
    Wszystkie nasze rolety są wykonane z najwyższej jakości materiałów i dostępne w szerokiej gamie kolorów i wzorów.`,
    features: [
      "Szeroki wybór materiałów i kolorów",
      "Możliwość automatyzacji",
      "Profesjonalny montaż",
      "Gwarancja jakości",
      "Bezpłatna wycena",
      "Doradztwo techniczne",
    ],
    image: "/rolety.jpg",
    gallery: ["/rolety.jpg", "/rolety-2.jpg", "/rolety-3.jpg"],
  },
  zaluzje: {
    title: "Żaluzje",
    description: "Klasyczne i nowoczesne żaluzje aluminiowe i drewniane.",
    longDescription: `Oferujemy szeroki wybór żaluzji:
    - Żaluzje aluminiowe
    - Żaluzje drewniane
    - Żaluzje pionowe
    - Żaluzje poziome
    
    Nasze żaluzje to połączenie funkcjonalności i estetyki, idealne do każdego wnętrza.`,
    features: [
      "Różne szerokości lameli",
      "Bogata paleta kolorów",
      "Sterowanie ręczne lub elektryczne",
      "Trwała konstrukcja",
      "Łatwe czyszczenie",
      "Precyzyjna regulacja światła",
    ],
    image: "/zaluzje.jpg",
    gallery: ["/zaluzje.jpg", "/zaluzje-2.jpg", "/zaluzje-3.jpg"],
  },
  plisy: {
    title: "Plisy",
    description: "Eleganckie plisy okienne idealne do nietypowych okien.",
    longDescription: `Plisy to nowoczesne rozwiązanie do każdego typu okna:
    - Idealne do okien o nietypowych kształtach
    - Możliwość montażu bez wiercenia
    - Szeroka gama tkanin i kolorów
    - Doskonała ochrona przed słońcem
    
    Plisy świetnie sprawdzają się w oknach dachowych i przeszkleniach o różnych kształtach.`,
    features: [
      "Możliwość montażu bezinwazyjnego",
      "Idealne do okien dachowych",
      "Różne stopnie zaciemnienia",
      "Łatwa regulacja",
      "Kompaktowa konstrukcja",
      "Szeroki wybór tkanin",
    ],
    image: "/plisy.jpg",
    gallery: ["/plisy.jpg", "/plisy-2.jpg", "/plisy-3.jpg"],
  },
  "bramy-garazowe": {
    title: "Bramy garażowe",
    description: "Bezpieczne i funkcjonalne bramy garażowe na wymiar.",
    longDescription: `Oferujemy wysokiej jakości bramy garażowe:
    - Bramy segmentowe
    - Bramy rolowane
    - Automatyka do bram
    - Systemy zabezpieczeń
    
    Nasze bramy łączą bezpieczeństwo z nowoczesnym designem.`,
    features: [
      "Automatyczne sterowanie",
      "Zabezpieczenia przeciwwyważeniowe",
      "Izolacja termiczna",
      "Różne wzory i kolory",
      "Cicha praca",
      "Długa żywotność",
    ],
    image: "/bramy.jpg",
    gallery: ["/bramy.jpg", "/bramy-2.jpg", "/bramy-3.jpg"],
  },
  markizy: {
    title: "Markizy",
    description: "Markizy tarasowe zapewniające ochronę przed słońcem.",
    longDescription: `Nasze markizy to idealne rozwiązanie na taras lub balkon:
    - Markizy tarasowe
    - Markizy balkonowe
    - Markizy do ogrodów zimowych
    - Systemy automatyczne
    
    Zapewniają skuteczną ochronę przed słońcem i deszczem.`,
    features: [
      "Odporne na warunki atmosferyczne",
      "Automatyczne sterowanie",
      "Szeroki wybór tkanin",
      "Różne systemy montażu",
      "Regulowany kąt nachylenia",
      "Opcjonalne oświetlenie LED",
    ],
    image: "/markizy.jpg",
    gallery: ["/markizy.jpg", "/markizy-2.jpg", "/markizy-3.jpg"],
  },
  moskitiery: {
    title: "Moskitiery",
    description: "Skuteczna ochrona przed owadami dla okien i drzwi.",
    longDescription: `Oferujemy różne typy moskitier:
    - Moskitiery ramkowe
    - Moskitiery rolowane
    - Moskitiery przesuwne
    - Moskitiery drzwiowe
    
    Skuteczna ochrona przed owadami przy zachowaniu widoczności i przepływu powietrza.`,
    features: [
      "Łatwy montaż i demontaż",
      "Różne systemy otwierania",
      "Wytrzymałe materiały",
      "Dopasowanie do każdego okna",
      "Estetyczne wykończenie",
      "Możliwość samodzielnego czyszczenia",
    ],
    image: "/moskitiery.jpg",
    gallery: ["/moskitiery.jpg", "/moskitiery-2.jpg", "/moskitiery-3.jpg"],
  },
  roletki: {
    title: "Roletki",
    description: "Praktyczne i eleganckie roletki do każdego wnętrza.",
    longDescription: `Nasze roletki to idealne rozwiązanie do małych i średnich okien:
    - Roletki mini
    - Roletki w kasecie
    - Roletki wolnowiszące
    - Systemy dzień/noc
    
    Łączą funkcjonalność z nowoczesnym designem.`,
    features: [
      "Kompaktowa konstrukcja",
      "Łatwy montaż",
      "Różne systemy mocowania",
      "Szeroka gama kolorów",
      "Możliwość prania tkanin",
      "Precyzyjna regulacja",
    ],
    image: "/roletki.jpg",
    gallery: ["/roletki.jpg", "/roletki-2.jpg", "/roletki-3.jpg"],
  },
};

export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = productsData[params.slug as keyof typeof productsData];

  if (!product) {
    return {
      title: "Produkt nie znaleziony | Specroll",
      description: "Przepraszamy, ale szukany produkt nie istnieje.",
    };
  }

  return {
    title: `${product.title} | Specroll Wałbrzych`,
    description: product.description,
    openGraph: {
      title: `${product.title} | Specroll Wałbrzych`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productsData[params.slug as keyof typeof productsData];

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <ZoomableImage src={product.image} alt={product.title} />

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-medium text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">{product.description}</p>

            <div className="prose prose-blue max-w-none mb-8">
              {product.longDescription.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                Cechy produktu
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ContactCTA href="/kontakt#contact-form">
                Zapytaj o wycenę
              </ContactCTA>
              <Link
                href="/produkty"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Wróć do produktów
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-medium text-gray-900 mb-8">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.gallery.map((image, index) => (
              <ZoomableImage
                key={index}
                src={image}
                alt={`${product.title} - zdjęcie ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
