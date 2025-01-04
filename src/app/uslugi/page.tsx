import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Bezpłatna wycena",
    description:
      "Nasz specjalista przyjedzie do Ciebie, dokona pomiarów i przedstawi najlepsze rozwiązania dopasowane do Twoich potrzeb.",
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
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Profesjonalny montaż",
    description:
      "Zespół doświadczonych montażystów zadba o prawidłową instalację produktów, gwarantując ich długotrwałe i bezproblemowe działanie.",
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
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    title: "Serwis i naprawa",
    description:
      "Świadczymy usługi serwisowe i naprawcze dla wszystkich naszych produktów, zapewniając ich długotrwałe i bezawaryjne działanie.",
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
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
];

const process = [
  {
    number: "01",
    title: "Kontakt",
    description:
      "Skontaktuj się z nami telefonicznie lub przez formularz kontaktowy.",
  },
  {
    number: "02",
    title: "Pomiar i wycena",
    description: "Nasz specjalista przyjedzie na bezpłatny pomiar i wycenę.",
  },
  {
    number: "03",
    title: "Zamówienie",
    description:
      "Potwierdzamy szczegóły i przyjmujemy zamówienie do realizacji.",
  },
  {
    number: "04",
    title: "Montaż",
    description: "Profesjonalny montaż w ustalonym terminie.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container-center">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-medium text-gray-900 mb-4">
            Nasze Usługi
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferujemy kompleksowe usługi od pomiaru, przez doradztwo, po montaż
            i serwis. Nasi specjaliści pomogą dobrać najlepsze rozwiązania dla
            Twojego domu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-medium text-gray-900 mb-8 text-center">
              Jak działamy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step) => (
                <div key={step.number} className="relative">
                  <div className="text-4xl font-bold text-blue-200 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center bg-blue-300 text-black font-medium py-3 px-8 rounded-full hover:scale-[1.03] active:scale-100 !duration-200 ease-[cubic-bezier(.15,1.14,.88,.98)]"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </main>
  );
}
