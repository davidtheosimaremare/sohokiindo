import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import TrustedBy from "@/components/TrustedBy";
import SiemensProductSlider from "@/components/SiemensProductSlider";
import BusbarChassisSection from "@/components/BusbarChassisSection";
import OnlineCatalogSection from "@/components/OnlineCatalogSection";
import IndustrialControlsSection from "@/components/IndustrialControlsSection";
import MobileLightingSection from "@/components/MobileLightingSection";
import company from "../../data/company.json";

export const metadata: Metadata = {
  title: "Distributor Resmi Siemens Indonesia | Low Voltage & Control — PT Hokiindo Raya",
  description:
    "Anda bangun panelnya, kami siapkan komponennya. Distributor resmi Siemens Indonesia untuk ACB 3WA, MCCB 3VA, MCB 5SL, SIRIUS Contactor, dan Busbar Chassis. Cek ketersediaan stok aktual di shop.hokiindo.co.id.",
  alternates: {
    canonical: "https://hokiindo.co.id",
  },
};

export default function HomePage() {

  return (
    <>
      {/* ── HERO SECTION — CLEAN CORPORATE WITH CLEAR SIEMENS VIDEO ── */}
      <section className="relative min-h-[88vh] flex items-center bg-white overflow-hidden w-full max-w-full">
        {/* Background Looping Ambient Video — Siemens SIVACON S8 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full">
          <iframe
            src="https://www.youtube-nocookie.com/embed/eMBtAzzqzF4?autoplay=1&mute=1&loop=1&playlist=eMBtAzzqzF4&controls=0&showinfo=0&rel=0&iv_load_policy=3&cc_load_policy=0&disablekb=1&modestbranding=1&playsinline=1&vq=hd1080"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full h-[56.25vw] object-cover scale-[1.45] pointer-events-none opacity-90"
            allow="autoplay; encrypted-media"
            title="Siemens SIVACON S8 Background Video"
          />
          {/* Seamless fade to white so it blends completely with the section below (no border line) */}
          <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content — Clean Corporate Card / Frosted Panel */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-24">
          <div className="max-w-2xl lg:max-w-3xl bg-white/95 backdrop-blur-md p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#E5E5E3] shadow-md">
            {/* Eyebrow */}
            <div className="mb-4">
              <Eyebrow>Distributor Siemens Indonesia</Eyebrow>
            </div>
            {/* High-Contrast Corporate Headline — Strictly 2 lines with sequenced entrance */}
            <h1 className="text-xl sm:text-3xl lg:text-[42px] xl:text-[46px] font-bold leading-tight sm:leading-[1.08] tracking-tight mb-4 sm:mb-5" style={{ color: "#003056" }}>
              <span className="block overflow-hidden">
                <span className="block animate-hero-line-1 whitespace-nowrap">
                  Anda Bangun Panelnya,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block text-[#FF0800] animate-hero-line-2 whitespace-nowrap">
                  Kami Siapkan Komponennya.
                </span>
              </span>
            </h1>

            {/* Description / Tagline — appears after title animation */}
            <p className="animate-hero-tagline text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-normal">
              Solusi Siemens Low Voltage untuk panel, kontrol, proteksi, dan distribusi listrik industri yang andal dan terintegrasi.
            </p>

            {/* CTA Buttons */}
            <div className="animate-hero-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Hubungi Kami (WA - Putih Clean dengan Border) */}
              <a
                href="https://wa.me/628111086180?text=Halo%20PT%20Hokiindo%20Raya,%20saya%20ingin%20berkonsultasi%20kebutuhan%20produk%20Siemens."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-[13px] font-bold tracking-[0.08em] uppercase text-[#003056] bg-[#F5F5F3] hover:bg-[#EBEBEA] border border-[#E5E5E3] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Hubungi Kami
              </a>

              {/* Cek Stok Produk */}
              <a
                href="https://shop.hokiindo.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-[13px] font-bold tracking-[0.08em] uppercase text-white bg-[#FF0800] hover:bg-[#E00700] transition-all duration-200 hover:gap-3 shadow-xs"
              >
                Cek Stok Produk
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h17.4"/><path d="m15.2 6.8 5.2 5.2-5.2 5.2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIPERCAYA OLEH / TRUSTED BY ── */}
      <TrustedBy />

      {/* ── SIEMENS PRODUCT SLIDER (ACB, MCCB, MCB, RCBO, CONTACTOR) ── */}
      <SiemensProductSlider />

      {/* ── INDUSTRIAL CONTROLS & MOTOR MANAGEMENT (SIRIUS BENTO GRID) ── */}
      <IndustrialControlsSection />

      {/* ── MOBILE / PORTABLE LIGHTING (DATA CENTER & INDUSTRIAL LIGHT TOWER) ── */}
      <MobileLightingSection />

      {/* ── BUSBAR CHASSIS & PANEL DISTRIBUTION (3VA1, 5TJ, 5SU) ── */}
      <BusbarChassisSection />

      {/* ── KATALOG DIGITAL & TOKO RESMI HOKIINDO RAYA (OPERABLE SHOP & CEK STOK) ── */}
      <OnlineCatalogSection />
    </>
  );
}
