"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductDemo {
  id: string;
  name: string;
  category: string;
  spec: string;
  badge: string;
  image: string;
}

const demoProducts: ProductDemo[] = [
  {
    id: "mcb-5sl",
    name: "Siemens MCB 5SL",
    category: "Miniature Circuit Breaker",
    spec: "1P – 4P • 6kA – 10kA",
    badge: "Fast Moving",
    image: "/images/products/mcb-5sl.jpg",
  },
  {
    id: "mccb-3va",
    name: "Siemens MCCB 3VA",
    category: "Molded Case Circuit Breaker",
    spec: "16A – 1600A • s/d 150kA",
    badge: "Ready Stock",
    image: "/images/products/mccb-3va.jpg",
  },
  {
    id: "acb-3wa",
    name: "Siemens ACB 3WA",
    category: "Air Circuit Breaker SIVACON",
    spec: "Proteksi Distribusi Utama",
    badge: "SIVACON Standard",
    image: "/images/products/acb-3wa.jpg",
  },
  {
    id: "contactor-3rt",
    name: "SIRIUS Contactor 3RT",
    category: "Industrial Control & Motor",
    spec: "9A – 820A • AC-3 / AC-4",
    badge: "Siemens SIRIUS",
    image: "/images/products/contactor-3rt.jpg",
  },
  {
    id: "msp-3rv",
    name: "SIRIUS Motor Starter 3RV",
    category: "Proteksi Motor & Sirkuit",
    spec: "Overload & Short Circuit",
    badge: "Motor Protection",
    image: "/images/products/msp-3rv.jpg",
  },
];

export default function HeroProductReel() {
  // Duplicate 4 times to ensure an unbroken seamless infinite marquee loop
  const scrollItems = [
    ...demoProducts,
    ...demoProducts,
    ...demoProducts,
    ...demoProducts,
  ];

  return (
    <div className="relative w-full overflow-hidden group py-2">
      {/* Horizontal Viewport with Graceful Fade Edge Masks */}
      <div
        className="w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
        }}
      >
        {/* Animated Track — slides smoothly from left to right infinitely */}
        <div className="flex flex-row items-center gap-4 w-max animate-marquee-right group-hover:[animation-play-state:paused]">
          {scrollItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex items-center gap-3.5 w-[290px] sm:w-[320px] p-3 rounded-2xl bg-white hover:bg-[#FAFBFD] border border-[#E5E5E3] hover:border-[#003056]/30 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shrink-0 select-none group/card"
            >
              {/* Product Thumbnail Frame */}
              <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-xl bg-[#F8F9FA] border border-[#EBEBEA] flex items-center justify-center p-2 shrink-0 overflow-hidden group-hover/card:border-[#003056]/20 transition-colors">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain group-hover/card:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider truncate">
                    {item.category}
                  </span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#F5F5F3] text-gray-600 border border-[#E5E5E3] shrink-0">
                    {item.badge}
                  </span>
                </div>

                <div className="text-[13px] sm:text-[13.5px] font-extrabold text-[#003056] leading-snug truncate group-hover/card:text-[#FF0800] transition-colors">
                  {item.name}
                </div>

                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-gray-600 bg-[#F8F9FA] px-2 py-0.5 rounded border border-[#E5E5E3] truncate">
                    {item.spec}
                  </span>
                  <span className="text-gray-300 group-hover/card:text-[#FF0800] group-hover/card:translate-x-0.5 transition-all pl-1 shrink-0">
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
