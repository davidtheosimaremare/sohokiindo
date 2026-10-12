"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        {/* Floating Rounded Box */}
        <div className="bg-white/95 backdrop-blur-md border border-[#E5E5E3] shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-2xl sm:rounded-full px-4 sm:px-6 h-[58px] sm:h-[62px] flex items-center justify-between transition-all">

          {/* ── LOGO (LEFT) ── */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="PT Hokiindo Raya"
                width={130}
                height={22}
                style={{ height: "26px", width: "auto" }}
                priority
              />
            </Link>
          </div>

          {/* ── DIVIDER ── */}
          <div className="hidden lg:block h-4 w-px bg-gray-200 shrink-0 mx-4" />

          {/* ── NAV LINKS (CENTER) ── */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-[12.5px] font-bold tracking-[0.06em] uppercase whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? "text-[#FF0800] bg-red-50/80"
                      : "text-gray-600 hover:text-[#003056] hover:bg-gray-100/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── RIGHT ACTION (KATALOG PRODUK & MOBILE TOGGLE) ── */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://shop.hokiindo.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-[12px] font-bold tracking-[0.08em] uppercase text-white transition-all duration-200 hover:opacity-90 shadow-xs"
              style={{ backgroundColor: "#FF0800" }}
            >
              Katalog Produk
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h17.4"/><path d="m15.2 6.8 5.2 5.2-5.2 5.2"/>
              </svg>
            </a>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors shrink-0 rounded-lg hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU DROPDOWN BOX ── */}
        {isOpen && (
          <div className="md:hidden mt-2 p-4 bg-white/98 backdrop-blur-lg border border-[#E5E5E3] rounded-2xl shadow-xl animate-in fade-in zoom-in-95 duration-150 pointer-events-auto">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[12px] font-bold tracking-[0.08em] uppercase transition-colors ${
                      isActive ? "text-[#FF0800] bg-red-50/80" : "text-[#003056] hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                    <svg className="w-3.5 h-3.5 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12h17.4" /><path d="m15.2 6.8 5.2 5.2-5.2 5.2" />
                    </svg>
                  </Link>
                );
              })}
              <div className="pt-2">
                <a
                  href="https://shop.hokiindo.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#FF0800] hover:bg-[#E00700] transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12h17.4"/><path d="m15.2 6.8 5.2 5.2-5.2 5.2"/>
                  </svg>
                  Katalog Produk
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
