import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ContactCTA from "@/components/ContactCTA";

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
      <section className="py-20 bg-white">
        <div className="container-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Dlaczego warto wybrać Specroll?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stawiamy na jakość, profesjonalizm i zadowolenie klienta. Nasze
              produkty i usługi spełniają najwyższe standardy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Nasze realizacje
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Zobacz przykłady naszych ostatnich realizacji i przekonaj się o
              jakości naszych usług.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-medium text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/realizacje"
              className="inline-flex items-center justify-center bg-blue-300 text-black font-medium py-3 px-8 rounded-full hover:scale-[1.03] active:scale-100 !duration-200 ease-[cubic-bezier(.15,1.14,.88,.98)]"
            >
              Zobacz więcej realizacji
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
      <section className="py-20 bg-blue-600">
        <div className="container-center text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
            Zrealizuj swój projekt z nami
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Skontaktuj się z nami już dziś i umów się na bezpłatną wycenę.
            Pomożemy Ci wybrać najlepsze rozwiązanie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactCTA href="/kontakt">Umów się na wycenę</ContactCTA>
            <ContactCTA variant="secondary" href="/produkty">
              Zobacz nasze produkty
            </ContactCTA>
          </div>
        </div>
      </section>

      {/* Add a new section about local presence */}
      <section className="py-20 bg-gray-50">
        <div className="container-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Lokalny ekspert w Wałbrzychu i okolicach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Od lat świadczymy usługi dla mieszkańców Wałbrzycha i okolicznych
              miejscowości. Nasza lokalna obecność gwarantuje szybką reakcję i
              profesjonalną obsługę.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Obszar działania
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
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
                  Wałbrzych
                </li>
                <li className="flex items-center">
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
                  Szczawno-Zdrój
                </li>
                <li className="flex items-center">
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
                  Świebodzice
                </li>
                <li className="flex items-center">
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
                  Okoliczne miejscowości
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Nasi klienci
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
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
                  Instytucje edukacyjne
                </li>
                <li className="flex items-center">
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
                  Firmy i przedsiębiorstwa
                </li>
                <li className="flex items-center">
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
                  Klienci indywidualni
                </li>
                <li className="flex items-center">
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
                  Wspólnoty mieszkaniowe
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  alternates: {
    canonical: "https://specroll.pl/",
  },
};
