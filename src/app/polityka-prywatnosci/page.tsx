import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Polityka prywatności | Specroll Wałbrzych",
  description:
    "Polityka prywatności i plików cookie firmy Specroll. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://specroll.pl/polityka-prywatnosci" },
};

const sections = [
  {
    id: "administrator",
    title: "1. Administrator danych",
    content: `Administratorem Twoich danych osobowych jest firma Specroll z siedzibą w Wałbrzychu (NIP: 8863018777, REGON: 520410221). Kontakt w sprawach danych osobowych: kontakt@specroll.pl lub telefonicznie +48 666 088 953.`,
  },
  {
    id: "dane",
    title: "2. Jakie dane zbieramy i po co",
    content: `Zbieramy wyłącznie dane niezbędne do realizacji usług:

• Formularz kontaktowy: imię i nazwisko, adres e-mail, numer telefonu (opcjonalnie), treść wiadomości – cel: odpowiedź na zapytanie, umówienie wyceny (podstawa prawna: art. 6 ust. 1 lit. b RODO – niezbędność do podjęcia działań przed zawarciem umowy).

• Analityka (po wyrażeniu zgody): dane o sposobie korzystania ze strony (anonimizowane), informacje o urządzeniu i przeglądarce – cel: poprawa jakości strony (podstawa prawna: art. 6 ust. 1 lit. a RODO – zgoda).`,
  },
  {
    id: "cookies",
    title: "3. Pliki cookie",
    content: `Używamy następujących kategorii plików cookie:

Niezbędne – wymagane do działania strony (zapamiętywanie wyboru cookie, funkcjonalność formularza). Nie wymagają zgody.

Analityczne – PostHog (eu.i.posthog.com) – anonimowe dane o zachowaniu użytkowników. Dane są przetwarzane na serwerach UE. Wymagają Twojej zgody.

Możesz zmienić swój wybór w dowolnym momencie, usuwając pliki cookie w ustawieniach przeglądarki lub odświeżając stronę, aby ponownie wyświetlić baner.`,
  },
  {
    id: "odbiorcy",
    title: "4. Odbiorcy danych",
    content: `Twoje dane mogą być przekazywane:
• Dostawcy usług e-mail (Hostingowa/hb.pl) – obsługa poczty firmowej.
• PostHog Inc. – analityka (wyłącznie przy wyrażonej zgodzie, dane przetwarzane w UE).

Dane nie są przekazywane poza Europejski Obszar Gospodarczy.`,
  },
  {
    id: "prawa",
    title: "5. Twoje prawa",
    content: `Na podstawie RODO przysługują Ci prawa:
• Dostępu do danych (art. 15 RODO)
• Sprostowania danych (art. 16 RODO)
• Usunięcia danych (art. 17 RODO)
• Ograniczenia przetwarzania (art. 18 RODO)
• Przenoszenia danych (art. 20 RODO)
• Sprzeciwu wobec przetwarzania (art. 21 RODO)
• Cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania przed cofnięciem)

Masz prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl).`,
  },
  {
    id: "przechowywanie",
    title: "6. Okres przechowywania danych",
    content: `Dane z formularza kontaktowego przechowujemy przez czas niezbędny do obsługi zapytania, a następnie do 3 lat na potrzeby ewentualnych roszczeń. Dane analityczne (PostHog) przechowywane są zgodnie z polityką PostHog (domyślnie 1 rok).`,
  },
  {
    id: "kontakt",
    title: "7. Kontakt w sprawach prywatności",
    content: `W sprawach dotyczących ochrony danych osobowych skontaktuj się z nami:
E-mail: kontakt@specroll.pl
Telefon: +48 666 088 953
Adres: Wałbrzych, Polska`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-white pt-32 pb-20">
        <div className="container-center">
          <div className="max-w-3xl mx-auto">
            <header className="mb-12">
              <nav aria-label="Ścieżka nawigacji" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-gray-500">
                  <li>
                    <Link href="/" className="hover:text-blue-600 transition-colors">
                      Strona główna
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-gray-900 font-medium">
                    Polityka prywatności
                  </li>
                </ol>
              </nav>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Polityka prywatności
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Niniejsza polityka prywatności wyjaśnia, w jaki sposób Specroll
                przetwarza Twoje dane osobowe i korzysta z plików cookie. Dbamy o
                Twoją prywatność i przetwarzamy dane zgodnie z Rozporządzeniem
                RODO (UE 2016/679).
              </p>
              <p className="text-sm text-gray-400 mt-3">
                Ostatnia aktualizacja: 5 kwietnia 2026 r.
              </p>
            </header>

            {/* Table of contents */}
            <nav aria-label="Spis treści" className="mb-10 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Spis treści
              </h2>
              <ol className="space-y-1">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-blue-600 hover:text-blue-700 text-sm underline-offset-2 hover:underline"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((s) => (
                <section key={s.id} id={s.id} aria-labelledby={`heading-${s.id}`}>
                  <h2
                    id={`heading-${s.id}`}
                    className="text-xl font-bold text-gray-900 mb-3"
                  >
                    {s.title}
                  </h2>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {s.content}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <Link
                href="/kontakt"
                className="btn-modern-primary"
              >
                Masz pytania? Skontaktuj się z nami
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
