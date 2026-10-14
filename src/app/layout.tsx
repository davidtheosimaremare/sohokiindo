import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import company from "../../data/company.json";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hokiindo.co.id"),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "Distributor Siemens Indonesia",
    "Distributor Resmi Siemens",
    "Siemens Low Voltage Indonesia",
    "Siemens SIRIUS Contactor",
    "SENTRON Circuit Breaker",
    "ACB Siemens 3WA",
    "MCCB Siemens 3VA",
    "MCB Siemens 5SL",
    "RCBO Siemens 5SV1",
    "Busbar Chassis Tangerang",
    "Mobile Lighting Tower",
    "Toko Online Siemens",
    "shop hokiindo",
    "PT Hokiindo Raya",
  ],
  authors: [{ name: "PT Hokiindo Raya", url: "https://hokiindo.co.id" }],
  creator: "PT Hokiindo Raya",
  publisher: "PT Hokiindo Raya",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hokiindo.co.id",
  },
  icons: {
    icon: "/images/fav.png",
    apple: "/images/fav.png",
  },
  openGraph: {
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
    url: "https://hokiindo.co.id",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 600,
        height: 120,
        alt: "PT Hokiindo Raya — Distributor Resmi Siemens Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
    images: ["/images/logo.png"],
  },
  verification: {
    google: "ddm7O-DuVrx1E1oJ-s9MkhNbvkOC3vTSOPmxdBo6Tnk",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  legalName: company.name,
  url: "https://hokiindo.co.id",
  logo: "https://hokiindo.co.id/images/logo.png",
  description: company.description,
  telephone: company.phone,
  email: company.email,
  sameAs: [
    "https://shop.hokiindo.co.id",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: "Tangerang Selatan",
    addressRegion: "Banten",
    postalCode: "15321",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phone,
    contactType: "sales",
    areaServed: "ID",
    availableLanguage: ["Indonesian", "English"],
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.name,
  url: "https://hokiindo.co.id",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://shop.hokiindo.co.id/pencarian?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className={`${geist.className} bg-white text-gray-900 antialiased overflow-x-hidden`}>
        <Navbar />
        <main className="overflow-x-hidden w-full">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
