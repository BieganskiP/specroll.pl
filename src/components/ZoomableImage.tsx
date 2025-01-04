"use client";

import { useState } from "react";
import Image from "next/image";

interface ZoomableImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
}

export default function ZoomableImage({
  src,
  alt,
  aspectRatio = "aspect-4/3",
}: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div
        className={`relative ${aspectRatio} rounded-lg overflow-hidden cursor-zoom-in`}
        onClick={() => setIsZoomed(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative w-full max-w-6xl max-h-[90vh] aspect-[16/9]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setIsZoomed(false)}
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
      )}
    </>
  );
}
