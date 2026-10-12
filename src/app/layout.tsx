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
  icons: {
    icon: "/images/fav.png",
    apple: "/images/fav.png",
  },
  openGraph: {
    siteName: company.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="overflow-x-hidden">
      <body className={`${geist.className} bg-white text-gray-900 antialiased overflow-x-hidden`}>
        <Navbar />
        <main className="overflow-x-hidden w-full">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
