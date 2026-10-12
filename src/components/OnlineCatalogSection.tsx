"use client";

import React, { useState, useEffect } from "react";
import Eyebrow from "@/components/Eyebrow";

export default function OnlineCatalogSection() {
  const [isLoading, setIsLoading] = useState(true);

  // Auto hide progress bar after 1.2s so it never gets stuck
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="katalog-online" 
      className="py-20 sm:py-24 bg-white text-slate-900 border-b border-[#E5E5E3] relative overflow-hidden select-none"
    >
      {/* Background Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#003056 1px, transparent 1px), linear-gradient(90deg, #003056 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── HEADER & DIRECT CTA ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <Eyebrow>Katalog Digital &amp; Toko Resmi</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#003056] leading-tight mb-3 mt-1">
              Katalog Produk &amp; <span className="text-[#FF0800]">Cek Stok Real-Time</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Jelajahi langsung website toko online resmi PT Hokiindo Raya di bawah ini. Anda dapat mengecek ketersediaan stok fisik aktual dan katalog produk kelistrikan Siemens secara interaktif.
            </p>
          </div>

          {/* Tombol Utama Cek Stock Product */}
          <div className="shrink-0">
            <a
              href="https://shop.hokiindo.co.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#FF0800] hover:bg-[#E00700] transition-all duration-200 shadow-md hover:shadow-lg hover:gap-3.5 group"
            >
              <span>Cek Stock Product</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── EMBEDDED WEBSITE VIEWER (LIGHT BROWSER FRAME) ── */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-gray-300 shadow-xl overflow-hidden relative">
          
          {/* Subtle Top Loading Line (Non-blocking) */}
          {isLoading && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF0800] via-amber-400 to-[#FF0800] animate-pulse z-30" />
          )}

          {/* 1. Browser Chrome / Window Header */}
          <div className="bg-[#F1F5F9] px-4 sm:px-6 py-3 border-b border-gray-200 flex items-center justify-between gap-4">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block shadow-2xs" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block shadow-2xs" />
              <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block shadow-2xs" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-xl mx-auto flex items-center justify-between bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs text-gray-700 shadow-2xs">
              <div className="flex items-center gap-2 truncate">
                <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                </svg>
                <span className="font-mono text-[11px] text-gray-800">https://shop.hokiindo.co.id/</span>
              </div>
              <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0 hidden sm:inline-block">
                Live Store
              </span>
            </div>

            {/* Quick Open Fullscreen / Tab Button */}
            <a
              href="https://shop.hokiindo.co.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-gray-700 hover:text-[#003056] hover:border-gray-400 bg-white hover:bg-gray-50 px-3.5 py-1.5 rounded-lg border border-gray-300 transition-all shadow-2xs flex items-center gap-2 shrink-0 group"
              title="Buka Toko Online di Layar Penuh Tab Baru"
            >
              <span>Buka Layar Penuh</span>
              <svg 
                className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#FF0800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2} 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          {/* 2. Embedded Iframe Container */}
          <div className="relative w-full h-[680px] sm:h-[780px] lg:h-[840px] bg-white">
            <iframe
              src="/api/shop-embed"
              title="Katalog & Toko Online Hokiindo Raya"
              className="w-full h-full border-0 bg-white"
              onLoad={() => setIsLoading(false)}
            />
          </div>

          {/* 3. Browser Footer Bar */}
          <div className="bg-[#F8FAFC] px-4 sm:px-6 py-3 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Menampilkan live store shop.hokiindo.co.id • Terintegrasi Real-Time</span>
            </div>
            
            <a
              href="https://shop.hokiindo.co.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003056] hover:text-[#FF0800] font-bold transition-colors flex items-center gap-1.5 group"
            >
              <span>Buka Layar Penuh</span>
              <svg 
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2} 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
