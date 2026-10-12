"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function AwardParallaxSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.5);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.05 }
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
  const bgParallaxY = hasEntered ? scrollFactor * -24 : 0;

  return (
    <section
      ref={sectionRef}
      id="penghargaan-resmi"
      className="relative overflow-hidden min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] flex items-center py-14 sm:py-20 bg-[#0B0F19] border-b border-[#E5E5E3] select-none text-white"
    >
      {/* ── AMBIENT BLUR BACKDROP (WARNA ASLI FOTO MENGALIR ALAMI DI LATAR BELAKANG) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <Image
          src="/images/DSC09841.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center blur-3xl scale-125"
        />
      </div>

      {/* ── PARALLAX BACKGROUND LAYER (DESKTOP) ── */}
      <div
        className="absolute -top-16 -bottom-16 inset-x-0 pointer-events-none transition-transform ease-out duration-150 will-change-transform hidden lg:block"
        style={{ transform: `translateY(${bgParallaxY}px)` }}
      >
        {/* Foto Asli Digeser Fisik ke Kiri Menggunakan TranslateX agar Bebas dari Shadow */}
        <div 
          className="absolute inset-y-0 left-0 w-[90%] xl:w-[85%] -translate-x-12 sm:-translate-x-24 lg:-translate-x-36 xl:-translate-x-44 [mask-image:linear-gradient(to_right,black_0%,black_65%,rgba(0,0,0,0.85)_75%,rgba(0,0,0,0.2)_85%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_65%,rgba(0,0,0,0.85)_75%,rgba(0,0,0,0.2)_85%,transparent_96%)]"
        >
          <Image
            src="/images/DSC09841.jpg"
            alt="Penghargaan Siemens Best Achievement Distributor kepada PT Hokiindo Raya"
            fill
            sizes="90vw"
            priority
            className="object-cover object-[center_top]"
          />
        </div>

        {/* ── MULTI-LAYER GRADIENT SHADOW (DIMULAI SETELAH SEMUA ORANG, TANPA MENYENTUH FIGUR ORANG) ── */}
        {/* Shadow hanya menutupi area kanan (w-[46%] xl:w-[42%]) sehingga area orang 100% bebas shadow */}
        <div className="absolute inset-y-0 right-0 w-[46%] xl:w-[42%] bg-gradient-to-r from-transparent via-[#0B0F19]/80 via-30% to-[#0B0F19] pointer-events-none" />
        
        {/* Radial dark shadow focus behind the modal area */}
        <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-[600px] h-[600px] bg-[#0B0F19]/90 rounded-full blur-[100px] pointer-events-none" />

        {/* Top & bottom subtle natural edge blends */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0B0F19] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B0F19] to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* ── TAMPILAN FOTO PADA MOBILE DENGAN GRADIENT SHADOW LEMBUT ── */}
        <div className="block lg:hidden mb-6">
          <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0B0F19]">
            <Image
              src="/images/DSC09841.jpg"
              alt="Penghargaan Siemens Best Achievement Distributor kepada PT Hokiindo Raya"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center"
            />
            {/* Soft inner vignette gradient on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/70 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ── SISI KIRI (TERBUKA AGAR SEMUA ORANG PADA FOTO TERLIHAT FULL & JELAS) ── */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7" />

          {/* ── SISI KANAN: MODAL ACHIEVEMENT DENGAN EFEK GRADIENT SHADOW ELEGAN ── */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            
            {/* Ambient Backlight Gradient Shadow di Belakang Modal */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-[#00A3A6]/15 via-amber-500/10 to-transparent rounded-3xl blur-2xl opacity-70 pointer-events-none" />

            {/* Modal Card Utama */}
            <div className="relative bg-gradient-to-b from-white/[0.09] via-[#0B0F19]/90 to-[#0B0F19]/95 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.95),0_0_40px_rgba(0,163,166,0.1)]">
              
              {/* Highlight Line di Garis Atas Modal */}
              <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              {/* Judul Penghargaan */}
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-white leading-tight mb-3">
                Penghargaan Siemens 2024 &amp; 2025
              </h2>

              {/* Deskripsi Singkat */}
              <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                Penghargaan yang diterima PT Hokiindo Raya dari Siemens Indonesia mencerminkan komitmen kami dalam mendistribusikan produk Siemens Low Voltage dan Control serta melayani kebutuhan pelanggan industri.
              </p>

              {/* 2 Box Achievement dengan Gradient Shadow */}
              <div className="space-y-3.5">
                {/* Box 1: Tahun 2024 */}
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent backdrop-blur-md border border-white/15 hover:border-amber-400/50 hover:shadow-[0_8px_24px_-4px_rgba(245,158,11,0.15)] transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      Tahun 2024
                    </span>
                    <span className="text-xs text-slate-300 font-medium">PT Siemens Indonesia</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    Best Growth Distributor
                  </h3>
                </div>

                {/* Box 2: Tahun 2025 */}
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent backdrop-blur-md border border-white/15 hover:border-amber-400/50 hover:shadow-[0_8px_24px_-4px_rgba(245,158,11,0.15)] transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      Tahun 2025
                    </span>
                    <span className="text-xs text-slate-300 font-medium">PT Siemens Indonesia</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    Best Achievement Distributor
                  </h3>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
