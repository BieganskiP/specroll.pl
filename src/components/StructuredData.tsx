import Script from "next/script";

// Company data constants for consistency across all schemas
const COMPANY_DATA = {
  name: "Specroll",
  legalName: "Specroll",
  url: "https://specroll.pl",
  logo: "https://specroll.pl/logo.png",
  description:
    "Specroll to lokalna firma z Wałbrzycha specjalizująca się w sprzedaży i profesjonalnym montażu rolet, żaluzji, bram garażowych, markiz, moskitier i plisów okiennych. Obsługujemy klientów indywidualnych, firmy oraz instytucje w regionie dolnośląskim od ponad 5 lat.",
  shortDescription:
    "Profesjonalny montaż rolet, żaluzji i bram garażowych w Wałbrzychu i okolicach.",
  foundingYear: 2019,
  taxId: "8863018777",
  vatId: "PL8863018777",
  email: "kontakt@specroll.pl",
  telephone: ["+48 666 088 953", "+48 694 749 815"],
  address: {
    streetAddress: "",
    addressLocality: "Wałbrzych",
    addressRegion: "dolnośląskie",
    postalCode: "58-300",
    addressCountry: "PL",
  },
  geo: {
    latitude: 50.7714,
    longitude: 16.2843,
  },
  areaServed: ["Wałbrzych", "Szczawno-Zdrój", "Świebodzice", "Świdnica"],
  priceRange: "$$",
  openingHours: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
    { dayOfWeek: ["Saturday"], opens: "10:00", closes: "14:00" },
  ],
  sameAs: [],
};

// Organization Schema - for establishing entity identity
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${COMPANY_DATA.url}/#organization`,
    name: COMPANY_DATA.name,
    legalName: COMPANY_DATA.legalName,
    url: COMPANY_DATA.url,
    logo: {
      "@type": "ImageObject",
      url: COMPANY_DATA.logo,
      width: 200,
      height: 60,
    },
    description: COMPANY_DATA.description,
    foundingDate: COMPANY_DATA.foundingYear.toString(),
    taxID: COMPANY_DATA.taxId,
    vatID: COMPANY_DATA.vatId,
    email: COMPANY_DATA.email,
    telephone: COMPANY_DATA.telephone[0],
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY_DATA.address.addressLocality,
      addressRegion: COMPANY_DATA.address.addressRegion,
      postalCode: COMPANY_DATA.address.postalCode,
      addressCountry: COMPANY_DATA.address.addressCountry,
    },
    areaServed: COMPANY_DATA.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY_DATA.telephone[0],
        contactType: "customer service",
        availableLanguage: ["Polish"],
        areaServed: "PL",
      },
      {
        "@type": "ContactPoint",
        telephone: COMPANY_DATA.telephone[1],
        contactType: "sales",
        availableLanguage: ["Polish"],
        areaServed: "PL",
      },
    ],
    knowsAbout: [
      "Rolety okienne",
      "Żaluzje aluminiowe",
      "Żaluzje drewniane",
      "Bramy garażowe",
      "Markizy tarasowe",
      "Moskitiery",
      "Plisy okienne",
      "Montaż osłon okiennych",
      "Automatyka do rolet",
    ],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

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
  name = COMPANY_DATA.name,
  description = COMPANY_DATA.shortDescription,
  address = COMPANY_DATA.address,
  telephone = COMPANY_DATA.telephone[0],
  url = COMPANY_DATA.url,
  logo = COMPANY_DATA.logo,
  priceRange = COMPANY_DATA.priceRange,
  areaServed = COMPANY_DATA.areaServed,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#localbusiness`,
    name,
    description,
    image: logo,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY_DATA.geo.latitude,
      longitude: COMPANY_DATA.geo.longitude,
    },
    telephone,
    email: COMPANY_DATA.email,
    url,
    logo,
    priceRange,
    currenciesAccepted: "PLN",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    openingHoursSpecification: COMPANY_DATA.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Produkty i usługi osłon okiennych",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Montaż rolet",
            description:
              "Profesjonalny montaż rolet wewnętrznych i zewnętrznych do wszystkich typów okien",
            provider: { "@id": `${url}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Montaż żaluzji",
            description:
              "Instalacja żaluzji aluminiowych i drewnianych z precyzyjną regulacją światła",
            provider: { "@id": `${url}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bramy garażowe",
            description:
              "Montaż bram garażowych segmentowych i rolowanych z automatyką",
            provider: { "@id": `${url}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Markizy tarasowe",
            description:
              "Instalacja markiz tarasowych i balkonowych z opcją automatycznego sterowania",
            provider: { "@id": `${url}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Moskitiery",
            description:
              "Montaż moskitier ramkowych i rolowanych do okien i drzwi",
            provider: { "@id": `${url}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plisy okienne",
            description:
              "Instalacja plisów do okien standardowych, dachowych i o nietypowych kształtach",
            provider: { "@id": `${url}/#organization` },
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
  category?: string;
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
  brand = COMPANY_DATA.name,
  category = "Osłony okienne",
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
    image: `${COMPANY_DATA.url}${image}`,
    url: `${COMPANY_DATA.url}${url}`,
    category,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    manufacturer: {
      "@id": `${COMPANY_DATA.url}/#organization`,
    },
    offers: {
      "@type": "AggregateOffer",
      availability: offers.availability,
      priceCurrency: offers.priceCurrency,
      seller: {
        "@id": `${COMPANY_DATA.url}/#organization`,
      },
      priceValidUntil: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      )
        .toISOString()
        .split("T")[0],
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

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string[];
}

export function ServiceSchema({
  name,
  description,
  url,
  image,
  areaServed = COMPANY_DATA.areaServed,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${COMPANY_DATA.url}${url}`,
    image: image ? `${COMPANY_DATA.url}${image}` : undefined,
    provider: {
      "@id": `${COMPANY_DATA.url}/#organization`,
    },
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: "Montaż osłon okiennych",
  };

  return (
    <Script
      id="service-schema"
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
  name = COMPANY_DATA.name,
  url = COMPANY_DATA.url,
  description = COMPANY_DATA.shortDescription,
}: WebsiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name,
    url,
    description,
    publisher: {
      "@id": `${url}/#organization`,
    },
    inLanguage: "pl-PL",
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

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function WebPageSchema({
  name,
  description,
  url,
  datePublished = "2024-01-01",
  dateModified = new Date().toISOString().split("T")[0],
}: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${COMPANY_DATA.url}${url}`,
    datePublished,
    dateModified,
    isPartOf: {
      "@id": `${COMPANY_DATA.url}/#website`,
    },
    publisher: {
      "@id": `${COMPANY_DATA.url}/#organization`,
    },
    inLanguage: "pl-PL",
  };

  return (
    <Script
      id="webpage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// HowTo Schema for service process explanation
interface HowToSchemaProps {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
  }>;
}

export function HowToSchema({ name, description, steps }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  return (
    <Script
      id="howto-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
