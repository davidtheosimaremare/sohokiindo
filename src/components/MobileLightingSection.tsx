"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

type MastMode = "extended" | "compact";

export default function MobileLightingSection() {
  const [mastMode, setMastMode] = useState<MastMode>("extended");
  const pointsRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = pointsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="mobile-lighting"
      className="relative py-16 sm:py-24 [clip-path:inset(0)] select-none"
    >
      {/* ══════════════════════════════════════════════════════════════════════
          EFEK TIRAI PARALLAX (FIXED WINDOW):
          Latar tambang malam terkunci (fixed) di viewport, terpotong rapi
          oleh clip-path section. Saat scroll, section putih bergerak seperti
          tirai yang membuka dan menutup pemandangan malam tambang TL-500.
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <Image
          src="/images/bg-mining-night.jpg"
          alt="Tambang malam diterangi lampu sorot TL-500"
          fill
          priority
          quality={85}
          className="object-cover object-center"
        />

        {/* Overlay gelap — Navy gradient supaya teks & lampu kontras tajam */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,10,25,0.85)_0%,rgba(0,18,40,0.75)_50%,rgba(0,10,25,0.92)_100%)]" />

        {/* Ambient spotlight flare TL-500 menembus kegelapan tambang */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(255, 140, 40, 0.16) 0%, rgba(255, 90, 0, 0.05) 45%, transparent 75%)",
          }}
        />

        {/* Overlay sisi kiri & kanan agar card feature terbaca */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,10,30,0.55)_0%,transparent_30%,transparent_70%,rgba(0,10,30,0.55)_100%)]" />

        {/* Halus grain texture untuk kedalaman cinematic */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:url('data:image/svg+xml,%3Csvg viewBox%3D%220 0 200 200%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cfilter id%3D%22noise%22%3E%3CfeTurbulence type%3D%22fractalNoise%22 baseFrequency%3D%220.65%22 numOctaves%3D%223%22 stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect width%3D%22100%25%22 height%3D%22100%25%22 filter%3D%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          KONTEN
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF0800]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-300/80">
              Penerangan Tangguh • Pertambangan &amp; Lokasi Industri
            </span>
          </div>

          {/* Judul */}
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-3 text-white">
            Lampu Sorot Portable{" "}
            <span className="text-[#FF6040]">TL-500</span>
          </h2>

          {/* Deskripsi */}
          <p className="text-sm sm:text-[15px] text-white/70 leading-relaxed max-w-2xl mx-auto mb-4">
            Solusi penerangan mandiri bertenaga baterai lithium, output 62.000 Lumens.
            Bebas genset, bebas solar — siap operasi di pit tambang, konstruksi malam,
            dan area darurat lapangan.
          </p>

          {/* ── TOMBOL TOGGLE 5,3M / 1,2M ── */}
          <div className="mt-6 flex items-center justify-center">
            <div className="relative inline-flex items-center p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              {/* Sliding pill */}
              <div
                className={`absolute top-1 bottom-1 rounded-full bg-white shadow-sm transition-all duration-300 ease-out ${
                  mastMode === "extended"
                    ? "left-1 right-[calc(50%+2px)]"
                    : "left-[calc(50%+2px)] right-1"
                }`}
              />
              <button
                type="button"
                onClick={() => setMastMode("extended")}
                className={`relative z-10 px-5 py-2 rounded-full text-xs font-bold transition-colors duration-300 cursor-pointer flex items-center gap-2 ${
                  mastMode === "extended" ? "text-[#003056]" : "text-white/70 hover:text-white"
                }`}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M5 21h14" />
                </svg>
                <span>5,3 M Operasi</span>
              </button>
              <button
                type="button"
                onClick={() => setMastMode("compact")}
                className={`relative z-10 px-5 py-2 rounded-full text-xs font-bold transition-colors duration-300 cursor-pointer flex items-center gap-2 ${
                  mastMode === "compact" ? "text-[#003056]" : "text-white/70 hover:text-white"
                }`}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7-7 7 7M5 19l7-7 7 7" />
                </svg>
                <span>1,2 M Transport</span>
              </button>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            GRID: 3 FITUR KIRI + PRODUCT CENTER STAGE + 3 FITUR KANAN
           ══════════════════════════════════════════════════════════════════════ */}
        <div ref={pointsRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* ── KOLOM KIRI: Lumens, IP65, 0 Diesel (Masuk dari Kiri) ── */}
          <div className="lg:col-span-3 flex flex-col gap-4 order-2 lg:order-1">

            {/* 1. 62.000 Lumens */}
            <div 
              style={{ transitionDelay: "100ms" }}
              className={`bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all duration-700 ease-out group ${
                hasEntered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 sm:-translate-x-14 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:bg-amber-400 group-hover:text-white transition-colors shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/40 block font-bold">
                    Super Bright LED
                  </span>
                  <h3 className="text-sm font-bold text-white">62.000 Lumens</h3>
                </div>
              </div>
              <p className="text-xs text-white/55 leading-relaxed">
                Cahaya masif 360° menerangi ribuan m² area kerja malam tanpa titik buta — setara 6 lampu sorot genset.
              </p>
            </div>

            {/* 2. IP65 Weatherproof */}
            <div 
              style={{ transitionDelay: "250ms" }}
              className={`bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all duration-700 ease-out group ${
                hasEntered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 sm:-translate-x-14 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-sky-400/20 border border-sky-400/30 flex items-center justify-center text-sky-300 group-hover:bg-sky-500 group-hover:text-white transition-colors shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/40 block font-bold">
                    Heavy-Duty Seal
                  </span>
                  <h3 className="text-sm font-bold text-white">IP65 Weatherproof</h3>
                </div>
              </div>
              <p className="text-xs text-white/55 leading-relaxed">
                Tahan hujan lebat, lumpur tambang, debu pekat, dan getaran keras peralatan konstruksi.
              </p>
            </div>

            {/* 3. 0 Diesel Cost */}
            <div 
              style={{ transitionDelay: "400ms" }}
              className={`bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all duration-700 ease-out group ${
                hasEntered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 sm:-translate-x-14 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-red-400/20 border border-red-400/30 flex items-center justify-center text-red-400 group-hover:bg-[#FF0800] group-hover:text-white transition-colors shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/40 block font-bold">
                    Hemat Operasional
                  </span>
                  <h3 className="text-sm font-bold text-white">0 Diesel Cost</h3>
                </div>
              </div>
              <p className="text-xs text-white/55 leading-relaxed">
                100% baterai lithium mandiri. Tanpa beli solar, tanpa biaya genset, bebas risiko tumpahan BBM.
              </p>
            </div>
          </div>

          {/* ── KOLOM TENGAH: PRODUCT HERO ── */}
          <div 
            style={{ transitionDelay: "200ms" }}
            className={`lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 transition-all duration-800 ease-out ${
              hasEntered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-full max-w-md h-[400px] sm:h-[460px] lg:h-[500px] flex items-center justify-center">
              {/* Glow effect bawah produk */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-16 bg-amber-300/20 blur-2xl rounded-full pointer-events-none" />

              {/* 5.3M Extended */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
                  mastMode === "extended"
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="relative w-full h-full aspect-[706/1708] max-h-[390px] sm:max-h-[450px] lg:max-h-[490px]">
                  <Image
                    src="/images/products/lighting/tl500-extended.webp"
                    alt="Lampu TL-500 Tiang 5,3M Operasi Lapangan"
                    fill
                    sizes="(max-width: 768px) 320px, 460px"
                    priority
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* 1.2M Compact */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
                  mastMode === "compact"
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
                }`}
              >
                <div className="relative w-full h-full aspect-[1187/2075] max-h-[300px] sm:max-h-[350px] lg:max-h-[380px]">
                  <Image
                    src="/images/products/lighting/tl500-unit.webp"
                    alt="Lampu TL-500 Mode Transport 1,2M Berat 50 Kg"
                    fill
                    sizes="(max-width: 768px) 320px, 460px"
                    priority
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── KOLOM KANAN: 0 Emission, 0 Maintenance, 50Kg (Masuk dari Kanan) ── */}
          <div className="lg:col-span-3 flex flex-col gap-4 order-3">

            {/* 4. 0 Carbon Emission */}
            <div 
              style={{ transitionDelay: "100ms" }}
              className={`bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all duration-700 ease-out group ${
                hasEntered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 sm:translate-x-14 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/40 block font-bold">
                    Eco-Friendly
                  </span>
                  <h3 className="text-sm font-bold text-white">0 Carbon Emission</h3>
                </div>
              </div>
              <p className="text-xs text-white/55 leading-relaxed">
                Bebas polusi gas buang, aman untuk terowongan &amp; area terbatas. Mendukung target ESG &amp; Net Zero.
              </p>
            </div>

            {/* 5. 0 Maintenance Cost */}
            <div 
              style={{ transitionDelay: "250ms" }}
              className={`bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all duration-700 ease-out group ${
                hasEntered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 sm:translate-x-14 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-purple-400/20 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/40 block font-bold">
                    Tanpa Servis Rutin
                  </span>
                  <h3 className="text-sm font-bold text-white">0 Maintenance Cost</h3>
                </div>
              </div>
              <p className="text-xs text-white/55 leading-relaxed">
                Solid-state tanpa motor bakar: tidak ada ganti oli, tanpa filter, bebas kendala mekanis genset.
              </p>
            </div>

            {/* 6. 50 Kg — Portabilitas Utama */}
            <div 
              style={{ transitionDelay: "400ms" }}
              className={`bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-emerald-400/30 hover:bg-white/15 transition-all duration-700 ease-out group ${
                hasEntered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 sm:translate-x-14 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-300 block font-bold">
                    Ultra Portabel
                  </span>
                  <h3 className="text-sm font-bold text-white">Cukup 50 Kg</h3>
                </div>
              </div>
              <p className="text-xs text-white/55 leading-relaxed">
                Dimobilisasi 1 operator. Roda heavy-duty &amp; kaki lipat — muat masuk pickup atau SUV, siap pindah lokasi kapan saja.
              </p>
            </div>
          </div>
        </div>

        {/* ── CTA BUTTON ── */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/628111086180?text=Halo%20PT%20Hokiindo%20Raya,%20saya%20ingin%20berkonsultasi%20mengenai%20Lampu%20Sorot%20Portable%20TL-500%20(5,3M%20/%2050Kg)%20untuk%20kebutuhan%20proyek%20kami."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#003056]/80 backdrop-blur-md border border-white/20 hover:bg-[#003056] transition-all shadow-lg hover:shadow-xl cursor-pointer"
          >
            <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Konsultasi &amp; Penawaran TL-500</span>
          </a>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            PHOTO GALLERY — 3 COLUMNS WIDE PROMINENT 4:5 MARQUEE
           ══════════════════════════════════════════════════════════════════════ */}
        <div className="mt-14 -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Section Header / Label */}
          <div className="flex items-center justify-center gap-3 mb-6 px-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/50 px-3">
              Galeri Produk &amp; Aplikasi Lapangan Mobile Lighting
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          {/* Single Row 4-Column Width Infinite Marquee */}
          <div
            className="relative overflow-hidden py-2"
            style={{
              maskImage: "linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%)",
            }}
          >
            <div
              className="flex gap-4 sm:gap-5 w-max"
              style={{
                animation: "lamp-marquee-4col 32s linear infinite",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
              onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
            >
              {/* 3 sets of 6 images for seamless infinite scroll */}
              {[0, 1, 2].flatMap(() => [
                { src: "/images/lamp/1.png", alt: "Aplikasi Lapangan TL-500 - Sempit & Terang" },
                { src: "/images/lamp/2.png", alt: "Efisiensi Biaya Solar TL-500" },
                { src: "/images/lamp/3.png", alt: "Mobilitas Sat Set TL-500 Lapangan" },
                { src: "/images/lamp/4.png", alt: "Lampu PT-200 Solusi Maintenance Panel Listrik" },
                { src: "/images/lamp/5.jpg", alt: "Kesiapan Operasi Titik Kritis Lapangan" },
                { src: "/images/lamp/6.png", alt: "Solusi Penerangan Mobile Lapangan Industri" },
              ]).map((img, i) => (
                <div
                  key={i}
                  className="relative shrink-0 w-[230px] sm:w-[260px] md:w-[280px] lg:w-[295px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 shadow-xl group cursor-pointer bg-slate-900/60 transition-transform duration-500 hover:-translate-y-1.5"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 230px, (max-width: 768px) 260px, (max-width: 1024px) 280px, 295px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle glass reflection overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,transparent_50%)] pointer-events-none" />
                  {/* Bottom subtle gradient for contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            PILIHAN LAINNYA: PT-200 • PS-200 • PL-300
           ══════════════════════════════════════════════════════════════════════ */}
        <div className="mt-12">
          {/* Section Divider */}
          <div className="flex items-center justify-center gap-3 mb-8 px-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/50 px-3 font-semibold">
              Pilihan Lainnya
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          {/* Cards Grid: PT-200, PS-200, PL-300 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {/* ── CARD 1: PT-200 ── */}
            <div className="flex flex-col bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-md border border-white/10 hover:border-amber-400/40 rounded-2xl p-5 transition-all duration-300 group">
              {/* Product Image */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white mb-4">
                <Image
                  src="/images/products/lighting/pt200.jpg"
                  alt="PT-200"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-sm border border-amber-400/40 text-amber-300 text-xs font-semibold z-10">
                  12.000 Lm
                </span>
              </div>

              {/* Title Langsung PT-200 */}
              <div className="mb-3">
                <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  PT-200
                </h4>
                <p className="text-xs text-white/60 mt-1 line-clamp-2">
                  Dudukan magnetik kuat menempel di panel &amp; mobil dinas, kendali remote 360° hingga 30m.
                </p>
              </div>

              {/* Quick Specs Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] text-white/70">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Base Magnet</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Remote 30M</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">4,4 Kg</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">IP66</span>
              </div>

              {/* Button Detail Katalog */}
              <div className="mt-auto pt-3 border-t border-white/10">
                <a
                  href="https://shop.hokiindo.co.id/produk/PT-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 transition-all duration-200 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 group-hover:text-amber-300"
                >
                  <span>Lihat Detail Katalog</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── CARD 2: PS-200 ── */}
            <div className="flex flex-col bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-md border border-white/10 hover:border-amber-400/40 rounded-2xl p-5 transition-all duration-300 group">
              {/* Product Image */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white mb-4">
                <Image
                  src="/images/products/lighting/ps200.jpg"
                  alt="PS-200"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-sm border border-amber-400/40 text-amber-300 text-xs font-semibold z-10">
                  6.000 Lm
                </span>
              </div>

              {/* Title Langsung PS-200 */}
              <div className="mb-3">
                <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  PS-200
                </h4>
                <p className="text-xs text-white/60 mt-1 line-clamp-2">
                  Lampu area 360° ultra-ringan 2 kg, tahan banting standar IK10 untuk ruang sempit &amp; meja teknisi.
                </p>
              </div>

              {/* Quick Specs Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] text-white/70">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Cukup 2 Kg</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Tahan Banting IK10</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">s/d 44 Jam</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">IP66</span>
              </div>

              {/* Button Detail Katalog */}
              <div className="mt-auto pt-3 border-t border-white/10">
                <a
                  href="https://shop.hokiindo.co.id/produk/PS-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 transition-all duration-200 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 group-hover:text-amber-300"
                >
                  <span>Lihat Detail Katalog</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── CARD 3: PL-300 ── */}
            <div className="flex flex-col bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-md border border-white/10 hover:border-amber-400/40 rounded-2xl p-5 transition-all duration-300 group">
              {/* Product Image */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white mb-4">
                <Image
                  src="/images/products/lighting/pl300.jpg"
                  alt="PL-300"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-sm border border-amber-400/40 text-amber-300 text-xs font-semibold z-10">
                  14.000 Lm
                </span>
              </div>

              {/* Title Langsung PL-300 */}
              <div className="mb-3">
                <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  PL-300
                </h4>
                <p className="text-xs text-white/60 mt-1 line-clamp-2">
                  Menara teleskopik 3,4M berkepala kelopak (petal) 360° anti-silau dengan kaki lipat cepat.
                </p>
              </div>

              {/* Quick Specs Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] text-white/70">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Tiang 3,4M</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Petal Anti-Silau</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Hybrid AC/DC</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">IP65</span>
              </div>

              {/* Button Detail Katalog */}
              <div className="mt-auto pt-3 border-t border-white/10">
                <a
                  href="https://shop.hokiindo.co.id/produk/PL-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 transition-all duration-200 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 group-hover:text-amber-300"
                >
                  <span>Lihat Detail Katalog</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── KEYFRAME ANIMATION ── */}
      <style>{`
        @keyframes lamp-marquee-4col {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333%)); }
        }
      `}</style>
    </section>
  );
}
