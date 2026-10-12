"use client";

import React from "react";
import Eyebrow from "@/components/Eyebrow";

interface BusbarProduct {
  sku: string;
  name: string;
  rating: string;
  poles: string;
  feed: string;
  description: string;
  url: string;
}

const BUSBAR_PRODUCTS: BusbarProduct[] = [
  {
    sku: "ENCY25018T",
    name: "APS Encapsulated Chassis 250A 18P",
    rating: "250A",
    poles: "18 Pole",
    feed: "Top Feed",
    description: "Sasis busbar enkapsulasi proteksi kontak langsung, untuk panel distribusi 18 cabang.",
    url: "https://shop.hokiindo.co.id/produk/ENCY25018T",
  },
  {
    sku: "ENCY25024T",
    name: "APS Encapsulated Chassis 250A 24P",
    rating: "250A",
    poles: "24 Pole",
    feed: "Top Feed",
    description: "Kapasitas 24 cabang untuk distribusi gedung, kompatibel dengan MCB 5TJ dan RCBO 5SU.",
    url: "https://shop.hokiindo.co.id/produk/ENCY25024T",
  },
  {
    sku: "ENCY25036T",
    name: "APS Encapsulated Chassis 250A 36P",
    rating: "250A",
    poles: "36 Pole",
    feed: "Top Feed",
    description: "Solusi panel lantai (sub-distribution board) 36 kutub, penyaluran arus 3 fasa seimbang.",
    url: "https://shop.hokiindo.co.id/produk/ENCY25036T",
  },
  {
    sku: "ENCY25048T",
    name: "APS Encapsulated Chassis 250A 48P",
    rating: "250A",
    poles: "48 Pole",
    feed: "Top Feed",
    description: "Panel board berkapasitas besar 48 cabang final, menghilangkan pengkabelan rumit.",
    url: "https://shop.hokiindo.co.id/produk/ENCY25048T",
  },
  {
    sku: "EHC263018T",
    name: "APS MCCB Busbar Chassis 630A 18P",
    rating: "630A",
    poles: "18 Pole",
    feed: "Top Feed",
    description: "Kapasitas arus besar s/d 630A untuk incoming feeder industri manufaktur dan trafo.",
    url: "https://shop.hokiindo.co.id/produk/EHC263018T",
  },
  {
    sku: "ISCY25060T",
    name: "APS Isolating Chassis 250A 60P",
    rating: "250A",
    poles: "60 Pole",
    feed: "Top Feed",
    description: "Sistem sasis isolasi 60 pole untuk fasilitas komersial dan rumah sakit pembagian sirkuit tinggi.",
    url: "https://shop.hokiindo.co.id/produk/ISCY25060T",
  },
];

export default function BusbarChassisSection() {
  return (
    <section 
      id="busbar-chassis" 
      className="relative w-full min-h-screen lg:h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none border-b border-[#E5E5E3]"
    >
      {/* ── 1. FULLSCREEN BACKGROUND VIDEO ── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/products/busbar/busbar-video-thumb.png"
          className="w-full h-full object-cover scale-105 opacity-80"
        >
          <source src="/videos/busbar.mp4" type="video/mp4" />
        </video>

        {/* Ambient Gradient Overlays for High Contrast & Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
      </div>

      {/* ── 2. FULLSCREEN CONTENT: 2-COLUMN LAYOUT ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
        
        {/* KOLOM KIRI: HERO TITLE, SIMPLE DESCRIPTION & BUTTON DIARAHKAN KE SHOP SAJA */}
        <div className="w-full lg:max-w-xl flex flex-col items-start">
          <Eyebrow>Sistem Distribusi Panel</Eyebrow>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-none mt-2">
            Busbar Chasis
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 font-normal max-w-lg">
            Sistem sasis busbar tembaga modular untuk distribusi 3-fasa. Kompatibel dengan Siemens SENTRON 3VA1 di bagian atas (incoming), serta Siemens 5TJ (MCB) dan 5SU (RCBO) pada sirkuit cabang.
          </p>

          {/* Action Button: Hanya Diarahkan ke Shop Saja (Tanpa Tombol Simulasi Komponen) */}
          <div>
            <a
              href="https://shop.hokiindo.co.id/pencarian?q=&category=Busbar%20Chasis&page=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#FF0800] hover:bg-[#E00700] transition-all shadow-lg hover:gap-3"
            >
              <span>Buka Katalog</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* KOLOM KANAN: PILIHAN BUSBAR SEPERTI NOTIF BERGERAK DARI ATAS KE BAWAH (HOVER JEDA, TOMBOL DETAIL PUTIH) */}
        <div className="w-full lg:max-w-md flex flex-col items-center">
          
          {/* Header Notifikasi */}
          <div className="w-full flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Pilihan Varian Busbar Chasis
              </span>
            </div>
          </div>

          {/* Marquee Container with Top/Bottom Gradient Fade */}
          <div 
            className="relative w-full h-[440px] sm:h-[480px] lg:h-[500px] overflow-hidden rounded-2xl"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
          >
            {/* Animasi bergerak dari ATAS ke BAWAH, jeda saat kursor di-hover */}
            <div className="flex flex-col gap-3 animate-marquee-down hover:[animation-play-state:paused]">
              {/* Duplicate array for seamless infinite vertical downward loop */}
              {[...BUSBAR_PRODUCTS, ...BUSBAR_PRODUCTS].map((prod, idx) => (
                <a
                  key={`${prod.sku}-${idx}`}
                  href={prod.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 sm:p-4.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 hover:border-white/40 transition-all duration-300 shadow-lg text-white"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                        {prod.sku}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/15 text-white border border-white/20">
                      {prod.rating}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-white transition-colors leading-snug">
                      {prod.name}
                    </h4>

                    {/* Tombol Detail dengan Background Putih */}
                    <span className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-[#003056] text-xs font-bold shadow-md group-hover:bg-slate-100 group-hover:text-[#FF0800] transition-all">
                      Detail
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-1 mb-2.5">
                    {prod.description}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-white/10 font-semibold">{prod.poles}</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 font-semibold">{prod.feed}</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 font-semibold text-emerald-300">
                      Kompatibel 3VA1 &amp; 5TJ/5SU
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ── CSS KEYFRAMES UNTUK NOTIFIKASI BERGERAK ATAS KE BAWAH ── */}
      <style jsx global>{`
        @keyframes marqueeMoveDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        .animate-marquee-down {
          animation: marqueeMoveDown 24s linear infinite;
        }
      `}</style>
    </section>
  );
}
