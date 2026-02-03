import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  FAQSchema,
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/StructuredData";

const products = [
  {
    title: "Rolety",
    description:
      "Rolety wewnętrzne i zewnętrzne do każdego typu okna. Oferujemy rolety materiałowe, dzień/noc, blackout oraz rolety do okien dachowych z możliwością automatyzacji.",
    image: "/rolety.jpg",
    link: "/produkty/rolety",
    alt: "Rolety wewnętrzne materiałowe w jasnym kolorze zamontowane na oknie - widok na eleganckie wnętrze z nowoczesną osłoną okienną",
  },
  {
    title: "Żaluzje",
    description:
      "Żaluzje aluminiowe i drewniane w różnych szerokościach lameli. Precyzyjna regulacja światła, łatwe czyszczenie i trwała konstrukcja idealna do biur i domów.",
    image: "/zaluzje.jpg",
    link: "/produkty/zaluzje",
    alt: "Żaluzje aluminiowe poziome w kolorze białym - widok na biurowe okno z nowoczesnym systemem osłon",
  },
  {
    title: "Plisy",
    description:
      "Plisy okienne idealne do okien o nietypowych kształtach, okien dachowych i przeszklonych ścian. Możliwość montażu bez wiercenia w ramie.",
    image: "/plisy.jpg",
    link: "/produkty/plisy",
    alt: "Plisy okienne w jasnej tkaninie zamontowane w oknie dachowym - kompaktowe rozwiązanie do nietypowych okien",
  },
  {
    title: "Bramy garażowe",
    description:
      "Bramy garażowe segmentowe i rolowane z automatyką. Bezpieczne, cicho działające i energooszczędne rozwiązania do garażu.",
    image: "/bramy.jpg",
    link: "/produkty/bramy-garazowe",
    alt: "Brama garażowa segmentowa w kolorze antracytowym - nowoczesna brama z automatyką przy domu jednorodzinnym",
  },
  {
    title: "Markizy",
    description:
      "Markizy tarasowe i balkonowe z automatycznym sterowaniem. Skuteczna ochrona przed słońcem z szeroki wyborem wodoodpornych tkanin.",
    image: "/markizy.jpg",
    link: "/produkty/markizy",
    alt: "Markiza tarasowa rozłożona nad tarasem domu - ochrona przed słońcem z elegancką tkaniną w paski",
  },
  {
    title: "Moskitiery",
    description:
      "Moskitiery ramkowe, rolowane i przesuwne do okien i drzwi. Skuteczna ochrona przed owadami przy zachowaniu przepływu powietrza.",
    image: "/moskitiery.jpg",
    link: "/produkty/moskitiery",
    alt: "Moskitiera ramkowa zamontowana w oknie - delikatna siatka chroniąca przed owadami",
  },
  {
    title: "Roletki",
    description:
      "Kompaktowe roletki mini i w kasecie idealne do małych okien. Systemy dzień/noc dla precyzyjnej kontroli światła.",
    image: "/roletki.jpg",
    link: "/produkty/roletki",
    alt: "Roletki mini dzień/noc w szarym kolorze - kompaktowe osłony okienne do nowoczesnego wnętrza",
  },
];

// FAQ for products page
const productsFaq = [
  {
    question: "Jakie produkty osłon okiennych oferuje Specroll?",
    answer:
      "Specroll oferuje kompleksową gamę osłon okiennych: rolety wewnętrzne i zewnętrzne (materiałowe, dzień/noc, blackout), żaluzje aluminiowe i drewniane, plisy do okien standardowych i dachowych, moskitiery (ramkowe, rolowane, przesuwne), markizy tarasowe oraz bramy garażowe z automatyką. Wszystkie produkty są dostępne w wielu kolorach i wariantach.",
  },
  {
    question: "Czy mogę dostosować produkty do swoich potrzeb?",
    answer:
      "Tak, wszystkie nasze produkty są wykonywane na wymiar i mogą być dostosowane do indywidualnych potrzeb. Oferujemy szeroki wybór kolorów tkanin, materiałów, szerokości lameli oraz systemów sterowania (ręczne, elektryczne, smart home). Nasz doradca pomoże dobrać optymalne rozwiązanie.",
  },
  {
    question: "Które osłony okienne najlepiej chronią przed słońcem?",
    answer:
      "Najlepszą ochronę przed słońcem zapewniają rolety zewnętrzne (redukują ciepło nawet o 90%), markizy tarasowe oraz rolety blackout. Do biur polecamy żaluzje aluminiowe z precyzyjną regulacją światła. Dobór zależy od ekspozycji okna, pomieszczenia i oczekiwań - doradzimy najlepsze rozwiązanie podczas bezpłatnej konsultacji.",
  },
  {
    question: "Jakie osłony okienne są najlepsze do sypialni?",
    answer:
      "Do sypialni najlepiej sprawdzają się rolety blackout (całkowite zaciemnienie), rolety dzień/noc (regulacja prywatności i światła) lub plisy z tkaniną zaciemniającą. Wszystkie te produkty są dostępne z opcją automatyzacji, co pozwala na wygodne sterowanie bez wstawania z łóżka.",
  },
  {
    question: "Czy Specroll oferuje produkty z automatyką?",
    answer:
      "Tak, większość naszych produktów jest dostępna z opcją automatyzacji. Oferujemy sterowanie pilotem radiowym, przyciskiem ściennym, czujnikami słonecznymi i wiatrowymi oraz integrację z systemami smart home. Automatyka jest szczególnie polecana do rolet zewnętrznych, markiz i bram garażowych.",
  },
];

const breadcrumbItems = [
  { name: "Strona główna", url: "https://specroll.pl" },
  { name: "Produkty", url: "https://specroll.pl/produkty" },
];

export const metadata: Metadata = {
  title: "Produkty - Rolety, żaluzje, bramy garażowe | Specroll Wałbrzych",
  description:
    "Szeroki wybór osłon okiennych: rolety wewnętrzne i zewnętrzne, żaluzje aluminiowe, plisy, bramy garażowe, markizy i moskitiery. Produkty na wymiar z profesjonalnym montażem w Wałbrzychu i okolicach.",
  keywords: [
    "rolety na wymiar Wałbrzych",
    "żaluzje aluminiowe",
    "plisy okienne",
    "bramy garażowe segmentowe",
    "markizy tarasowe",
    "moskitiery ramkowe",
    "osłony okienne Wałbrzych",
    "rolety blackout",
    "żaluzje drewniane",
    "automatyka do rolet",
  ],
  openGraph: {
    title: "Produkty - Rolety, żaluzje, bramy garażowe | Specroll Wałbrzych",
    description:
      "Szeroki wybór osłon okiennych na wymiar: rolety, żaluzje, plisy, bramy garażowe, markizy i moskitiery. Profesjonalny montaż w Wałbrzychu.",
  },
  alternates: {
    canonical: "https://specroll.pl/produkty",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-32 pb-16">
      <WebPageSchema
        name="Produkty osłon okiennych - Specroll Wałbrzych"
        description="Szeroki wybór osłon okiennych: rolety, żaluzje, plisy, bramy garażowe, markizy i moskitiery. Produkty na wymiar z profesjonalnym montażem."
        url="/produkty"
        dateModified="2026-02-03"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema questions={productsFaq} />

      <div className="container-center">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Nasza oferta
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Jakie produkty oferuje{" "}
            <span className="gradient-text">Specroll</span>?
          </h1>
          {/* Direct answer paragraph */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specroll oferuje kompleksową gamę osłon okiennych i bram garażowych:
            rolety wewnętrzne i zewnętrzne, żaluzje aluminiowe i drewniane,
            eleganckie plisy, moskitiery, markizy tarasowe oraz bramy garażowe z
            automatyką. Wszystkie produkty wykonujemy na wymiar i montujemy
            profesjonalnie na terenie Wałbrzycha i okolic.
          </p>
        </header>

        {/* Products Grid */}
        <section aria-labelledby="products-grid-heading">
          <h2 id="products-grid-heading" className="sr-only">
            Lista produktów Specroll
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={product.title}
                href={product.link}
                className="card-modern group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article>
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.alt}
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
                        aria-hidden="true"
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
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-20" aria-labelledby="products-faq-heading">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                FAQ
              </span>
              <h2
                id="products-faq-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Pytania o nasze produkty
              </h2>
              <p className="text-gray-600">
                Odpowiedzi na najczęściej zadawane pytania dotyczące oferty
                Specroll.
              </p>
            </div>
            <div className="space-y-6">
              {productsFaq.map((item, index) => (
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
        <section className="mt-16 text-center" aria-labelledby="products-cta">
          <h2 id="products-cta" className="sr-only">
            Zapytaj o wycenę produktów
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Nie wiesz, które rozwiązanie będzie najlepsze dla Ciebie? Umów się
            na bezpłatną konsultację - pomożemy dobrać produkt dopasowany do
            Twoich potrzeb.
          </p>
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Zapytaj o wycenę
          </Link>
        </section>
      </div>
    </main>
  );
}
