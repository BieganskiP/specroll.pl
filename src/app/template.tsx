"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamic import to code-split, but SSR enabled so hero image is in initial HTML for LCP
const Header = dynamic(() => import("@/components/Header"));
const MainHeader = dynamic(() => import("@/components/MainHeader"));

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {isHomePage ? <Header /> : <MainHeader />}
      {children}
    </>
  );
}
