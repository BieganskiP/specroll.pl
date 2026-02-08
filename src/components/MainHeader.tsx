"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import ContactCTA from "./ContactCTA";
import Logo from "./Logo";

const MobileMenu = dynamic(() => import("./MobileMenu"), {
  ssr: false,
});

export default function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container-center">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Logo />

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/produkty"
                className={`font-medium hover:text-blue-600 transition-colors text-gray-900`}
              >
                Produkty
              </Link>
              <Link
                href="/uslugi"
                className={`font-medium hover:text-blue-600 transition-colors text-gray-900`}
              >
                Usługi
              </Link>
              <Link
                href="/kontakt"
                className={`font-medium hover:text-blue-600 transition-colors text-gray-900`}
              >
                Kontakt
              </Link>
              <ContactCTA href="/kontakt#contact-form">Umów wycenę</ContactCTA>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6 text-gray-900"
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
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
