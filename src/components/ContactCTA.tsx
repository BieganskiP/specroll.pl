"use client";
import Link from "next/link";

interface ContactCTAProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  href: string;
}

export default function ContactCTA({
  children,
  className = "",
  variant = "primary",
  href,
}: ContactCTAProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium py-3 px-8 rounded-full hover:scale-[1.03] active:scale-100 !duration-200 ease-[cubic-bezier(.15,1.14,.88,.98)]";
  const variantStyles = {
    primary: "bg-blue-300 text-black",
    secondary: "bg-transparent border-2 border-white text-white",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
