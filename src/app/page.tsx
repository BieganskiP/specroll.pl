import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactCTA from "@/components/ContactCTA";
import { Metadata } from "next";

const benefits = [
  {
    title: "Najwyższa jakość",
    description:
      "Współpracujemy tylko z renomowanymi producentami, gwarantując trwałość i niezawodność.",
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
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Profesjonalna obsługa",
    description:
      "Nasz zespół ekspertów służy doradztwem i pomocą na każdym etapie realizacji.",
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

const testimonials = [
  {
    content:
      "Profesjonalny montaż i świetna jakość produktów. Zespół Specroll wykonał kompleksową instalację rolet i żaluzji w naszej szkole.",
    author: 'Zespół Szkół Politechnicznych "Energetyk"',
    role: "Wałbrzych",
    image: "/testimonial1.webp",
  },
  {
    content:
      "Świetne doradztwo przy wyborze żaluzji. Fachowcy pomogli dobrać idealne rozwiązanie do naszego biura.",
    author: "Jan Nowak",
    role: "Przedsiębiorca z Wałbrzycha",
    image: "/testimonial2.webp",
  },
  {
    content:
      "Bardzo dobry kontakt i terminowa realizacja. Polecam szczególnie rolety zewnętrzne - świetna jakość i montaż.",
    author: "Marek Wiśniewski",
    role: "Właściciel domu jednorodzinnego",
    image: "/testimonial3.webp",
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
  },
  {
    title: "System rolet w budynku mieszkalnym",
    location: "Wałbrzych Śródmieście",
    image: "/rolety.jpg",
  },
  {
    title: "Żaluzje i rolety w domu jednorodzinnym",
    location: "Szczawno-Zdrój",
    image: "/plisy.jpg",
  },
];

export default function Home() {
  return (
    <main>
      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-center">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Najwyższy standard obsługi
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dlaczego warto wybrać{" "}
              <span className="gradient-text">Specroll</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Stawiamy na jakość, profesjonalizm i zadowolenie klienta. Nasze
              produkty i usługi spełniają najwyższe standardy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-center relative z-10">
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

      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="container-center">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nasze <span className="gradient-text">realizacje</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Zobacz przykłady naszych ostatnich realizacji i przekonaj się o
              jakości naszych usług.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl shadow-modern hover:shadow-modern-xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="mb-3">
                    <svg className="w-12 h-12 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/realizacje"
              className="btn-modern-primary"
            >
              Zobacz więcej realizacji
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Co mówią nasi klienci
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Poznaj opinie naszych klientów i przekonaj się o jakości naszych
              usług.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="container-center text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Zrealizuj swój projekt z nami
            </h2>
            <p className="text-xl text-blue-50 mx-auto mb-10 leading-relaxed">
              Skontaktuj się z nami już dziś i umów się na bezpłatną wycenę.
              Pomożemy Ci wybrać najlepsze rozwiązanie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-blue-600 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Umów się na wycenę
              </Link>
              <Link href="/produkty" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Zobacz nasze produkty
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add a new section about local presence */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-center">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Lokalna obsługa
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lokalny ekspert w{" "}
              <span className="gradient-text">Wałbrzychu</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Od lat świadczymy usługi dla mieszkańców Wałbrzycha i okolicznych
              miejscowości. Nasza lokalna obecność gwarantuje szybką reakcję i
              profesjonalną obsługę.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-modern hover:shadow-modern-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Obszar działania
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center group">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Wałbrzych</span>
                </li>
                <li className="flex items-center group">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Szczawno-Zdrój</span>
                </li>
                <li className="flex items-center group">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Świebodzice</span>
                </li>
                <li className="flex items-center group">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Okoliczne miejscowości</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-modern hover:shadow-modern-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-xl">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Nasi klienci
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center group">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Instytucje edukacyjne</span>
                </li>
                <li className="flex items-center group">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Firmy i przedsiębiorstwa</span>
                </li>
                <li className="flex items-center group">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Klienci indywidualni</span>
                </li>
                <li className="flex items-center group">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Wspólnoty mieszkaniowe</span>
                </li>
              </ul>
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
    "✓ Profesjonalny montaż rolet, żaluzji i bram garażowych w Wałbrzychu ✓ Bezpłatna wycena ✓ 5+ lat doświadczenia ✓ 1000+ zadowolonych klientów ✓ Markizy, moskitiery, plisy",
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
  ],
  openGraph: {
    title:
      "Rolety, żaluzje i bramy garażowe w Wałbrzychu | Specroll - Profesjonalny montaż",
    description:
      "Profesjonalny montaż rolet, żaluzji i bram garażowych w Wałbrzychu i okolicach. Bezpłatna wycena. 5+ lat doświadczenia. 1000+ zadowolonych klientów.",
  },
  alternates: {
    canonical: "https://specroll.pl/",
  },
};
