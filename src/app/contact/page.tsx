import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import company from "../../../data/company.json";
import ProjectConsultationForm from "@/components/ProjectConsultationForm";
import ContactLocationCards from "@/components/ContactLocationCards";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi Teknis Siemens — PT Hokiindo Raya",
  description:
    "Hubungi tim sales dan engineer PT Hokiindo Raya untuk konsultasi spesifikasi Siemens, penawaran proyek industri, atau cek ketersediaan stok aktual di shop.hokiindo.co.id.",
  alternates: {
    canonical: "https://hokiindo.co.id/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── 1. HERO HEADER DENGAN BACKGROUND GRID TIPIS ── */}
      <section className="pt-32 pb-12 bg-white border-b border-[#E5E5E3] relative overflow-hidden">
        {/* Background Grid Tipis (Subtle Opacity) */}
        <div 
          className="absolute inset-0 pointer-events-none select-none opacity-[0.028]"
          style={{
            backgroundImage: "linear-gradient(to right, #003056 1px, transparent 1px), linear-gradient(to bottom, #003056 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Eyebrow>Kontak &amp; Konsultasi</Eyebrow>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#003056] leading-tight mb-3 mt-2">
            Hubungi <span className="text-[#FF0800]">PT Hokiindo Raya</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Konsultasi spesifikasi teknis Siemens, ketersediaan stok komponen, atau ajukan penawaran harga proyek Anda.
          </p>
        </div>
      </section>

      {/* ── 2. MAIN SECTION (KIRI: KONTAK NOMOR HP, EMAIL DLL | KANAN: FORM) ── */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* KIRI: Kontak Nomor HP, Email, Toko Online dll */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm p-6 sm:p-7">
                <div className="mb-5 pb-3 border-b border-gray-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF0800] block">
                    Kontak Langsung
                  </span>
                  <h2 className="text-xl font-bold text-[#003056]">
                    Hubungi Sales &amp; Teknis
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* WhatsApp Langsung */}
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                      WhatsApp
                    </span>
                    <a
                      href="https://wa.me/628111086180?text=Halo%20PT%20Hokiindo%20Raya,%20saya%20ingin%20konsultasi%20kebutuhan%20produk%20Siemens."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-[#003056] hover:text-[#25D366] transition-colors block mb-3"
                    >
                      {company.phone}
                    </a>
                    <a
                      href="https://wa.me/628111086180?text=Halo%20PT%20Hokiindo%20Raya,%20saya%20ingin%20konsultasi%20kebutuhan%20produk%20Siemens."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20BD5A] transition-colors shadow-2xs"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>Chat WhatsApp</span>
                    </a>
                  </div>

                  {/* Email */}
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                      Email Resmi (BOQ &amp; Tender)
                    </span>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-lg font-bold text-[#003056] hover:text-[#FF0800] transition-colors block mb-2"
                    >
                      {company.email}
                    </a>
                    <a
                      href={`mailto:${company.email}?subject=Permintaan%20Penawaran%20Proyek%20Siemens%20-%20Hokiindo%20Raya`}
                      className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold text-[#003056] bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <span>Kirim Email Resmi</span>
                    </a>
                  </div>

                  {/* Toko Online 24/7 */}
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                      Katalog &amp; Toko Online
                    </span>
                    <a
                      href="https://shop.hokiindo.co.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-[#003056] hover:text-[#FF0800] transition-colors block mb-2"
                    >
                      shop.hokiindo.co.id
                    </a>
                    <a
                      href="https://shop.hokiindo.co.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold text-white bg-[#003056] hover:bg-[#FF0800] transition-colors"
                    >
                      <span>Buka Toko</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* KANAN: Form Permintaan Konsultasi Proyek */}
            <div className="lg:col-span-7">
              <ProjectConsultationForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. ALAMAT KANTOR & GUDANG (HANYA ALAMAT SAJA & MAPS) ── */}
      <section className="py-14 sm:py-18 bg-white border-t border-[#E5E5E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF0800] block mb-1">
              Lokasi &amp; Pusat Distribusi
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003056] tracking-tight">
              Alamat Kantor &amp; Gudang Logistik
            </h2>
          </div>

          {/* Kartu Kantor Pusat & Gudang (Hanya Alamat & Maps) */}
          <ContactLocationCards />
        </div>
      </section>

      {/* ── 4. BANNER TOKO ONLINE (BACKGROUND WARNA MERAH) ── */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FF0800] text-white p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            {/* Subtle light effect / sheen */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/80 block mb-1">
                E-Commerce &amp; Katalog Resmi
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">
                Ingin cek ketersediaan stok langsung?
              </h3>
              <p className="text-sm text-red-50 max-w-xl leading-relaxed">
                Kunjungi toko online resmi Hokiindo Raya untuk memeriksa stok aktual dan melakukan pemesanan secara mandiri 24/7.
              </p>
            </div>

            <a
              href="https://shop.hokiindo.co.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#FF0800] bg-white hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:gap-3 shrink-0"
            >
              <span>Buka Toko Online</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
