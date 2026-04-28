"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const STORAGE_KEY = "specroll_cookie_consent";

type ConsentData = {
  analytics: boolean;
  timestamp: string;
};

type CookieConsentContextType = {
  hasDecided: boolean;
  analyticsConsent: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (analytics: boolean) => void;
};

const CookieConsentContext = createContext<CookieConsentContextType | null>(
  null
);

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasDecided, setHasDecided] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data: ConsentData = JSON.parse(stored);
        setAnalyticsConsent(data.analytics);
        setHasDecided(true);
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  const persist = useCallback((analytics: boolean) => {
    const data: ConsentData = {
      analytics,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setAnalyticsConsent(analytics);
    setHasDecided(true);
  }, []);

  const acceptAll = useCallback(() => persist(true), [persist]);
  const rejectAll = useCallback(() => persist(false), [persist]);
  const savePreferences = useCallback(
    (analytics: boolean) => persist(analytics),
    [persist]
  );

  return (
    <CookieConsentContext.Provider
      value={{ hasDecided, analyticsConsent, acceptAll, rejectAll, savePreferences }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
}
