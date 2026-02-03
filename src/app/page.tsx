import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactCTA from "@/components/ContactCTA";
import { Metadata } from "next";
import { FAQSchema, WebPageSchema } from "@/components/StructuredData";

const benefits = [
  {
    title: "Najwyższa jakość",
    description:
      "Współpracujemy tylko z renomowanymi producentami, gwarantując trwałość i niezawodność wszystkich produktów.",
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
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Profesjonalna obsługa",
    description:
      "Nasz zespół ekspertów służy doradztwem i pomocą na każdym etapie realizacji zamówienia.",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Gwarancja satysfakcji",
    description:
      "Zapewniamy pełną gwarancję na nasze produkty i usługi montażowe.",
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
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
  },
];

const stats = [
  { number: "5+", label: "Lat doświadczenia" },
  { number: "1000+", label: "Zadowolonych klientów" },
  { number: "2000+", label: "Zrealizowanych projektów" },
  { number: "100%", label: "Gwarancji jakości" },
];

const featuredProjects = [
  {
    title: "Kompleksowa instalacja w Energetyku",
    location: "Zespół Szkół Politechnicznych, Wałbrzych",
    image: "/zaluzje.jpg",
    alt: "Żaluzje aluminiowe zamontowane w Zespole Szkół Politechnicznych Energetyk w Wałbrzychu - widok na klasę szkolną z nowoczesnymi osłonami okiennymi",
  },
  {
    title: "System rolet w budynku mieszkalnym",
    location: "Wałbrzych Śródmieście",
    image: "/rolety.jpg",
    alt: "Rolety wewnętrzne materiałowe w mieszkaniu w centrum Wałbrzycha - jasne wnętrze z nowoczesną osłoną okienną",
  },
  {
    title: "Żaluzje i rolety w domu jednorodzinnym",
    location: "Szczawno-Zdrój",
    image: "/plisy.jpg",
    alt: "Plisy okienne zamontowane w domu jednorodzinnym w Szczawnie-Zdrój - eleganckie osłony w nowoczesnym wnętrzu",
  },
];

// FAQ data for homepage
const homepageFaq = [
  {
    question: "Czym zajmuje się firma Specroll?",
    answer:
      "Specroll to lokalna firma z Wałbrzycha specjalizująca się w sprzedaży i profesjonalnym montażu osłon okiennych: rolet (wewnętrznych i zewnętrznych), żaluzji (aluminiowych i drewnianych), plisów, moskitier, markiz tarasowych oraz bram garażowych. Oferujemy kompleksową obsługę od bezpłatnej wyceny, przez doradztwo, po montaż i serwis.",
  },
  {
    question: "Jaki jest obszar działania firmy Specroll?",
    answer:
      "Obsługujemy Wałbrzych oraz okoliczne miejscowości: Szczawno-Zdrój, Świebodzice, Świdnicę i cały region w promieniu około 30 km. Dojeżdżamy bezpłatnie na pomiar i wycenę do klientów w naszym obszarze działania.",
  },
  {
    question: "Czy wycena i pomiar są bezpłatne?",
    answer:
      "Tak, oferujemy całkowicie bezpłatną wycenę i pomiar na miejscu u klienta. Nasz specjalista przyjedzie, dokona precyzyjnych pomiarów okien i przedstawi najlepsze rozwiązania dopasowane do Twoich potrzeb i budżetu.",
  },
  {
    question: "Jak długo trwa realizacja zamówienia?",
    answer:
      "Standardowy czas realizacji wynosi od 2 do 4 tygodni od złożenia zamówienia. Dokładny termin zależy od rodzaju produktu, stopnia personalizacji i aktualnego obłożenia. Zawsze informujemy o przewidywanym terminie przy składaniu zamówienia.",
  },
  {
    question: "Jaką gwarancję otrzymuję na produkty i montaż?",
    answer:
      "Udzielamy pełnej gwarancji na wszystkie nasze produkty oraz wykonane usługi montażowe. Warunki gwarancji ustalane są indywidualnie w zależności od produktu. Dodatkowo oferujemy serwis pogwarancyjny i naprawy.",
  },
  {
    question: "Czy montujecie rolety z automatyką?",
    answer:
      "Tak, oferujemy pełną gamę rolet i żaluzji z możliwością automatyzacji. Produkty mogą być sterowane pilotem, przyciskiem ściennym lub zintegrowane z systemem inteligentnego domu. Automatyka dostępna jest dla większości typów osłon okiennych.",
  },
];

export default function Home() {
  return (
    <main>
      <WebPageSchema
        name="Specroll - Rolety, żaluzje i bramy garażowe w Wałbrzychu"
        description="Profesjonalny montaż rolet, żaluzji, plisów, bram garażowych, markiz i moskitier w Wałbrzychu i okolicach. Bezpłatna wycena, 5+ lat doświadczenia, 1000+ zadowolonych klientów."
        url="/"
        dateModified="2026-02-03"
      />
      <FAQSchema questions={homepageFaq} />

      {/* Benefits Section - Answers: Why choose Specroll? */}
      <section
        className="section-padding bg-gradient-to-b from-white to-gray-50"
        aria-labelledby="benefits-heading"
      >
        <div className="container-center">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Najwyższy standard obsługi
            </span>
            <h2
              id="benefits-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Dlaczego warto wybrać{" "}
              <span className="gradient-text">Specroll</span>?
            </h2>
            {/* Direct answer paragraph */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specroll to sprawdzony partner w zakresie osłon okiennych w
              Wałbrzychu i okolicach. Oferujemy wysokiej jakości produkty od
              renomowanych producentów, profesjonalny montaż przez doświadczony
              zespół oraz pełną gwarancję na wykonane usługi. Ponad 1000
              zadowolonych klientów zaufało naszemu doświadczeniu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section - Answers: What is Specroll's experience? */}
      <section
        className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
        aria-labelledby="stats-heading"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-center relative z-10">
          <h2 id="stats-heading" className="sr-only">
            Doświadczenie i osiągnięcia Specroll
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-number mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg font-medium">
                  {stat.label}
                </div>
                <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Answers: What projects has Specroll completed? */}
      <section
        className="section-padding bg-white"
        aria-labelledby="projects-heading"
      >
        <div className="container-center">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Portfolio
            </span>
            <h2
              id="projects-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Jakie projekty zrealizował{" "}
              <span className="gradient-text">Specroll</span>?
            </h2>
            {/* Direct answer paragraph */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Zrealizowaliśmy ponad 2000 projektów dla klientów indywidualnych,
              firm oraz instytucji publicznych. Nasze realizacje obejmują
              kompleksowe instalacje w szkołach, biurach, domach jednorodzinnych
              i apartamentach w całym regionie wałbrzyskim.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-2xl shadow-modern hover:shadow-modern-xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="mb-3">
                    <svg
                      className="w-12 h-12 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
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
                    {project.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/realizacje" className="btn-modern-primary">
              Zobacz więcej realizacji
              <svg
                className="w-5 h-5 ml-2"
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
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 relative overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="container-center text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2
              id="cta-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Jak zamówić wycenę rolet lub żaluzji?
            </h2>
            <p className="text-xl text-blue-50 mx-auto mb-10 leading-relaxed">
              Skontaktuj się z nami telefonicznie pod numer{" "}
              <a href="tel:+48666088953" className="underline font-semibold">
                +48 666 088 953
              </a>{" "}
              lub wypełnij formularz kontaktowy. Umówimy się na bezpłatny pomiar
              i przedstawimy szczegółową wycenę dopasowaną do Twoich potrzeb.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-blue-600 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Umów się na wycenę
              </Link>
              <Link
                href="/produkty"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Zobacz nasze produkty
                <svg
                  className="w-5 h-5 ml-2"
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local presence section - Answers: Where does Specroll operate? */}
      <section
        className="section-padding bg-gradient-to-b from-gray-50 to-white"
        aria-labelledby="local-heading"
      >
        <div className="container-center">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Lokalna obsługa
            </span>
            <h2
              id="local-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Gdzie działa <span className="gradient-text">Specroll</span>?
            </h2>
            {/* Direct answer paragraph */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specroll to lokalna firma z siedzibą w Wałbrzychu. Obsługujemy
              klientów z Wałbrzycha, Szczawna-Zdroju, Świebodzic, Świdnicy oraz
              okolicznych miejscowości. Nasza lokalna obecność gwarantuje szybką
              reakcję, bezpłatny dojazd na pomiar i profesjonalną obsługę bez
              zbędnego czekania.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-white p-10 rounded-2xl shadow-modern hover:shadow-modern-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
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
                <h3 className="text-2xl font-bold text-gray-900">
                  Obszar działania
                </h3>
              </div>
              <ul className="space-y-3">
                {["Wałbrzych", "Szczawno-Zdrój", "Świebodzice", "Świdnica", "Okoliczne miejscowości (do 30 km)"].map(
                  (area) => (
                    <li key={area} className="flex items-center group">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{area}</span>
                    </li>
                  )
                )}
              </ul>
            </article>
            <article className="bg-white p-10 rounded-2xl shadow-modern hover:shadow-modern-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-xl">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Dla kogo są nasze usługi?
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Właściciele domów jednorodzinnych",
                  "Mieszkańcy bloków i apartamentów",
                  "Firmy i przedsiębiorstwa",
                  "Instytucje edukacyjne",
                  "Wspólnoty mieszkaniowe",
                ].map((client) => (
                  <li key={client} className="flex items-center group">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{client}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="section-padding bg-white"
        aria-labelledby="faq-heading"
      >
        <div className="container-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                FAQ
              </span>
              <h2
                id="faq-heading"
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                Najczęściej zadawane pytania
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Odpowiedzi na pytania, które najczęściej zadają nasi klienci.
              </p>
            </div>
            <div className="space-y-6">
              {homepageFaq.map((item, index) => (
                <article
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </article>
              ))}
            </div>
            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">
                Masz inne pytanie? Chętnie odpowiemy!
              </p>
              <Link href="/kontakt" className="btn-modern-secondary">
                Skontaktuj się z nami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title:
    "Rolety, żaluzje i bramy garażowe w Wałbrzychu | Specroll - Profesjonalny montaż",
  description:
    "Specroll - profesjonalny montaż rolet, żaluzji, plisów, bram garażowych, markiz i moskitier w Wałbrzychu i okolicach. Bezpłatna wycena, 5+ lat doświadczenia, ponad 1000 zadowolonych klientów. Zadzwoń: +48 666 088 953",
  keywords: [
    "rolety Wałbrzych",
    "żaluzje Wałbrzych",
    "bramy garażowe Wałbrzych",
    "montaż rolet",
    "montaż żaluzji",
    "markizy Wałbrzych",
    "moskitiery Wałbrzych",
    "plisy okienne",
    "rolety zewnętrzne Wałbrzych",
    "rolety wewnętrzne",
    "automatyka bram garażowych",
    "osłony okienne Wałbrzych",
    "Szczawno-Zdrój rolety",
    "Świebodzice żaluzje",
  ],
  openGraph: {
    title:
      "Rolety, żaluzje i bramy garażowe w Wałbrzychu | Specroll - Profesjonalny montaż",
    description:
      "Specroll - profesjonalny montaż rolet, żaluzji i bram garażowych w Wałbrzychu i okolicach. Bezpłatna wycena, 5+ lat doświadczenia, ponad 1000 zadowolonych klientów.",
  },
  alternates: {
    canonical: "https://specroll.pl/",
  },
};
