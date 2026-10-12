"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Eyebrow from "@/components/Eyebrow";

interface LowVoltageItem {
  id: string;
  category: "breakers" | "infrastructure";
  tabLabel: string;
  name: string;
  fullName: string;
  subCategory: string;
  series: string;
  standard: string;
  description: string;
  specs: string[];
  image: string;
  url: string;
}

const products: LowVoltageItem[] = [
  // ── KATEGORI 1: CIRCUIT BREAKERS & PROTEKSI ──
  {
    id: "acb",
    category: "breakers",
    tabLabel: "ACB (Air Circuit Breaker)",
    name: "ACB",
    fullName: "Air Circuit Breaker",
    subCategory: "Main Distribution Breaker",
    series: "SENTRON 3WA / 3WL",
    standard: "IEC 60947-2",
    description: "Pemutus arus utama berkapasitas besar untuk panel distribusi gardu trafo dan LVMDP industri. Dilengkapi trip unit elektronik cerdas untuk proteksi selektif tingkat tinggi.",
    specs: ["Kapasitas s/d 6300A", "Icu hingga 150 kA", "Proteksi LVMDP & Gardu"],
    image: "/images/products/acb-3wa.png",
    url: "https://shop.hokiindo.co.id/kategori/acb",
  },
  {
    id: "mccb",
    category: "breakers",
    tabLabel: "MCCB (Molded Case)",
    name: "MCCB",
    fullName: "Molded Case Circuit Breaker",
    subCategory: "Feeder & Motor Protection",
    series: "SENTRON 3VA",
    standard: "IEC 60947-2",
    description: "Proteksi beban lebih dan hubung singkat andal untuk kabel feeder distribusi daya, sub-panel, serta sirkuit motor industri dengan respon pemutusan ultra-cepat.",
    specs: ["Kapasitas 16A - 1600A", "Icu hingga 110 kA", "Thermal-Magnetic / ETU"],
    image: "/images/products/mccb-3va.png",
    url: "https://shop.hokiindo.co.id/kategori/mccb",
  },
  {
    id: "mcb",
    category: "breakers",
    tabLabel: "MCB (Miniature)",
    name: "MCB",
    fullName: "Miniature Circuit Breaker",
    subCategory: "Final Sub-Circuit Protection",
    series: "SENTRON 5SL / 5SY",
    standard: "IEC 60898-1 / 60947-2",
    description: "Pengaman sirkuit cabang final, instalasi gedung komersial, beban penerangan, dan stop kontak. Menjamin keandalan trip tinggi serta kemudahan pemasangan DIN-rail.",
    specs: ["Kapasitas 0.5A - 63A", "Breaking Capacity 6kA - 10kA", "Pemasangan DIN-Rail"],
    image: "/images/products/mcb-5sl.png",
    url: "https://shop.hokiindo.co.id/kategori/mcb",
  },
  {
    id: "rcbo",
    category: "breakers",
    tabLabel: "RCBO & RCCB (Earth Leakage)",
    name: "RCBO/RCCB",
    fullName: "Residual Current Protective Devices",
    subCategory: "Personal & Fire Protection",
    series: "SENTRON 5SV",
    standard: "IEC 61009-1 / 61008-1",
    description: "Proteksi keselamatan terhadap arus bocor ke tanah (earth leakage) dan bahaya sengatan fatal manusia, sekaligus mencegah kebakaran akibat degradasi insulasi kabel.",
    specs: ["Sensitivitas 30mA - 300mA", "Kombinasi Overload & Leakage", "Standar Keselamatan Gedung"],
    image: "/images/products/rcbo-5sv1.png",
    url: "https://shop.hokiindo.co.id/kategori/rcbo",
  },
  {
    id: "spd",
    category: "breakers",
    tabLabel: "Surge Protection (SPD)",
    name: "SPD",
    fullName: "Surge Protection Device",
    subCategory: "Transient & Lightning Protection",
    series: "SENTRON 5SD7",
    standard: "IEC 61643-11",
    description: "Perlindungan handal terhadap lonjakan tegangan transien dan petir untuk mengamankan perangkat otomasi serta sistem elektronik bernilai tinggi.",
    specs: ["Tipe 1, Tipe 2, & Tipe 3", "Discharge Current s/d 40kA", "Modul Cartridge Pluggable"],
    image: "/images/products/spd-5sd-t2.png",
    url: "https://shop.hokiindo.co.id/kategori/spd",
  },

  // ── KATEGORI 2: SWITCHING, MONITORING & PERANGKAT INSTALASI ──
  {
    id: "switch-disconnector",
    category: "infrastructure",
    tabLabel: "Switch Disconnectors",
    name: "Switch Disconnector",
    fullName: "Switch Disconnector / LBS",
    subCategory: "Load Break & Isolation Switch",
    series: "SENTRON 3KD / 3LD",
    standard: "IEC 60947-3",
    description: "Saklar pemutus beban manual dan saklar isolasi pemeliharaan. Menjamin pemutusan sirkuit yang aman secara mekanis dengan indikator kontak terverifikasi bagi teknisi.",
    specs: ["Arus Beban s/d 1600A", "Isolasi Terlihat (Positive Off)", "Aplikasi AC & DC Industri"],
    image: "/images/products/switch-disconnector-3kd.png",
    url: "https://shop.hokiindo.co.id/kategori/switch-disconnector",
  },
  {
    id: "fuse",
    category: "infrastructure",
    tabLabel: "Fuses & Fuse Systems",
    name: "Fuses",
    fullName: "Low-Voltage HRC Fuse Systems",
    subCategory: "High Breaking Capacity Protection",
    series: "SENTRON 3NA / 3NE",
    standard: "IEC 60269",
    description: "Sistem sekring pelebur industri (LV HRC / NH blade) berkemampuan pemutusan arus gangguan ekstrim secara instan untuk proteksi kabel feeder dan komponen semikonduktor.",
    specs: ["Kapasitas Breaking s/d 120kA", "Respon Pemutusan Ultra Cepat", "Sistem Ukuran NH000 - NH4"],
    image: "/images/products/fuse-3na-nh.png",
    url: "https://shop.hokiindo.co.id/kategori/fuse",
  },
  {
    id: "power-meter",
    category: "infrastructure",
    tabLabel: "Power Monitoring Devices",
    name: "Power Meter",
    fullName: "SENTRON PAC Measuring Devices",
    subCategory: "Energy Management & Power Quality",
    series: "SENTRON PAC3120 / PAC3200",
    standard: "IEC 61557-12 / IEC 62053-22",
    description: "Digital power meter presisi tinggi untuk akuisisi parameter kelistrikan multi-dimensi (V, I, kW, kVA, Cos Phi, THD) dan integrasi sistem manajemen energi berbasis IoT / Modbus.",
    specs: ["Akurasi Pengukuran Kelas 0.5", "Deteksi >50 Parameter Listrik", "Koneksi Modbus RTU / TCP"],
    image: "/images/products/pac-meter.png",
    url: "https://shop.hokiindo.co.id/kategori/power-meter",
  },
  {
    id: "installation-devices",
    category: "infrastructure",
    tabLabel: "Installation Devices",
    name: "Installation Devices",
    fullName: "Modular DIN-Rail Installation Devices",
    subCategory: "Building & Automation Switching",
    series: "SENTRON 5TT / 5TE",
    standard: "IEC 60947-4-1 / IEC 61095",
    description: "Perangkat kontrol modular untuk pemasangan rel DIN panel distribusi gedung dan pabrik: kontaktor modular bebas bising (hum-free), saklar waktu, dan soket modular.",
    specs: ["Kontaktor Modular 20A - 63A", "Operasi Hening Bebas Getar", "Pemasangan Standar DIN 35mm"],
    image: "/images/products/installation-5tt.png",
    url: "https://shop.hokiindo.co.id/kategori/installation-devices",
  },
];

// 1. Guard Shield Path (Khusus Breakers & Proteksi)
const shieldPath =
  "M 32 10 L 358 10 C 374 10 382 18 382 34 L 382 280 C 382 370 250 430 195 438 C 140 430 8 370 8 280 L 8 34 C 8 18 16 10 32 10 Z";

// 2. Rectangle Radius Kotak (Khusus Switch & Monitor / Infrastructure)
const rectRadiusPath =
  "M 38 10 L 352 10 C 368 10 382 24 382 40 L 382 408 C 382 424 368 438 352 438 L 38 438 C 22 438 8 424 8 408 L 8 40 C 8 24 22 10 38 10 Z";

export default function SiemensProductSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0.5);
  const [openCycle, setOpenCycle] = useState(0);

  const [activeCategory, setActiveCategory] = useState<"breakers" | "infrastructure">("breakers");
  const [activeId, setActiveId] = useState<string>("acb");

  const filteredProducts = products.filter((p) => p.category === activeCategory);
  const activeItem = filteredProducts.find((b) => b.id === activeId) || filteredProducts[0];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Trigger dramatic opening animation sequence when entering viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          setOpenCycle((c) => (c === 0 ? 1 : c));
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);

    // Continuous butter-smooth 60/120fps scroll tracking for interactive parallax
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

  const handleCategoryChange = (cat: "breakers" | "infrastructure") => {
    setActiveCategory(cat);
    const firstItem = products.find((p) => p.category === cat);
    if (firstItem) {
      setActiveId(firstItem.id);
    }
    setOpenCycle((c) => c + 1);
  };

  const handleItemSelect = (id: string) => {
    setActiveId(id);
    setOpenCycle((c) => c + 1);
  };

  const activeCardPath = activeCategory === "breakers" ? shieldPath : rectRadiusPath;

  // Parallax calculations (-1 to +1 relative to screen center)
  const scrollFactor = (scrollProgress - 0.5) * 2;
  const productParallaxY = hasEntered ? scrollFactor * -16 : 0;
  const gridParallaxY = hasEntered ? scrollFactor * 24 : 0;
  const cardTiltX = hasEntered ? scrollFactor * 2 : 0;

  return (
    <section
      ref={sectionRef}
      className="relative pt-16 sm:pt-24 pb-8 sm:pb-12 bg-[#F9F9F8] overflow-hidden"
    >
      {/* ── CLEAN TECHNICAL GRID BACKGROUND WITH DYNAMIC SCROLL PARALLAX ── */}
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
              id="clean-tech-grid"
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
          <rect width="100%" height="100%" fill="url(#clean-tech-grid)" />
        </svg>

        {/* Soft edge fade mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F9F8] via-transparent to-[#F9F9F8] opacity-75 pointer-events-none" />
      </div>

      {/* ── DRAMATIC AMBIENT SPOTLIGHT GLOW (BEHIND CARD) ── */}
      <div
        className={`absolute right-[-8%] top-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full pointer-events-none transition-all duration-1000 ease-out ${
          hasEntered ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        style={{
          background: "radial-gradient(circle, rgba(255,8,0,0.048) 0%, rgba(0,48,86,0.035) 42%, transparent 70%)",
          transform: `translateY(calc(-50% + ${productParallaxY * 1.5}px))`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── SPLIT TAB LAYOUT (SESUAI GAMBAR REFERENSI USER) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-stretch">
          
          {/* ══════════════════════════════════════════════════════════════
              KOLOM KIRI: TITLE & DESKRIPSI CLEAN (SLOP DIHAPUS)
             ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between text-left lg:border-r lg:border-dashed lg:border-gray-300 lg:pr-8 xl:pr-10">
            <div>
              {/* Eyebrow / Mini indicator with dramatic fade */}
              <div
                className={`transition-all duration-700 ease-out ${
                  hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Eyebrow>Industrial Power Distribution</Eyebrow>
              </div>

              {/* Judul Utama Rata Kiri */}
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111827] leading-[1.18] mb-4 sm:mb-5 transition-all duration-700 delay-100 ease-out ${
                  hasEntered ? "opacity-100 translate-y-0 filter-none" : "opacity-0 translate-y-6 blur-[1.5px]"
                }`}
              >
                Rangkaian Low Voltage &amp;{" "}
                <span className="text-[#FF0800]">Proteksi Daya</span>
              </h2>

              {/* Deskripsi Clean & Ringkas */}
              <p
                className={`text-sm sm:text-base text-gray-600 leading-relaxed font-normal transition-all duration-700 delay-200 ease-out ${
                  hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                Portofolio lengkap komponen distribusi tegangan rendah original Siemens untuk menjamin keselamatan operasional, kontinuitas daya, dan efisiensi sistem kelistrikan Anda.
              </p>
            </div>

            {/* Tombol Aksi di Kiri Bawah (Seperti Referensi 'Bekijk ons aanbod') */}
            <div
              className={`pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-200/70 lg:border-t-0 transition-all duration-700 delay-300 ease-out ${
                hasEntered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
              }`}
            >
              <a
                href="https://shop.hokiindo.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-[0.08em] text-white bg-[#FF0800] hover:bg-[#E00700] transition-all duration-200 hover:gap-4 shadow-sm hover:shadow-md hover:shadow-red-500/20 active:scale-95 cursor-pointer group"
              >
                <span>Cek Katalog Lengkapnya</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              KOLOM KANAN: CATEGORY TAB BAR (LINE ONLY) + TAB LIST + CARD
             ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-between">
            
            {/* ── CATEGORY TAB BAR: LINE SAJA, TANPA BOX, TANPA ICON, TANPA COUNT ── */}
            <div
              className={`flex items-center gap-6 sm:gap-8 border-b border-gray-200 w-full mb-6 sm:mb-8 transition-all duration-700 delay-150 ease-out ${
                hasEntered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <button
                type="button"
                onClick={() => handleCategoryChange("breakers")}
                className={`pb-3 text-sm sm:text-base font-bold transition-colors duration-200 cursor-pointer border-b-2 -mb-[1px] ${
                  activeCategory === "breakers"
                    ? "text-[#111827] border-[#FF0800]"
                    : "text-gray-400 hover:text-gray-700 border-transparent"
                }`}
              >
                Breakers &amp; Proteksi
              </button>

              <button
                type="button"
                onClick={() => handleCategoryChange("infrastructure")}
                className={`pb-3 text-sm sm:text-base font-bold transition-colors duration-200 cursor-pointer border-b-2 -mb-[1px] ${
                  activeCategory === "infrastructure"
                    ? "text-[#111827] border-[#FF0800]"
                    : "text-gray-400 hover:text-gray-700 border-transparent"
                }`}
              >
                Switching &amp; Monitoring
              </button>
            </div>

            {/* ── GRID 2 SUB-KOLOM: TAB LIST + CARD ── */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* ── SUB-KOLOM 1: VERTICAL TAB LIST ── */}
              <div className="md:col-span-6 lg:col-span-6 flex flex-row md:flex-col gap-2 md:gap-3.5 overflow-x-auto md:overflow-visible pb-2 md:pb-0 text-left no-scrollbar">
                {filteredProducts.map((item, index) => {
                  const isActive = item.id === activeId;
                  const staggerDelay = 200 + index * 65;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemSelect(item.id)}
                      type="button"
                      style={{
                        transitionDelay: hasEntered ? `${staggerDelay}ms` : "0ms",
                      }}
                      className={`text-left transition-all duration-500 ease-out py-2 md:py-2.5 px-3.5 md:px-0 rounded-full md:rounded-none shrink-0 md:shrink cursor-pointer group flex items-center gap-2.5 border md:border-0 ${
                        hasEntered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                      } ${
                        isActive
                          ? "bg-white border-[#FF0800] text-[#111827] shadow-xs md:bg-transparent"
                          : "bg-white/60 border-gray-200 text-gray-400 hover:text-gray-700 md:bg-transparent"
                      }`}
                    >
                      {/* Bullet Indicator with radar pulse on active */}
                      <span className="relative flex items-center justify-center shrink-0">
                        {isActive && hasEntered && (
                          <span className="absolute w-3.5 h-3.5 rounded-full bg-[#FF0800]/30 animate-pulse-radar pointer-events-none" />
                        )}
                        <span
                          className={`inline-block transition-all duration-200 shrink-0 ${
                            isActive
                              ? "w-2.5 h-2.5 rounded-full bg-[#FF0800] scale-100"
                              : "w-2 h-2 rounded-full bg-transparent md:group-hover:bg-gray-300 scale-75"
                          }`}
                        />
                      </span>

                      {/* Tab Text */}
                      <span
                        className={`tracking-tight transition-all duration-200 ${
                          isActive
                            ? "text-sm sm:text-base md:text-lg lg:text-[19px] font-extrabold text-[#111827]"
                            : "text-sm sm:text-base md:text-base lg:text-[17px] font-medium text-gray-500 group-hover:text-gray-900"
                        }`}
                      >
                        <span className="md:hidden">{item.name}</span>
                        <span className="hidden md:inline">{item.tabLabel}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* ── SUB-KOLOM 2: CARD BOX (GUARD UNTUK BREAKER, RECTANGLE RADIUS UNTUK SWITCH & MONITOR) ── */}
              <div
                className={`md:col-span-6 lg:col-span-6 flex justify-center md:justify-end items-center pr-1 sm:pr-3 transition-all duration-1000 delay-300 ease-out will-change-transform ${
                  hasEntered ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.92] translate-y-8"
                }`}
                style={{
                  perspective: 1200,
                  transform: hasEntered ? `translateY(${productParallaxY * 0.35}px) rotateX(${cardTiltX}deg)` : undefined,
                }}
              >
                <a
                  href={activeItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Lihat katalog ${activeItem.fullName} di Toko Hokiindo`}
                  className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[395px] h-[430px] sm:h-[460px] flex flex-col justify-between items-center p-6 sm:p-7 group cursor-pointer block"
                >
                  {/* SVG Card Container (Shield untuk Breaker, Rectangle Radius untuk Switch/Monitor) */}
                  <svg
                    viewBox="0 0 390 450"
                    className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                    fill="none"
                  >
                    <defs>
                      {/* Soft traveling accent gradient for single-shot animation */}
                      <linearGradient id="soft-trace-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF0800" stopOpacity="0" />
                        <stop offset="35%" stopColor="#FF0800" stopOpacity="0.7" />
                        <stop offset="50%" stopColor="#FFC1BD" stopOpacity="0.95" />
                        <stop offset="65%" stopColor="#FF4D4F" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#FF0800" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* 1. Base Normal Container (Normal Line) */}
                    <path
                      key={`base-${activeCategory}`}
                      d={activeCardPath}
                      fill="#FFFFFF"
                      stroke="#E5E5E3"
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                      className="drop-shadow-[0_12px_28px_rgba(0,48,86,0.06)] transition-all duration-300 group-hover:stroke-[#FF0800]/40"
                    />

                    {/* 2. Soft Glow Flash (Gerakan Sekali Saja lalu Hilang Menjadi Normal Line) */}
                    <path
                      key={`glow-${activeItem.id}-${openCycle}`}
                      d={activeCardPath}
                      fill="none"
                      stroke="#FF0800"
                      strokeWidth="3"
                      className="filter blur-[3px] animate-guard-glow-once"
                    />

                    {/* 3. Soft Trace Energy Line (Gerakan Sekali Saja 1 Detik lalu Hilang) */}
                    <path
                      key={`trace-${activeItem.id}-${openCycle}`}
                      d={activeCardPath}
                      fill="none"
                      stroke="url(#soft-trace-grad)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      pathLength="1000"
                      strokeDasharray="220 780"
                      vectorEffect="non-scaling-stroke"
                      className="animate-guard-trace-once"
                    />
                  </svg>

                  {/* Produk Siemens di Tengah & Ukuran Pas Presisi dengan Parallax Vertikal & Levitasi Halus */}
                  <div
                    className={`relative z-20 my-auto py-2 w-full flex items-center justify-center transition-all duration-700 delay-300 ease-out will-change-transform ${
                      hasEntered ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                    style={{
                      transform: hasEntered ? `translateY(${productParallaxY}px)` : undefined,
                    }}
                  >
                    <div
                      key={activeItem.id}
                      className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 animate-fadeIn animate-float-subtle"
                    >
                      <Image
                        src={activeItem.image}
                        alt={activeItem.fullName}
                        width={380}
                        height={380}
                        priority
                        className="h-60 sm:h-72 md:h-80 w-auto max-w-[88%] object-contain pointer-events-none drop-shadow-[0_16px_32px_rgba(0,48,86,0.14)]"
                      />
                    </div>
                  </div>

                  {/* Bottom: Circle Arrow Icon Button di Bagian Bawah Kanan Card dengan Spring Pop Entrance */}
                  <div
                    className={`absolute z-20 transition-all duration-700 delay-500 ease-out ${
                      hasEntered ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-45"
                    } ${
                      activeCategory === "infrastructure"
                        ? "-right-1 bottom-3 sm:-right-2 sm:bottom-3.5"
                        : "bottom-6 right-6 sm:bottom-7 sm:right-7"
                    }`}
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-[#F9F9F8] text-[#111827] group-hover:border-[#FF0800] group-hover:bg-[#FF0800] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs group-hover:scale-105">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
