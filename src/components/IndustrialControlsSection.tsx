"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Eyebrow from "@/components/Eyebrow";

export interface IndustrialProduct {
  id: string;
  name: string;
  series: string;
  category: "starters" | "protection" | "safety";
  image: string;
  url: string;
}

const TABS = [
  {
    id: "starters",
    label: "Motor Starters",
    subtitle: "Kontaktor daya, hybrid starter 22.5mm & soft starters",
  },
  {
    id: "protection",
    label: "Proteksi & Relai",
    subtitle: "Overload relay, MPCB pemutus arus & relai kopling PLC",
  },
  {
    id: "safety",
    label: "Safety & Signaling",
    subtitle: "Relai keselamatan mesin SIL 3 & tombol kontrol IP69K",
  },
] as const;

type TabId = (typeof TABS)[number]["id"];

const INDUSTRIAL_PRODUCTS: IndustrialProduct[] = [
  // ── 1. MOTOR STARTERS ──
  {
    id: "contactors",
    name: "Contactors",
    series: "SIRIUS 3RT",
    category: "starters",
    image: "/images/products/industrial/contactor-3rt-v2.png",
    url: "https://shop.hokiindo.co.id/kategori/contactor",
  },
  {
    id: "electronic-motor-starter",
    name: "Electronic Motor Starter",
    series: "SIRIUS 3RM1",
    category: "starters",
    image: "/images/products/industrial/motorstarter-3rm-v2.png",
    url: "https://shop.hokiindo.co.id/kategori/motor-starter",
  },
  {
    id: "soft-starters",
    name: "Soft Starters",
    series: "SIRIUS 3RW",
    category: "starters",
    image: "/images/products/industrial/softstarter-3rw-v2.png",
    url: "https://shop.hokiindo.co.id/kategori/soft-starter",
  },

  // ── 2. PROTEKSI & RELAI ──
  {
    id: "overload-relays",
    name: "Overload Relays",
    series: "SIRIUS 3RU / 3RB",
    category: "protection",
    image: "/images/products/industrial/overload-3ru-v2.png",
    url: "https://shop.hokiindo.co.id/kategori/overload-relay",
  },
  {
    id: "motor-protection-circuit-breaker",
    name: "Motor Protection Circuit Breaker",
    series: "SIRIUS 3RV2",
    category: "protection",
    image: "/images/products/industrial/mpcb-3rv-v2.png",
    url: "https://shop.hokiindo.co.id/kategori/mpcb",
  },
  {
    id: "relays",
    name: "Relays",
    series: "SIRIUS 3RQ / 3RS",
    category: "protection",
    image: "/images/products/industrial/relay-3rq-v2.png",
    url: "https://shop.hokiindo.co.id/kategori/relay",
  },

  // ── 3. SAFETY & SIGNALING ──
  {
    id: "safety-technology",
    name: "Safety Technology",
    series: "SIRIUS 3SK",
    category: "safety",
    image: "/images/products/industrial/safety-3sk-v2.png",
    url: "https://shop.hokiindo.co.id/kategori/safety-relay",
  },
  {
    id: "pushbuttons-signaling",
    name: "Pushbuttons & Signaling",
    series: "SIRIUS ACT 3SU1",
    category: "safety",
    image: "/images/products/industrial/pushbutton-3su-v2.png",
    url: "https://shop.hokiindo.co.id/kategori/pushbutton",
  },
];

export default function IndustrialControlsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Default tab pertama: Motor Starters (tanpa Semua Produk)
  const [activeTab, setActiveTab] = useState<TabId>("starters");

  const filteredProducts = INDUSTRIAL_PRODUCTS.filter(
    (item) => item.category === activeTab
  );

  // ── INTERSECTION OBSERVER FOR DRAMATIC ENTRANCE SHOW ──
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);

    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight;
          const total = vh + rect.height;
          const current = vh - rect.top;
          const progress = Math.max(0, Math.min(1, current / total));
          setScrollProgress(progress);
        }
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Parallax calculations (-1 to +1 relative to screen center)
  const scrollFactor = (scrollProgress - 0.5) * 2;
  const gridParallaxY = hasEntered ? scrollFactor * 20 : 0;

  return (
    <section 
      ref={sectionRef}
      id="industrial-controls" 
      className="relative pt-8 sm:pt-14 pb-24 sm:pb-32 bg-[#F9F9F8] overflow-hidden"
    >
      
      {/* ── CLEAN TECHNICAL GRID BACKGROUND WITH SEAMLESS 40PX PATTERN & PARALLAX ── */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden transition-transform duration-200 ease-out will-change-transform"
        style={{ transform: `translateY(${gridParallaxY}px)` }}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.038] text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="clean-tech-grid-industrial"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#clean-tech-grid-industrial)" />
        </svg>

        {/* Soft edge radial mask */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,#000_55%,transparent_100%)] pointer-events-none" />
      </div>

      {/* ── DRAMATIC AMBIENT RED SPOTLIGHT GLOW ── */}
      <div 
        className={`absolute top-20 left-1/2 -translate-x-1/2 w-[760px] h-[380px] bg-[radial-gradient(ellipse_at_center,rgba(255,8,0,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none transition-all duration-1000 ease-out ${
          hasEntered ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── HEADER SECTION: CLEAN & TERANG WITH ENTRANCE SHOW ANIMATION ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div 
            className={`inline-flex justify-center mb-3 transition-all duration-700 ease-out ${
              hasEntered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
            }`}
          >
            <Eyebrow>Siemens Industrial Controls</Eyebrow>
          </div>

          <h2 
            className={`text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-tight transition-all duration-800 delay-100 ease-out ${
              hasEntered ? "opacity-100 translate-y-0 filter-none" : "opacity-0 translate-y-8 blur-[1.5px]"
            }`}
          >
            Industrial Controls &amp;{" "}
            <span className="text-[#FF0800]">Motor Management</span>
          </h2>

          <p 
            className={`mt-3.5 text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 ease-out ${
              hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Portofolio modular Siemens terpadu untuk kendali pensaklaran, proteksi beban lebih, penyalaan motor halus, hingga sistem keselamatan mesin industri.
          </p>
        </div>

        {/* ── LAYOUT 2 KOLOM: KIRI MENU TAB, KANAN ITEM GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* ══════════════════════════════════════════════════════════════
              KOLOM KIRI: MENU TAB (TANPA HEADER "PILIH KATEGORI", TANPA COUNT)
             ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col gap-3">

            {/* List Menu Tab Vertikal di Desktop / Horizontal Scroll di Mobile */}
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 no-scrollbar">
              {TABS.map((tab, tabIdx) => {
                const isActive = activeTab === tab.id;
                const tabDelayClass = 
                  tabIdx === 0 
                    ? "delay-300" 
                    : tabIdx === 1 
                    ? "delay-[400ms]" 
                    : "delay-[500ms]";

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative text-left p-4 sm:p-5 rounded-2xl transition-all duration-500 cursor-pointer border shrink-0 lg:shrink w-[260px] sm:w-[280px] lg:w-full select-none ${tabDelayClass} ease-out ${
                      hasEntered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    } ${
                      isActive
                        ? "bg-white text-[#111827] border-[#FF0800] ring-1.5 ring-[#FF0800] shadow-[0_6px_24px_rgba(255,8,0,0.18)]"
                        : "bg-white text-gray-700 border-[#E5E5E3] hover:border-[#FF0800] hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      {/* Neon Beacon Dot yang Menyala Merah */}
                      {isActive ? (
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0800] opacity-80" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF0800] shadow-[0_0_10px_#FF0800,0_0_18px_#FF0800]" />
                        </span>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#FF0800] transition-colors shrink-0" />
                      )}

                      <h3
                        className={`text-sm sm:text-base font-bold tracking-tight transition-colors ${
                          isActive ? "text-[#FF0800]" : "text-[#111827] group-hover:text-[#FF0800]"
                        }`}
                      >
                        {tab.label}
                      </h3>
                    </div>

                    {/* Subtitle Ringkas */}
                    <p className="text-xs leading-relaxed text-gray-500 line-clamp-1">
                      {tab.subtitle}
                    </p>

                    {/* ── HIGH-TECH DATA FLOW CONNECTOR LINE TO PRODUCT BOX (DESKTOP) ── */}
                    {isActive && (
                      <div 
                        className="hidden lg:flex absolute left-full top-1/2 -translate-y-1/2 w-10 xl:w-12 h-6 items-center pointer-events-none z-20 origin-left animate-[lineDrawIn_0.28s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                        aria-hidden="true"
                      >
                        <svg 
                          className="w-full h-full overflow-visible" 
                          viewBox="0 0 48 24" 
                          fill="none" 
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient id={`laserGrad-${tab.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#FF0800" stopOpacity="0.5" />
                              <stop offset="50%" stopColor="#FF0800" stopOpacity="1" />
                              <stop offset="100%" stopColor="#FF0800" stopOpacity="1" />
                            </linearGradient>
                          </defs>

                          {/* Glow background laser track */}
                          <line 
                            x1="0" y1="12" x2="48" y2="12" 
                            stroke="#FF0800" 
                            strokeWidth="3.5" 
                            strokeOpacity="0.2"
                          />

                          {/* Solid direct connector track connecting directly into product box */}
                          <line 
                            x1="0" y1="12" x2="48" y2="12" 
                            stroke={`url(#laserGrad-${tab.id})`} 
                            strokeWidth="2" 
                          />

                          {/* Origin node on tab right border */}
                          <circle cx="0" cy="12" r="2.5" fill="#FF0800" />

                          {/* Docking node on product box left border */}
                          <circle cx="48" cy="12" r="2.5" fill="#FF0800" />

                          {/* Traveling data photon (energy packet) */}
                          <circle r="3.5" fill="#FF0800" opacity="0.6">
                            <animateMotion path="M 0 12 L 48 12" dur="0.9s" repeatCount="indefinite" />
                          </circle>
                          <circle r="1.8" fill="#FFFFFF">
                            <animateMotion path="M 0 12 L 48 12" dur="0.9s" repeatCount="indefinite" />
                          </circle>
                        </svg>
                      </div>
                    )}

                    {/* Indicator on Mobile (Tanpa Arrow) */}
                    {isActive && (
                      <div 
                        className="lg:hidden absolute left-1/2 -translate-x-1/2 -bottom-1 flex items-center justify-center pointer-events-none z-20"
                        aria-hidden="true"
                      >
                        <div className="w-5 h-1 rounded-full bg-[#FF0800] shadow-[0_2px_6px_rgba(255,8,0,0.4)]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

          </div>

          {/* ══════════════════════════════════════════════════════════════
              KOLOM KANAN: ITEM GRID (HANYA JUDUL & GAMBAR, TANPA ARROW KANAN)
             ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-8 xl:col-span-8">
            {/* Grid Normal Item Produk dengan Data Flow Animation */}
            <div 
              key={activeTab}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {filteredProducts.map((product, idx) => {
                const cardDelayClass = 
                  idx === 0 
                    ? "delay-[350ms]" 
                    : idx === 1 
                    ? "delay-[470ms]" 
                    : "delay-[590ms]";

                return (
                  <a
                    key={product.id}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      animation: `cardFlowIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 70}ms both`
                    }}
                    className={`group relative bg-white rounded-2xl border border-[#E5E5E3] p-5 transition-all duration-500 hover:border-[#FF0800] hover:shadow-[0_12px_32px_rgba(255,8,0,0.14)] hover:-translate-y-1 flex flex-col justify-between overflow-hidden cursor-pointer ${cardDelayClass} ease-out ${
                      hasEntered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.96]"
                    }`}
                  >
                    {/* Product Image (Langsung komponen tanpa kotak dalam) */}
                    <div className="w-full h-48 sm:h-52 flex items-center justify-center mb-4 relative">
                      <Image
                        src={product.image}
                        alt={`Siemens ${product.name}`}
                        width={220}
                        height={220}
                        className="object-contain max-h-42 sm:max-h-46 w-auto drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Title Saja (Clean, Murni Judul & Gambar Saja) */}
                    <h3 className="text-base sm:text-lg font-bold text-[#111827] group-hover:text-[#FF0800] transition-colors leading-snug line-clamp-2">
                      {product.name}
                    </h3>
                  </a>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      {/* ── SEAMLESS GRADIENT BLEND TO WHITE (SECTION BAWAH NYAMBUNG) ── */}
      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

      <style>{`
        @keyframes lineDrawIn {
          0% {
            transform: translateY(-50%) scaleX(0);
            opacity: 0;
          }
          100% {
            transform: translateY(-50%) scaleX(1);
            opacity: 1;
          }
        }
        @keyframes cardFlowIn {
          0% {
            opacity: 0;
            transform: translateX(-16px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
