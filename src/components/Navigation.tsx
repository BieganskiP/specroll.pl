"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Logo from "./Logo";
import ContactCTA from "./ContactCTA";

const MobileMenu = dynamic(() => import("./MobileMenu"), {
  ssr: false,
});

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="absolute inset-x-0 z-50 pt-4 bg-hero">
        <div className="container-center w-full">
          <div
            className="inline-block w-full"
            style={{
              opacity: 1,
              transform: "translateY(0%) translateZ(0px)",
              backdropFilter: "blur(25px)",
              borderRadius: "100px",
            }}
          >
            <nav className="relative overflow-visible visible h-16 border border-white/5 backdrop-blur-[25px] p-4 lg:pl-10 lg:py-3 lg:pr-3 rounded-[100px] bg-white/10 flex items-center space-x-5 xl:space-x-[50px] w-full justify-between">
              <Logo />

              <div className="hidden lg:flex items-center space-x-5 xl:space-x-12">
                <Link
                  href="/produkty"
                  className="hover:scale-[1.03] active:scale-100 !duration-200 ease-[cubic-bezier(.15,1.14,.88,.98)]"
                >
                  Produkty
                </Link>
                <Link
                  href="/uslugi"
                  className="hover:scale-[1.03] active:scale-100 !duration-200 ease-[cubic-bezier(.15,1.14,.88,.98)]"
                >
                  Nasze usługi
                </Link>
                <Link
                  href="/realizacje"
                  className="hover:scale-[1.03] active:scale-100 !duration-200 ease-[cubic-bezier(.15,1.14,.88,.98)]"
                >
                  Realizacje
                </Link>
                <Link
                  href="/kontakt"
                  className="hover:scale-[1.03] active:scale-100 !duration-200 ease-[cubic-bezier(.15,1.14,.88,.98)]"
                >
                  Kontakt
                </Link>
              </div>

              <div className="hidden lg:block">
                <ContactCTA href="/kontakt#contact-form">
                  Umów wycenę już dziś
                </ContactCTA>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Menu"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
