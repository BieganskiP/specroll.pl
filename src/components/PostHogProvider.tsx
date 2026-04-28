"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";

function PostHogInit() {
  const { hasDecided, analyticsConsent } = useCookieConsent();

  useEffect(() => {
    if (!POSTHOG_KEY) return;

    if (!(posthog as any).__loaded) {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        capture_pageview: false,
        capture_pageleave: true,
        autocapture: true,
        persistence: "localStorage+cookie",
        opt_out_capturing_by_default: true,
      });
    }

    if (hasDecided) {
      if (analyticsConsent) {
        posthog.opt_in_capturing();
      } else {
        posthog.opt_out_capturing();
      }
    }
  }, [hasDecided, analyticsConsent]);

  return null;
}

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { analyticsConsent } = useCookieConsent();

  useEffect(() => {
    if (!analyticsConsent || !POSTHOG_KEY) return;
    const url =
      pathname +
      (searchParams.toString() ? `?${searchParams.toString()}` : "");
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams, analyticsConsent]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <PHProvider client={posthog}>
      <PostHogInit />
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      {children}
    </PHProvider>
  );
}
