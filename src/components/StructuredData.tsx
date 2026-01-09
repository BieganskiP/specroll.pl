import Script from "next/script";

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  telephone?: string;
  url: string;
  logo?: string;
  priceRange?: string;
  areaServed?: string[];
}

export function LocalBusinessSchema({
  name = "Specroll",
  description = "Profesjonalny montaż rolet, żaluzji i bram garażowych w Wałbrzychu i okolicach.",
  address = {
    addressLocality: "Wałbrzych",
    addressRegion: "dolnośląskie",
    postalCode: "58-300",
    addressCountry: "PL",
  },
  telephone = "+48 XXX XXX XXX",
  url = "https://specroll.pl",
  logo = "https://specroll.pl/logo.png",
  priceRange = "$$",
  areaServed = ["Wałbrzych", "Szczawno-Zdrój", "Świebodzice", "Świdnica"],
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    telephone,
    url,
    logo,
    priceRange,
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Produkty i usługi",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Montaż rolet",
            description: "Profesjonalny montaż rolet wewnętrznych i zewnętrznych",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Montaż żaluzji",
            description: "Instalacja żaluzji aluminiowych i drewnianych",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bramy garażowe",
            description: "Montaż i automatyka bram garażowych",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Markizy tarasowe",
            description: "Instalacja markiz tarasowych i balkonowych",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Moskitiery",
            description: "Montaż moskitier ramkowych i rolowanych",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plisy okienne",
            description: "Instalacja plisów do okien standardowych i dachowych",
          },
        },
      ],
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  brand?: string;
  offers?: {
    availability?: string;
    priceCurrency?: string;
  };
}

export function ProductSchema({
  name,
  description,
  image,
  url,
  brand = "Specroll",
  offers = {
    availability: "https://schema.org/InStock",
    priceCurrency: "PLN",
  },
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `https://specroll.pl${image}`,
    url: `https://specroll.pl${url}`,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "AggregateOffer",
      availability: offers.availability,
      priceCurrency: offers.priceCurrency,
      seller: {
        "@type": "Organization",
        name: brand,
      },
    },
  };

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebsiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
}

export function WebsiteSchema({
  name = "Specroll",
  url = "https://specroll.pl",
  description = "Profesjonalny montaż rolet, żaluzji i bram garażowych w Wałbrzychu i okolicach.",
}: WebsiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/produkty?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
