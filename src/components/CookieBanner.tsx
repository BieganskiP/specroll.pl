"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

export default function CookieBanner() {
  const { hasDecided, analyticsConsent, acceptAll, rejectAll, savePreferences } =
    useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Move focus to banner when it appears
  useEffect(() => {
    if (!hasDecided) {
      firstFocusableRef.current?.focus();
    }
  }, [hasDecided]);

  // Focus trap within banner
  useEffect(() => {
    if (hasDecided) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        rejectAll();
        return;
      }

      if (e.key !== "Tab" || !bannerRef.current) return;

      const focusable = bannerRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [hasDecided, rejectAll]);

  if (hasDecided) return null;

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Ustawienia plików cookie"
      aria-describedby="cookie-desc"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_-4px_32px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <svg
              className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Twoja prywatność
              </h2>
              <p id="cookie-desc" className="text-sm text-gray-600 mt-1 leading-relaxed">
                Używamy plików cookie, aby zapewnić prawidłowe działanie strony.
                Za Twoją zgodą korzystamy też z analityki, która pomaga nam
                ulepszać nasze usługi.{" "}
                <Link
                  href="/polityka-prywatnosci"
                  className="text-blue-600 underline hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 rounded"
                >
                  Polityka prywatności
                </Link>
              </p>
            </div>
          </div>

          {/* Details panel */}
          {showDetails && (
            <div className="mb-4 p-4 bg-gray-50 rounded-xl space-y-3 border border-gray-200">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Niezbędne
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Wymagane do działania strony (formularz kontaktowy,
                    zapamiętywanie preferencji). Zawsze aktywne.
                  </p>
                </div>
                <span
                  className="flex-shrink-0 mt-0.5 text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full"
                  aria-label="Niezbędne pliki cookie są zawsze aktywne"
                >
                  Zawsze aktywne
                </span>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <label
                    htmlFor="analytics-toggle"
                    className="text-sm font-semibold text-gray-900 cursor-pointer"
                  >
                    Analityczne
                  </label>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Pomagają nam zrozumieć, jak korzystasz ze strony (PostHog).
                    Dane są anonimizowane i przetwarzane na serwerach w UE.
                  </p>
                </div>
                <button
                  id="analytics-toggle"
                  role="switch"
                  aria-checked={analyticsChecked}
                  onClick={() => setAnalyticsChecked((v) => !v)}
                  className={`flex-shrink-0 mt-0.5 relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                    analyticsChecked ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Analityczne pliki cookie – ${analyticsChecked ? "włączone" : "wyłączone"}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                      analyticsChecked ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 justify-end">
            <button
              onClick={() => setShowDetails((v) => !v)}
              className="text-sm text-gray-600 underline hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 rounded px-1"
            >
              {showDetails ? "Ukryj opcje" : "Ustawienia"}
            </button>

            <button
              onClick={rejectAll}
              className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
            >
              Tylko niezbędne
            </button>

            {showDetails ? (
              <button
                onClick={() => savePreferences(analyticsChecked)}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Zapisz wybór
              </button>
            ) : (
              <button
                ref={firstFocusableRef}
                onClick={acceptAll}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Zaakceptuj wszystkie
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
