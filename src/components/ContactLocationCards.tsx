"use client";

import { useState } from "react";
import company from "../../data/company.json";

export default function ContactLocationCards() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const locations = [
    {
      type: "Head Office",
      tag: "Kantor Pusat • BSD City",
      tagColor: "bg-blue-50 text-[#003056] border-blue-200",
      accentBorder: "hover:border-[#003056]",
      name: "Kantor Pusat",
      address: company.address,
      mapsUrl:
        "https://maps.google.com/?q=Roseville+SOHO+%26+Suite,+Jl.+Sunburst+CBD,+Tangerang+Selatan",
      iconBg: "bg-[#003056] text-white",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      type: "Warehouse & Logistics",
      tag: "Pusat Gudang • BSD",
      tagColor: "bg-red-50 text-[#FF0800] border-red-200",
      accentBorder: "hover:border-[#FF0800]",
      name: "Gudang",
      address: company.warehouseAddress,
      mapsUrl:
        "https://maps.google.com/?q=Ruko+Golden+Madrid+1+Blok+E28,+Jl.+Letnan+Sutopo,+Tangerang+Selatan",
      iconBg: "bg-[#FF0800] text-white",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
  ];

  const handleCopy = (address: string, index: number) => {
    navigator.clipboard.writeText(address);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2500);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {locations.map((loc, index) => {
        const isCopied = copiedIndex === index;
        return (
          <div
            key={loc.type}
            className={`bg-white rounded-3xl border border-gray-200/90 shadow-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md ${loc.accentBorder} relative overflow-hidden group`}
          >
            {/* Top decorative micro pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none group-hover:scale-110 transition-transform" />

            <div>
              {/* Badge & Icon Row */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${loc.tagColor}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {loc.tag}
                </span>

                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${loc.iconBg}`}
                >
                  {loc.icon}
                </div>
              </div>

              {/* Title diisi "Kantor Pusat" / "Gudang" */}
              <h3 className="text-2xl font-bold text-[#003056] tracking-tight mb-3">
                {loc.name}
              </h3>

              {/* Hanya alamat saja (tanpa jam operasional, tanpa kontak dll) */}
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {loc.address}
              </p>
            </div>

            {/* Bottom Actions: Maps & Salin */}
            <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold text-[#003056] bg-slate-100 hover:bg-[#003056] hover:text-white transition-all duration-200"
              >
                <span>Buka Google Maps</span>
              </a>

              <button
                type="button"
                onClick={() => handleCopy(loc.address, index)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 transition-all cursor-pointer"
                title="Salin alamat ke clipboard"
              >
                {isCopied ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-emerald-600 font-bold text-[11px]">Tersalin</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                    <span className="text-[11px]">Salin</span>
                  </>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
