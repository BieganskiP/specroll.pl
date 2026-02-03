import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-center py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Specroll</h3>
            <p className="text-sm mb-4">
              Profesjonalne rozwiązania w zakresie rolet, żaluzji, plis, bram
              garażowych, markiz i moskitier.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                Wałbrzych i okolice
              </p>
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                kontakt@specroll.pl
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">
              Szybkie linki
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/produkty"
                  className="hover:text-white transition-colors"
                >
                  Produkty
                </Link>
              </li>
              <li>
                <Link
                  href="/uslugi"
                  className="hover:text-white transition-colors"
                >
                  Usługi
                </Link>
              </li>
              <li>
                <Link
                  href="/realizacje"
                  className="hover:text-white transition-colors"
                >
                  Realizacje
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +48 666 088 953
              </p>
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +48 694 749 815
              </p>
              <p className="mt-4">
                <strong>NIP:</strong> 8863018777
              </p>
              <p>
                <strong>REGON:</strong> 520410221
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">
              Godziny otwarcia
            </h3>
            <div className="space-y-2 text-sm">
              <p className="flex justify-between">
                <span>Poniedziałek - Piątek</span>
                <span>9:00 - 17:00</span>
              </p>
              <p className="flex justify-between">
                <span>Sobota</span>
                <span>10:00 - 14:00</span>
              </p>
              <p className="flex justify-between">
                <span>Niedziela</span>
                <span>Zamknięte</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center space-y-2">
          <p>
            © {new Date().getFullYear()} Specroll. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-gray-500">
            Wykonanie:{" "}
            <a
              href="https://patrykbieganski.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Patryk Biegański
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
