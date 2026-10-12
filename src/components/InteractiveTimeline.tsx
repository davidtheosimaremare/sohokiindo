"use client";

import { useEffect, useRef, useState } from "react";

export interface Milestone {
  year: string;
  badge?: string;
  title: string;
  description: string;
  highlight?: boolean;
  award?: string;
}

export const MILESTONES: Milestone[] = [
  {
    year: "2013",
    badge: "Awal Berdiri",
    title: "Pendirian PT Hokiindo Raya",
    description:
      "Memulai langkah sebagai distributor kebutuhan kelistrikan dengan komitmen integritas dan kejujuran spesifikasi bagi kontraktor dan panel builder.",
    highlight: false,
  },
  {
    year: "2023",
    badge: "Kemitraan Resmi Siemens",
    title: "Ditunjuk Sebagai Authorized Siemens Distributor",
    description:
      "Mendapat kepercayaan resmi dari Siemens Indonesia untuk mendistribusikan lini Low Voltage Products dan Smart Infrastructure secara nasional.",
    highlight: false,
  },
  {
    year: "2024",
    title: 'Dianugerahi Penghargaan "Best Growth Distributor" by Siemens',
    description:
      "Diakui oleh Siemens atas akselerasi penetrasi pasar komponen kelistrikan dan pertumbuhan volume distribusi tercepat di Indonesia.",
    highlight: true,
    award: "Best Growth Distributor 2024",
  },
  {
    year: "2025",
    title: 'Dianugerahi Penghargaan "Best Achievement Distributor" by Siemens',
    description:
      "Meraih penghargaan tertinggi Siemens atas performa distribusi menyeluruh, keandalan suplai proyek strategis, dan kepuasan pelanggan.",
    highlight: true,
    award: "Best Achievement Distributor 2025",
  },
  {
    year: "2026 & Seterusnya",
    badge: "Komitmen Berkelanjutan",
    title: "Solusi Kelistrikan Andal & Berkelanjutan",
    description:
      "Terus mendukung efisiensi energi dan digitalisasi panel distribusi industri Indonesia di bawah prinsip: Sustainable Solutions, Built on Trust.",
    highlight: false,
  },
];

export default function InteractiveTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Hitung progress scroll saat timeline berada di layar
      const startPoint = windowHeight * 0.75;
      const totalDistance = rect.height + windowHeight * 0.5;
      const currentPassed = startPoint - rect.top;
      
      const p = Math.max(0, Math.min(1, currentPassed / totalDistance));
      setScrollProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative select-none">
      
      {/* ── 1. JALUR VERTIKAL (DESKTOP: TENGAH | MOBILE: SISI KIRI) ── */}
      {/* Rel Dasar (Abu-Abu Lembut) */}
      <div className="absolute left-6 lg:left-1/2 top-4 bottom-8 -translate-x-1/2 w-1 bg-slate-200 rounded-full" />
      
      {/* Laser Sinar Aktif Mengalir Dramatis Seiring Scroll */}
      <div 
        className="absolute left-6 lg:left-1/2 top-4 -translate-x-1/2 w-1 bg-gradient-to-b from-[#003056] via-[#FF0800] to-red-400 rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(255,8,0,0.6)]"
        style={{ height: `${Math.max(4, scrollProgress * 100)}%` }}
      >
        {/* Titik Cahaya Terdepan Laser (Glowing Head Spark) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FF0800] shadow-[0_0_10px_#FF0800] animate-ping" />
      </div>

      {/* ── 2. DAFTAR MILESTONE PER TAHUN ── */}
      <div className="space-y-12 sm:space-y-16 relative">
        {MILESTONES.map((item, idx) => {
          const isEven = idx % 2 === 0;
          // Perkiraan apakah titik ini sudah terlewati oleh laser scroll
          const itemThreshold = (idx + 0.5) / MILESTONES.length;
          const isActive = scrollProgress >= itemThreshold;

          return (
            <div
              key={item.year}
              className={`relative flex flex-col lg:flex-row items-center ${
                isEven ? "lg:flex-row-reverse" : ""
              } group`}
            >
              {/* ── KOTAK KONTEN (CARD) MENYATU DENGAN BULLET ── */}
              <div className="w-full lg:w-[calc(50%-44px)] pl-14 sm:pl-16 lg:pl-0">
                <div
                  className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 group-hover:shadow-xl ${
                    item.highlight
                      ? "bg-gradient-to-br from-amber-50/70 via-white to-red-50/40 border-amber-300/90 shadow-md group-hover:border-[#FF0800]"
                      : "bg-white border-slate-200/90 shadow-sm group-hover:border-[#003056]"
                  }`}
                >
                  {/* NOTCH / CARET PENYATU BULLET DENGAN KOTAK (DESKTOP) */}
                  {/* Kotak di Sisi Kiri (!isEven, misal 2023): Caret di Sisi Kanan Kotak menunjuk ke Garis */}
                  {!isEven && (
                    <div
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 -right-2.5 w-5 h-5 rotate-45 transition-colors z-20 ${
                        item.highlight
                          ? "bg-[#FFFDF5] border-t-2 border-r-2 border-amber-300 group-hover:border-[#FF0800]"
                          : "bg-white border-t-2 border-r-2 border-slate-200/90 group-hover:border-[#003056]"
                      }`}
                    />
                  )}
                  {/* Kotak di Sisi Kanan (isEven, misal 2013, 2024): Caret di Sisi Kiri Kotak menunjuk ke Garis */}
                  {isEven && (
                    <div
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 -left-2.5 w-5 h-5 rotate-45 transition-colors z-20 ${
                        item.highlight
                          ? "bg-[#FFFDF5] border-b-2 border-l-2 border-amber-300 group-hover:border-[#FF0800]"
                          : "bg-white border-b-2 border-l-2 border-slate-200/90 group-hover:border-[#FF0800]"
                      }`}
                    />
                  )}
                  {/* Notch Sisi Kiri untuk Mobile (karena garis timeline di kiri) */}
                  <div
                    className={`lg:hidden absolute top-7 -left-2 w-4 h-4 rotate-45 transition-colors z-20 ${
                      item.highlight
                        ? "bg-[#FFFDF5] border-b border-l border-amber-300"
                        : "bg-white border-b border-l border-slate-200 group-hover:border-[#003056]"
                    }`}
                  />

                  {/* Header Card: Badge Kategori & Fase */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    {item.badge ? (
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          item.highlight
                            ? "bg-amber-100 text-amber-900 border border-amber-300"
                            : "bg-slate-100 text-[#003056] border border-slate-200"
                        }`}
                      >
                        {item.badge}
                      </span>
                    ) : (
                      <span />
                    )}
                    
                    {/* Tahun Mini Badge di Sudut Kanan */}
                    <span className="text-xs font-bold tracking-wider text-slate-400 group-hover:text-[#003056] transition-colors">
                      {item.year.includes("&") ? "Visi Masa Depan" : `Fase ${item.year}`}
                    </span>
                  </div>

                  {/* Angka Tahun Utama */}
                  <div className="mb-2">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#FF0800] block group-hover:scale-105 transition-transform origin-left duration-200">
                      {item.year}
                    </span>
                  </div>

                  {/* Judul Milestone */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#003056] mb-2.5 leading-snug group-hover:text-[#003056] transition-colors">
                    {item.title}
                  </h3>

                  {/* Deskripsi */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Keterangan Penghargaan Khusus */}
                  {item.award && (
                    <div className="mt-4 pt-3.5 border-t border-amber-200/80 flex items-center gap-2 text-xs font-bold text-[#003056]">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                      <span>Penghargaan Resmi Siemens Indonesia</span>
                    </div>
                  )}
                </div>
              </div>

              {/* ── 3. LENGAN KONEKTOR PENYATU BULLET DENGAN KOTAK (CONNECTOR STEM) ── */}
              {/* Desktop Connector Arm - Berhenti tepat di ujung caret, tidak menembus ke dalam */}
              <div
                className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-0.5 transition-all duration-300 z-10 ${
                  isEven
                    ? "right-[calc(50%-38px)] left-1/2 bg-gradient-to-l"
                    : "left-[calc(50%-38px)] right-1/2 bg-gradient-to-r"
                } ${
                  isActive || item.highlight
                    ? "from-[#FF0800] to-[#003056]"
                    : "from-slate-300 to-slate-200 group-hover:from-[#FF0800] group-hover:to-[#003056]"
                }`}
              />

              {/* Mobile Connector Arm */}
              <div className="lg:hidden absolute top-9 left-6 w-6 sm:w-8 h-0.5 bg-slate-300 group-hover:bg-[#FF0800] transition-colors z-10" />

              {/* ── 4. BULLET POINT (SIMPUL TIMELINE MENYATU) ── */}
              {/* Desktop Bullet Center Point */}
              <div 
                className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border-4 shadow-lg items-center justify-center z-20 transition-all duration-300 group-hover:scale-125 ${
                  isActive || item.highlight
                    ? "border-[#FF0800] shadow-[0_0_15px_rgba(255,8,0,0.5)]"
                    : "border-[#003056] group-hover:border-[#FF0800]"
                }`}
              >
                {/* Inti Bullet Node */}
                <div
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    isActive || item.highlight
                      ? "bg-[#FF0800] scale-110 shadow-[0_0_8px_#FF0800]"
                      : "bg-[#003056] group-hover:bg-[#FF0800]"
                  }`}
                />
              </div>

              {/* Mobile Bullet Left Point */}
              <div 
                className={`lg:hidden absolute left-6 -translate-x-1/2 top-7 w-9 h-9 rounded-full bg-white border-3 shadow-md flex items-center justify-center z-20 transition-all duration-300 group-hover:scale-115 ${
                  isActive || item.highlight
                    ? "border-[#FF0800] shadow-[0_0_12px_rgba(255,8,0,0.5)]"
                    : "border-[#003056] group-hover:border-[#FF0800]"
                }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    isActive || item.highlight ? "bg-[#FF0800]" : "bg-[#003056]"
                  }`}
                />
              </div>

              {/* Spacer Half untuk grid balancing di desktop */}
              <div className="hidden lg:block w-[calc(50%-44px)]" />

            </div>
          );
        })}
      </div>

    </div>
  );
}
