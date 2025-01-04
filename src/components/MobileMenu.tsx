"use client";

import { useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import ContactCTA from "./ContactCTA";
import { useSpring, animated, config } from "@react-spring/web";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Backdrop animation
  const backdropAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    config: {
      ...config.gentle,
      duration: isOpen ? 400 : 200,
    },
  });

  // Menu animation
  const menuAnimation = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(100%)",
    config: {
      tension: isOpen ? 170 : 250,
      friction: isOpen ? 26 : 20,
      duration: isOpen ? 400 : 200,
    },
  });

  if (!isOpen && menuAnimation.transform.get() === "translateX(100%)")
    return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <animated.div
      style={backdropAnimation}
      className="fixed inset-0 z-50 bg-white"
    >
      <animated.div
        style={menuAnimation}
        className="h-full flex flex-col overflow-y-auto bg-white"
      >
        {/* Header */}
        <div className="container-center py-4 flex items-center justify-between text-black w-full space-between">
          <Logo className="text-black" />
          <button
            onClick={onClose}
            className="p-2 hover:text-blue-600 transition-colors"
            aria-label="Zamknij menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 container-center py-8">
          <div className="space-y-6 text-center">
            <Link
              href="/produkty"
              onClick={handleLinkClick}
              className="block text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Produkty
            </Link>
            <Link
              href="/uslugi"
              onClick={handleLinkClick}
              className="block text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Usługi
            </Link>
            <Link
              href="/kontakt"
              onClick={handleLinkClick}
              className="block text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Kontakt
            </Link>
            <div className="pt-4">
              <ContactCTA
                href="/kontakt#contact-form"
                onClick={handleLinkClick}
              >
                Umów wycenę
              </ContactCTA>
            </div>
          </div>
        </nav>

        {/* Contact Details */}
        <div className="container-center py-8 border-t border-gray-200">
          <div className="space-y-4 text-center">
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Kontakt</h3>
              <a
                href="tel:+48666088953"
                className="block text-blue-600 hover:text-blue-700"
              >
                +48 666 088 953
              </a>
              <a
                href="tel:+48694749815"
                className="block text-blue-600 hover:text-blue-700"
              >
                +48 694 749 815
              </a>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Email</h3>
              <a
                href="mailto:kontakt@specroll.pl"
                className="text-blue-600 hover:text-blue-700"
              >
                kontakt@specroll.pl
              </a>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">
                Obszar działania
              </h3>
              <p className="text-gray-600">Wałbrzych i okolice</p>
            </div>
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
}
