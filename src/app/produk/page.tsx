import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import products from "../../../data/products.json";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Rangkaian produk kelistrikan yang didistribusikan PT Hokiindo Raya — Circuit Breaker, Switchgear, Kontrol Motor, dan Proteksi Industri dari brand principal terpercaya.",
};

export default function ProdukPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-white border-b border-[#E5E5E3] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Eyebrow>Produk</Eyebrow>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight max-w-3xl" style={{ color: "#003056" }}>
            Peralatan listrik{" "}
            <span style={{ color: "#FF0800" }}>standar industri.</span>
          </h1>
          <p className="text-gray-600 text-sm mt-4 max-w-md leading-relaxed">
            Produk kelistrikan dari brand principal terpercaya untuk kontraktor, panel maker, dan industri.
          </p>
        </div>
      </section>

      {/* Kategori Produk — alternating solution style */}
      <section className="bg-white">
        {products.map((category, catIndex) => (
          <div
            key={category.id}
            className={`border-b border-[#E5E5E3] ${catIndex % 2 === 0 ? "bg-white" : "bg-[#F5F5F3]"}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
              {/* Category header */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
                <div className="lg:col-span-1">
                  <Eyebrow>{`Kategori · 0${catIndex + 1}`}</Eyebrow>
                  <h2 className="text-2xl font-bold leading-tight" style={{ color: "#003056" }}>
                    {category.category}
                  </h2>
                </div>
                <p className="lg:col-span-2 text-sm text-gray-500 leading-relaxed self-end">
                  {category.description}
                </p>
              </div>

              {/* Product cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E3]">
                {category.items.map((product) => (
                  <div key={product.id} className="bg-white p-8 flex flex-col group hover:bg-[#F5F5F3] transition-colors">
                    {/* Image placeholder — card fig style */}
                    <figure className="relative bg-[#F5F5F3] rounded-sm h-36 mb-6 overflow-hidden flex items-center justify-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#003056" }}
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <figcaption className="absolute bottom-0 left-0 right-0 px-3 py-2 flex justify-between">
                        <span className="text-xs text-gray-400 uppercase tracking-widest">[FOTO DARI KLIEN]</span>
                      </figcaption>
                    </figure>

                    {/* Brand badge */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-bold group-hover:text-[#FF0800] transition-colors" style={{ color: "#003056" }}>
                        {product.name}
                      </h3>
                      <span
                        className="text-xs font-semibold uppercase tracking-widest px-2 py-0.5"
                        style={{ backgroundColor: "#003056", color: "white" }}
                      >
                        {product.brand}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed mb-5 flex-1">
                      {product.description}
                    </p>

                    {/* Spec table — Axiom style */}
                    <div className="divide-y divide-[#E5E5E3] mb-5">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-3 py-2">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#FF0800" }} />
                          <span className="text-xs text-gray-500">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="mailto:info@hokiindo.co.id"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest hover:gap-2.5 transition-all"
                      style={{ color: "#FF0800" }}
                    >
                      Hubungi untuk Spesifikasi
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12h17.4"/><path d="m15.2 6.8 5.2 5.2-5.2 5.2"/>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <Eyebrow light>Konsultasi</Eyebrow>
            <h2 className="text-2xl font-bold text-white">
              Tidak menemukan yang dicari?
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-sm">
              Hubungi tim kami untuk ketersediaan produk dan spesifikasi teknis.
            </p>
          </div>
          <a
            href="mailto:info@hokiindo.co.id"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white rounded-sm shrink-0"
            style={{ backgroundColor: "#FF0800" }}
          >
            Konsultasi Kebutuhan
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h17.4"/><path d="m15.2 6.8 5.2 5.2-5.2 5.2"/>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
