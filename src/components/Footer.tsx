import Link from "next/link";
import Image from "next/image";
import company from "../../data/company.json";

interface FooterNavLink {
  href: string;
  label: string;
  external?: boolean;
}

const footerNavLinks: FooterNavLink[] = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "https://shop.hokiindo.co.id", label: "Produk", external: true },
  { href: "/contact", label: "Kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 border-t border-[#E5E5E3] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10">
        
        {/* ── 1. TOP CTA (CLEAN CORPORATE) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-14 border-b border-[#E5E5E3] items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF0800] block mb-2">
              Konsultasi &amp; Pengadaan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[#003056] mb-3">
              Ada kebutuhan teknis?{" "}
              <span className="text-[#FF0800]">Tim kami siap membantu.</span>
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
              Diskusikan spesifikasi produk, ketersediaan stok, atau kebutuhan proyek elektrikal Anda langsung bersama tim teknis PT Hokiindo Raya.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start lg:items-center lg:justify-end gap-6 sm:gap-8">
            <div className="space-y-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Telepon &amp; WhatsApp</p>
              <a 
                href={`tel:${company.phone}`} 
                className="text-sm sm:text-base font-bold text-[#003056] hover:text-[#FF0800] transition-colors block"
              >
                {company.phone}
              </a>
              <a 
                href={`mailto:${company.email}`} 
                className="text-xs text-gray-500 hover:text-[#FF0800] transition-colors block"
              >
                {company.email}
              </a>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#003056] hover:bg-[#FF0800] rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:gap-3 shrink-0"
            >
              <span>Hubungi Kami</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── 2. MIDDLE GRID (BRAND, ALAMAT KANTOR & GUDANG, BADGE CERTIFIED, LINKS) ── */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Kolom 1: Logo Header & Alamat Kantor + Alamat Gudang + Certified Badge SVG */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/logo.png"
                alt="PT Hokiindo Raya"
                width={170}
                height={30}
                style={{ height: "30px", width: "auto" }}
                priority
              />
            </Link>

            {/* Alamat Kantor & Alamat Gudang Langsung (Tanpa Deskripsi) */}
            <div className="space-y-4 mb-6 text-xs text-gray-600">
              <div>
                <strong className="text-[#003056] font-bold block mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003056]" />
                  Alamat Kantor:
                </strong>
                <address className="not-italic text-gray-500 leading-relaxed max-w-md pl-3 border-l-2 border-slate-200">
                  {company.address}
                </address>
              </div>

              <div>
                <strong className="text-[#003056] font-bold block mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF0800]" />
                  Alamat Gudang:
                </strong>
                <address className="not-italic text-gray-500 leading-relaxed max-w-md pl-3 border-l-2 border-red-200">
                  {company.warehouseAddress}
                </address>
              </div>
            </div>

            {/* Siemens Authorized Distributor Official SVG Badge */}
            <div className="pt-1">
              <Image
                src="/images/certified.svg"
                alt="Authorized Distributor Low Voltage Products - Siemens"
                width={200}
                height={97}
                className="h-12 sm:h-14 w-auto object-contain rounded-sm"
              />
            </div>
          </div>

          {/* Kolom 2: Navigasi Halaman (Label Kontak) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <p className="text-xs font-bold uppercase tracking-wider text-[#003056] mb-4">
              Navigasi
            </p>
            <ul className="space-y-2.5">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-600 hover:text-[#FF0800] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-xs text-gray-600 hover:text-[#FF0800] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak Kami Langsung (Tanpa Katalog & Toko, Tanpa Jam Operasional Gudang) */}
          <div className="lg:col-span-4 sm:col-span-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#003056] mb-4">
              Kontak Kami
            </p>
            <div className="space-y-3.5 text-xs text-gray-600 max-w-sm">
              <div>
                <span className="text-gray-400 block mb-0.5 font-medium">Telepon &amp; WhatsApp:</span>
                <a 
                  href={`tel:${company.phone}`} 
                  className="font-bold text-[#003056] hover:text-[#FF0800] transition-colors text-sm"
                >
                  {company.phone}
                </a>
              </div>
              <div>
                <span className="text-gray-400 block mb-0.5 font-medium">Email Informasi &amp; Penawaran:</span>
                <a 
                  href={`mailto:${company.email}`} 
                  className="font-semibold text-gray-700 hover:text-[#FF0800] transition-colors"
                >
                  {company.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://shop.hokiindo.co.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-[#FF0800] text-[#003056] hover:text-white font-bold transition-all text-xs shadow-2xs group"
                >
                  <span>Cek Stok &amp; Katalog di shop.hokiindo.co.id</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── 3. COPYRIGHT & DISCLAIMER ── */}
        <div className="border-t border-[#E5E5E3] pt-6 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} PT Hokiindo Raya. Seluruh hak dilindungi.</p>
          <div className="flex items-center gap-5 text-gray-500">
            <Link href="/privacy" className="hover:text-[#003056] hover:underline transition-colors">
              Kebijakan Privasi
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#003056] hover:underline transition-colors">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>

      </div>

      {/* ── 4. RUNNING MARQUEE TAGLINE (SUSTAINABLE SOLUTIONS, BUILT ON TRUST) ── */}
      <div className="py-6 border-t border-[#E5E5E3] overflow-hidden w-full bg-white select-none">
        <div className="flex w-max items-center animate-marquee-left space-x-12 sm:space-x-16 hover:[animation-play-state:paused] cursor-default">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 sm:gap-16 shrink-0">
              <span className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-[#003056] whitespace-nowrap">
                Sustainable Solutions,{" "}
                <span className="text-[#FF0800]">Built on Trust</span>
              </span>
              <span className="text-2xl sm:text-4xl text-slate-300 font-light select-none">✦</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
