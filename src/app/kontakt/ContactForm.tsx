"use client";
import { useState, useEffect } from "react";

const topics = [
  "Rolety zewnętrzne",
  "Rolety wewnętrzne",
  "Żaluzje",
  "Plisy",
  "Bramy garażowe",
  "Markizy",
  "Moskitiery",
  "Serwis i naprawa",
  "Inne",
];

// FAQ for contact page
const contactFaq = [
  {
    question: "Jak mogę skontaktować się ze Specroll?",
    answer:
      "Możesz skontaktować się z nami telefonicznie pod numery +48 666 088 953 lub +48 694 749 815 (poniedziałek-piątek 9:00-17:00, sobota 10:00-14:00), mailowo na adres kontakt@specroll.pl lub wypełniając formularz kontaktowy na tej stronie.",
  },
  {
    question: "Jak zamówić bezpłatną wycenę?",
    answer:
      "Zadzwoń lub wypełnij formularz kontaktowy. Umówimy termin wizyty specjalisty, który przyjedzie, dokona pomiarów i przedstawi szczegółową wycenę. Usługa jest całkowicie bezpłatna i niezobowiązująca.",
  },
  {
    question: "Jaki jest czas odpowiedzi?",
    answer:
      "Na zapytania telefoniczne odpowiadamy natychmiast w godzinach pracy. Na wiadomości email i formularze odpowiadamy zwykle w ciągu 24 godzin w dni robocze.",
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: topics[0],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash === "#contact-form") {
      const form = document.getElementById("contact-form");
      if (form) {
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Wystąpił błąd podczas wysyłania wiadomości"
        );
      }

      setSubmitStatus({
        type: "success",
        message: "Wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        topic: topics[0],
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container-center">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Bezpłatna wycena
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Jak skontaktować się ze{" "}
              <span className="gradient-text">Specroll</span>?
            </h1>
            {/* Direct answer paragraph */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Skontaktuj się z nami telefonicznie, mailowo lub przez formularz
              kontaktowy. Odpowiadamy zwykle w ciągu 24 godzin i chętnie umówimy
              bezpłatną wycenę z pomiarem u Ciebie.
            </p>
          </header>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Details */}
            <article className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-modern border border-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Dane kontaktowe
              </h2>
              <div className="space-y-4">
                <a
                  href="tel:+48666088953"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <svg
                      className="w-5 h-5 text-blue-600"
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
                  </div>
                  <div>
                    <span className="font-semibold">+48 666 088 953</span>
                    <span className="text-sm text-gray-500 block">
                      Telefon główny
                    </span>
                  </div>
                </a>
                <a
                  href="tel:+48694749815"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <svg
                      className="w-5 h-5 text-blue-600"
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
                  </div>
                  <div>
                    <span className="font-semibold">+48 694 749 815</span>
                    <span className="text-sm text-gray-500 block">
                      Telefon dodatkowy
                    </span>
                  </div>
                </a>
                <a
                  href="mailto:kontakt@specroll.pl"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">kontakt@specroll.pl</span>
                    <span className="text-sm text-gray-500 block">Email</span>
                  </div>
                </a>
                <div className="flex items-center text-gray-700">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-blue-600"
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
                  <div>
                    <span className="font-semibold">Wałbrzych i okolice</span>
                    <span className="text-sm text-gray-500 block">
                      Szczawno-Zdrój, Świebodzice, Świdnica
                    </span>
                  </div>
                </div>
                {/* Company registration info - E-E-A-T trust signals */}
                <div className="pt-4 mt-4 border-t border-blue-100">
                  <p className="text-sm text-gray-600">
                    <strong>NIP:</strong> 8863018777
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>REGON:</strong> 520410221
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Ponad 20 lat doświadczenia w branży
                  </p>
                </div>
              </div>
            </article>

            {/* Opening Hours */}
            <article className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-modern border border-green-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Godziny pracy
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-green-100">
                  <span className="text-gray-700 font-medium">
                    Poniedziałek - Piątek
                  </span>
                  <span className="text-green-700 font-semibold">
                    9:00 - 17:00
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-green-100">
                  <span className="text-gray-700 font-medium">Sobota</span>
                  <span className="text-green-700 font-semibold">
                    10:00 - 14:00
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 font-medium">Niedziela</span>
                  <span className="text-red-600 font-semibold">Zamknięte</span>
                </div>
              </div>
              {/* Service area info */}
              <div className="mt-6 p-4 bg-green-100/50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Obszar obsługi
                </h3>
                <p className="text-sm text-gray-600">
                  Obsługujemy Wałbrzych i okolice w promieniu ~30 km: Szczawno-Zdrój, Świebodzice, Świdnicę i inne miejscowości regionu.
                </p>
              </div>
            </article>
          </div>

          {/* Contact Form */}
          <section aria-labelledby="form-heading">
            <h2
              id="form-heading"
              className="text-2xl font-bold text-gray-900 mb-6 text-center"
            >
              Wyślij zapytanie o wycenę
            </h2>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-modern"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Imię i nazwisko <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefon{" "}
                  <span className="text-gray-400">(opcjonalnie)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="+48 XXX XXX XXX"
                />
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Temat zapytania <span className="text-red-500">*</span>
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-colors"
                  required
                  aria-required="true"
                >
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Wiadomość <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                  aria-required="true"
                  placeholder="Opisz swoje potrzeby - rodzaj produktu, liczba okien, lokalizacja itp."
                ></textarea>
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                  role="alert"
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-full hover:bg-blue-700 hover:scale-[1.02] active:scale-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Wysyłanie...
                  </span>
                ) : (
                  "Wyślij zapytanie"
                )}
              </button>
            </form>
          </section>

          {/* FAQ Section */}
          <section className="mt-16" aria-labelledby="contact-faq-heading">
            <div className="text-center mb-8">
              <h2
                id="contact-faq-heading"
                className="text-2xl font-bold text-gray-900"
              >
                Często zadawane pytania o kontakt
              </h2>
            </div>
            <div className="space-y-4">
              {contactFaq.map((item, index) => (
                <article
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
