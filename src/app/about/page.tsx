import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Eyebrow from "@/components/Eyebrow";
import AwardParallaxSection from "@/components/AwardParallaxSection";
import InteractiveTimeline from "@/components/InteractiveTimeline";

export const metadata: Metadata = {
  title: "Tentang Kami — Distributor Siemens Low Voltage & Control | PT Hokiindo Raya",
  description: "Ingat Siemens, Ingat Hokiindo. Lebih dari 15 tahun bersama Siemens mendukung kebutuhan komponen kelistrikan Low Voltage dan kontrol industri di Indonesia.",
};




export default function AboutPage() {
  return (
    <>
      {/* ── 1. HERO SECTION — CLEAN CORPORATE WITH BACKGROUND VIDEO READY ── */}
      <section className="relative min-h-[88vh] flex items-center bg-white overflow-hidden w-full max-w-full">
        {/* Background Looping Ambient Video — Ready for user's video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full">
          <iframe
            src="https://www.youtube-nocookie.com/embed/eMBtAzzqzF4?autoplay=1&mute=1&loop=1&playlist=eMBtAzzqzF4&controls=0&showinfo=0&rel=0&iv_load_policy=3&cc_load_policy=0&disablekb=1&modestbranding=1&playsinline=1&vq=hd1080"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full h-[56.25vw] object-cover scale-[1.45] pointer-events-none opacity-85"
            allow="autoplay; encrypted-media"
            title="Siemens Industrial Infrastructure Background Video"
          />
          {/* Seamless fade to white so it blends completely with the section below */}
          <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content — Clean Corporate Card / Frosted Panel (Sesuai Home) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-24">
          <div className="max-w-2xl lg:max-w-3xl bg-white/95 backdrop-blur-md p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#E5E5E3] shadow-md">
            {/* Eyebrow */}
            <div className="mb-4">
              <Eyebrow>Distributor Resmi Siemens</Eyebrow>
            </div>

            {/* Clean Headline — Sesuai Tagline User */}
            <h1 className="text-xl sm:text-3xl lg:text-[42px] xl:text-[46px] font-bold leading-tight sm:leading-[1.08] tracking-tight mb-3 sm:mb-4 text-[#003056]">
              <span className="block">Ingat Siemens,</span>
              <span className="block text-[#FF0800]">Ingat Hokiindo.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl font-bold text-[#003056] mb-3 leading-snug">
              Lebih dari 15 Tahun Bersama Siemens.
            </p>

            {/* Description — Sesuai Tagline User */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mb-6 font-normal">
              Hokiindo hadir sebagai distributor produk Siemens Low Voltage dan Control, membawa pengalaman lebih dari 15 tahun untuk mendukung kebutuhan komponen kelistrikan dan kontrol industri.
            </p>

            {/* Action Buttons — Sesuai Gaya Tombol Home */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-[13px] font-bold tracking-[0.08em] uppercase text-white bg-[#003056] hover:bg-[#FF0800] transition-all duration-200 shadow-sm"
              >
                Konsultasikan Proyek
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>

              <a
                href="#profil"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[13px] font-bold tracking-[0.08em] uppercase text-[#003056] bg-[#F5F5F3] hover:bg-[#EBEBEA] border border-[#E5E5E3] transition-all duration-200"
              >
                Pelajari Nilai Kami
                <span className="text-gray-400">↓</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. PROFIL RESMI & NILAI KAMI SEBAGAI DISTRIBUTOR (SIMPLE & 15+ TAHUN DENGAN SIEMENS) ── */}
      <section id="profil" className="pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pb-36 bg-[#F8FAFC] border-b border-[#E5E5E3] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Kolom Teks Profil */}
            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-[#003056] leading-tight mb-5">
                <span className="block">Bukan Sekadar Jual Komponen,</span>
                <span className="block text-[#FF0800]">Kami Mengawal Kebutuhan Lapangan Anda.</span>
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                <p>
                  Pengalaman lebih dari 15 tahun membentuk prinsip kerja kami: bukan sekadar transaksi jual-beli komponen, melainkan mengawal kebutuhan teknis lapangan Anda secara tuntas.
                </p>
                <p>
                  Kami membantu panel builder, kontraktor EPC, dan tim maintenance industri menyelesaikan tiga hal mendasar: memastikan spesifikasi dan sizing tepat, menjamin 100% keaslian unit bergaransi resmi, serta menjaga kepastian jadwal pengiriman agar perakitan panel berjalan tanpa hambatan.
                </p>
              </div>
            </div>

            {/* Kolom Fitur: List Keren Titik & Line Putus-Putus */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 pb-9 sm:pb-11 rounded-2xl sm:rounded-3xl bg-white border border-gray-200/90 shadow-sm relative overflow-hidden">
                
                {/* Subtle engineering gradient accent */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#003056]/5 to-transparent rounded-full -mr-16 -mt-16 pointer-events-none" />

                <div className="relative">
                  
                  {/* Poin 1: Technical Advisor untuk Konsultasi Detail Produk */}
                  <div className="relative pl-12 sm:pl-14 pb-8 group">
                    {/* Garis putus-putus ke Poin 2 */}
                    <div className="absolute left-[15px] sm:left-[17px] top-6 bottom-0 w-0 border-l-2 border-dashed border-[#003056]/30 pointer-events-none" />

                    {/* Titik / Node 1 */}
                    <div className="absolute left-0 top-0.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-[#FF0800] flex items-center justify-center shadow-sm z-10 transition-transform group-hover:scale-110 duration-200">
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF0800]" />
                    </div>

                    <div className="transition-transform group-hover:translate-x-1 duration-200">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-red-50 text-[#FF0800] mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF0800]" />
                        Pendampingan Spesifikasi &amp; Sizing
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#003056] leading-snug mb-1 group-hover:text-[#FF0800] transition-colors">
                        Technical Advisor untuk Konsultasi Detail Produk
                      </h3>
                      <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
                        Pendampingan teknis langsung untuk verifikasi gambar Single Line Diagram (SLD), rekomendasi rating breaker SENTRON, hingga koordinasi kontrol motor SIRIUS yang tepat guna.
                      </p>
                    </div>
                  </div>

                  {/* Poin 2: Siemens Original */}
                  <div className="relative pl-12 sm:pl-14 pb-8 group">
                    {/* Garis putus-putus ke Poin 3 */}
                    <div className="absolute left-[15px] sm:left-[17px] top-6 bottom-0 w-0 border-l-2 border-dashed border-[#003056]/30 pointer-events-none" />

                    {/* Titik / Node 2 */}
                    <div className="absolute left-0 top-0.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-[#003056] flex items-center justify-center shadow-sm z-10 transition-transform group-hover:scale-110 duration-200">
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#003056]" />
                    </div>

                    <div className="transition-transform group-hover:translate-x-1 duration-200">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-[#003056] mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#003056]" />
                        Jaminan 100% Produk Asli Principal
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#003056] leading-snug mb-1 group-hover:text-[#003056] transition-colors">
                        Siemens Original
                      </h3>
                      <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
                        Menghindarkan risiko barang tiruan yang membahayakan panel Anda. Seluruh unit dipasok resmi langsung dengan nomor seri terverifikasi dan garansi pabrikan Siemens.
                      </p>
                    </div>
                  </div>

                  {/* Poin 3: Pengiriman ke Seluruh Indonesia */}
                  <div className="relative pl-12 sm:pl-14 group">
                    {/* Titik / Node 3 (Tanpa garis ke bawah) */}
                    <div className="absolute left-0 top-0.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center shadow-sm z-10 transition-transform group-hover:scale-110 duration-200">
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-600" />
                    </div>

                    <div className="transition-transform group-hover:translate-x-1 duration-200">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        Logistik Cepat &amp; Buffer Stock
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#003056] leading-snug mb-1 group-hover:text-emerald-700 transition-colors">
                        Pengiriman ke Seluruh Indonesia
                      </h3>
                      <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
                        Kesiapan buffer stock fast-moving di pergudangan Tangerang Selatan dengan sistem logistik ekspedisi terpercaya ke seluruh penjuru proyek Anda di Indonesia.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. AWARD PARALLAX SECTION (BUKTI PRESTASI 2024 & 2025) ── */}
      <AwardParallaxSection />


      {/* ── 3. TIMELINE PERJALANAN (2013 - 2026 & BEYOND) ── */}
      <section id="perjalanan" className="py-16 sm:py-24 bg-white border-b border-[#E5E5E3] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Ditengah (Centered) */}
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center mb-3">
              <Eyebrow>Rekam Jejak Distribusi</Eyebrow>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight text-[#003056] leading-tight mb-4">
              Perjalanan Kami:{" "}
              <span className="text-[#FF0800]">Sustainable Solutions, Built on Trust.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Dari penyedia kebutuhan elektrikal pada 2013 hingga dipercaya prinsipal global Siemens sebagai peraih penghargaan distributor terbaik di Indonesia.
            </p>
          </div>

          {/* Interactive Dramatic Timeline with Fused Bullets & Connectors */}
          <InteractiveTimeline />

        </div>
      </section>

    </>
  );
}
