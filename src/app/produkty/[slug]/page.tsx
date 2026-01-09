import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import ZoomableImage from "@/components/ZoomableImage";
import {
  ProductSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/StructuredData";

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
    faq: [
      {
        question: "Jakie rolety są najlepsze do sypialni?",
        answer:
          "Do sypialni najlepiej sprawdzają się rolety materiałowe z tkanin zaciemniających lub rolety dzień/noc, które pozwalają na pełną kontrolę nad ilością światła w pomieszczeniu. Oferujemy również rolety blackout, które zapewniają całkowite zaciemnienie.",
      },
      {
        question: "Ile kosztuje montaż rolet?",
        answer:
          "Koszt montażu rolet zależy od typu rolety, rozmiaru okna oraz ilości okien. Oferujemy bezpłatną wycenę po wizji lokalnej. Skontaktuj się z nami, aby umówić się na pomiar.",
      },
      {
        question: "Czy oferujecie automatyczne rolety?",
        answer:
          "Tak, oferujemy pełną gamę rolet z możliwością automatyzacji. Rolety mogą być sterowane pilotem, przyciskiem ściennym lub systemem inteligentnego domu. Automatyka dostępna jest dla większości typów rolet.",
      },
    ],
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
    faq: [
      {
        question: "Czy żaluzje są trudne w czyszczeniu?",
        answer:
          "Nasze żaluzje są łatwe w utrzymaniu czystości. Żaluzje aluminiowe można przetrzeć wilgotną ściereczką, a żaluzje drewniane wymagają delikatnego odkurzania i przecierania suchą szmatką.",
      },
      {
        question: "Jaką szerokość lameli wybrać?",
        answer:
          "Wybór szerokości lameli zależy od rozmiaru okna i preferencji estetycznych. Wąskie lamele (16-25mm) sprawdzają się w mniejszych oknach, podczas gdy szersze lamele (50mm) lepiej prezentują się w dużych przeszkleniach.",
      },
      {
        question: "Czy żaluzje są odporne na wilgoć?",
        answer:
          "Żaluzje aluminiowe są w pełni odporne na wilgoć i doskonale sprawdzają się w łazienkach i kuchniach. Żaluzje drewniane zalecamy do pomieszczeń o standardowej wilgotności.",
      },
    ],
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
    faq: [
      {
        question: "Czy plisy można montować bez wiercenia?",
        answer:
          "Tak, oferujemy specjalne systemy montażu plisów, które nie wymagają wiercenia w ramie okiennej. To idealne rozwiązanie dla osób mieszkających w wynajmowanych mieszkaniach lub chcących zachować okna w nienaruszonym stanie.",
      },
      {
        question: "Czy plisy nadają się do okien dachowych?",
        answer:
          "Plisy to idealne rozwiązanie do okien dachowych. Dzięki systemowi prowadzenia w szynach bocznych, tkanina pozostaje napięta niezależnie od kąta nachylenia okna.",
      },
      {
        question: "Jak dobrać stopień zaciemnienia plisy?",
        answer:
          "Oferujemy plisy o różnym stopniu zaciemnienia - od transparentnych, przez półprzezroczyste, aż po blackout. Wybór zależy od funkcji pomieszczenia. Do sypialni polecamy tkaniny blackout, a do salonu - półprzezroczyste.",
      },
    ],
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
    faq: [
      {
        question: "Jaką bramę garażową wybrać - segmentową czy rolowaną?",
        answer:
          "Bramy segmentowe są bardziej uniwersalne i oferują lepszą izolację termiczną. Bramy rolowane są idealne przy ograniczonej przestrzeni w garażu, ponieważ zwijają się kompaktowo pod sufitem.",
      },
      {
        question: "Czy brama garażowa wymaga regularnej konserwacji?",
        answer:
          "Tak, zalecamy coroczną konserwację bramy, która obejmuje smarowanie elementów ruchomych, sprawdzenie naprężenia sprężyn i regulację napędów. Oferujemy serwis pogwarancyjny dla wszystkich naszych instalacji.",
      },
      {
        question: "Czy można zautomatyzować starą bramę garażową?",
        answer:
          "W większości przypadków tak. Oferujemy montaż napędów do istniejących bram garażowych. Po wizji lokalnej ocenimy stan bramy i zaproponujemy odpowiednie rozwiązanie automatyki.",
      },
    ],
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
    faq: [
      {
        question: "Czy markizy są odporne na deszcz?",
        answer:
          "Nasze markizy są wykonane z wodoodpornych tkanin i skutecznie chronią przed słońcem. Niektóre modele oferują również ograniczoną ochronę przed lekkim deszczem. W przypadku silnych opadów zalecamy zwijanie markizy.",
      },
      {
        question: "Czy markiza wymaga demontażu na zimę?",
        answer:
          "Nowoczesne markizy nie wymagają demontażu na zimę. Zalecamy jednak zwinięcie i zabezpieczenie markizy w okresie zimowym. Oferujemy również markizy kaseton, które zapewniają dodatkową ochronę tkaniny.",
      },
      {
        question: "Jak duża markiza będzie odpowiednia na mój taras?",
        answer:
          "Rozmiar markizy dobieramy indywidualnie po wizji lokalnej. Markiza powinna być co najmniej tak szeroka jak przeszklenie tarasu i wystawać minimum 1,5-2 metry, aby zapewnić skuteczne zacienianie.",
      },
    ],
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
    faq: [
      {
        question: "Czy moskitiery ograniczają widoczność?",
        answer:
          "Nasze moskitiery wykonane są z wysokiej jakości siatki, która praktycznie nie ogranicza widoczności ani przepływu powietrza. Siatka jest prawie niewidoczna z odległości kilku metrów.",
      },
      {
        question: "Jak często trzeba wymieniać moskitiery?",
        answer:
          "Wysokiej jakości moskitiery służą przez wiele lat. Jedynie siatka może wymagać wymiany po 5-7 latach intensywnego użytkowania. Oferujemy możliwość wymiany samej siatki bez konieczności wymiany całej konstrukcji.",
      },
      {
        question: "Czy moskitiery można montować w oknach plastikowych?",
        answer:
          "Tak, oferujemy różne systemy montażu dostosowane do wszystkich typów okien - plastikowych, drewnianych i aluminiowych. Moskitiery ramkowe można montować na zawiasach lub magnetycznie.",
      },
    ],
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
    faq: [
      {
        question: "Jaka jest różnica między roletką a roletą?",
        answer:
          "Roletki to zazwyczaj mniejsze, kompaktowe konstrukcje przeznaczone do okien standardowych. Są łatwiejsze w montażu i często tańsze niż pełnowymiarowe rolety. Idealne do mieszkań i mniejszych pomieszczeń.",
      },
      {
        question: "Czy roletki dzień/noc są praktyczne?",
        answer:
          "Tak, roletki dzień/noc (duo) to bardzo praktyczne rozwiązanie. Dzięki naprzemiennym pasom tkaniny przezroczystej i zaciemniającej, możesz precyzyjnie kontrolować ilość światła w pomieszczeniu bez konieczności całkowitego zwijania roletki.",
      },
      {
        question: "Czy można prać tkaniny z roletek?",
        answer:
          "Większość tkanin można czyścić wilgotną ściereczką. Niektóre roletki mają zdejmowane tkaniny, które można prać w pralce w niskiej temperaturze. Zawsze sprawdź zalecenia producenta dla konkretnej tkaniny.",
      },
    ],
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
    alternates: {
      canonical: `https://specroll.pl/produkty/${params.slug}`,
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productsData[params.slug as keyof typeof productsData];

  if (!product) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Strona główna", url: "https://specroll.pl" },
    { name: "Produkty", url: "https://specroll.pl/produkty" },
    { name: product.title, url: `https://specroll.pl/produkty/${params.slug}` },
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <ProductSchema
        name={product.title}
        description={product.description}
        image={product.image}
        url={`/produkty/${params.slug}`}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      {product.faq && <FAQSchema questions={product.faq} />}
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

        {/* FAQ Section */}
        {product.faq && product.faq.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">
              Najczęściej zadawane pytania
            </h2>
            <div className="space-y-6">
              {product.faq.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
