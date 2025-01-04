"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";

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
