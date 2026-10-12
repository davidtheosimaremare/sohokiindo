"use client";

import { useState, useRef, useEffect } from "react";

export default function WhatsAppFloating() {
  // Modal is CLOSED by default. Only appears when user clicks the floating button.
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const waUrl =
    "https://wa.me/628111086180?text=Halo%20PT%20Hokiindo%20Raya,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20produk%20Siemens.";

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none font-sans"
    >
      {/* Consultation Modal — Only appears when isOpen is true */}
      {isOpen && (
        <div className="relative w-[300px] sm:w-[320px] p-5 rounded-2xl bg-white border border-[#E5E5E3] shadow-2xl transition-all animate-in fade-in zoom-in-95 duration-200">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-3.5 right-3.5 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
            aria-label="Tutup modal konsultasi"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-2 mb-2.5 pr-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
            </span>
            <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#003056]">
              Konsultasi Produk Siemens
            </span>
          </div>

          {/* Invitation Copy */}
          <p className="text-[12.5px] text-gray-600 leading-relaxed mb-4">
            Butuh bantuan spesifikasi teknis, ketersediaan stok, atau penawaran harga industri?
          </p>

          {/* Direct WhatsApp Action Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2.5 w-full py-2.5 px-4 rounded-full text-[12px] font-bold text-white transition-all hover:opacity-95 uppercase tracking-wider shadow-sm"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Chat WhatsApp
          </a>
        </div>
      )}

      {/* Floating Trigger Button — Flat Pill Style */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-3 py-2.5 px-4 rounded-full bg-white hover:bg-gray-50 border border-[#E5E5E3] shadow-lg transition-all duration-200 hover:scale-[1.03] cursor-pointer ${
          isOpen ? "ring-2 ring-[#25D366]/50" : ""
        }`}
        aria-label="Buka Konsultasi Produk WhatsApp"
      >
        {/* WhatsApp Circular Disc */}
        <div
          className="relative w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 shadow-xs"
          style={{ backgroundColor: "#25D366" }}
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </div>

        {/* Text Details */}
        <div className="flex flex-col text-left">
          <span className="text-[12.5px] font-bold text-[#003056] leading-tight group-hover:text-[#25D366] transition-colors">
            Konsultasi Produk
          </span>
          <span className="text-[10px] text-gray-500 font-medium">
            Berbicara dengan Technical Engineer
          </span>
        </div>

        {/* Small chevron indicator */}
        <div className="text-gray-400 pl-0.5">
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </div>
      </button>
    </div>
  );
}
