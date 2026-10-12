"use client";

import { useState } from "react";

export default function ProjectConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [submittedMethod, setSubmittedMethod] = useState<string | null>(null);

  const formatMessage = () => {
    return `*PERMINTAAN KONSULTASI PROYEK - PT HOKIINDO RAYA*
----------------------------------------
*Nama:* ${formData.name || "-"}
*Perusahaan / Proyek:* ${formData.company || "-"}
*No. WhatsApp / HP:* ${formData.phone || "-"}
*Email Bisnis:* ${formData.email || "-"}

*Rincian Kebutuhan & Spesifikasi:*
${formData.notes || "Mohon informasi ketersediaan stok dan penawaran harga resmi."}
----------------------------------------`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Mohon isi Nama Lengkap dan Nomor WhatsApp Anda.");
      return;
    }

    const message = formatMessage();
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/628111086180?text=${encoded}`;

    setSubmittedMethod("WhatsApp");
    window.open(waUrl, "_blank");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Mohon isi Nama Lengkap dan Nomor WhatsApp/Telepon Anda.");
      return;
    }

    const subject = encodeURIComponent(
      `Permintaan Konsultasi Proyek - ${formData.company || formData.name}`
    );
    const body = encodeURIComponent(formatMessage());
    const mailtoUrl = `mailto:info@hokiindo.co.id?subject=${subject}&body=${body}`;

    setSubmittedMethod("Email");
    window.location.href = mailtoUrl;
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#003056] tracking-tight">
          Kirim Spesifikasi Kebutuhan Anda
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
          Isi detail proyek di bawah ini untuk verifikasi ketersediaan stok dan penawaran resmi dari tim teknis &amp; sales kami.
        </p>
      </div>

      <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
        {/* Row 1: Nama & Perusahaan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-semibold text-[#003056] mb-1.5">
              Nama Lengkap <span className="text-[#FF0800]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Budi Santoso"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#003056] focus:ring-1 focus:ring-[#003056] transition-colors bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#003056] mb-1.5">
              Nama Perusahaan / Proyek <span className="text-[#FF0800]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: PT Surya Kencana / Panel Maker"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#003056] focus:ring-1 focus:ring-[#003056] transition-colors bg-white"
            />
          </div>
        </div>

        {/* Row 2: WhatsApp & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-semibold text-[#003056] mb-1.5">
              No. WhatsApp / HP <span className="text-[#FF0800]">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="Contoh: 0812-3456-7890"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#003056] focus:ring-1 focus:ring-[#003056] transition-colors bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#003056] mb-1.5">
              Email Bisnis <span className="text-gray-400 font-normal text-[11px]">(Opsional)</span>
            </label>
            <input
              type="email"
              placeholder="Contoh: procurement@perusahaan.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#003056] focus:ring-1 focus:ring-[#003056] transition-colors bg-white"
            />
          </div>
        </div>

        {/* Row 3: Catatan / Spesifikasi */}
        <div>
          <label className="block text-xs font-semibold text-[#003056] mb-1.5">
            Detail Spesifikasi &amp; Catatan Kebutuhan
          </label>
          <textarea
            rows={3}
            placeholder="Contoh: Butuh ACB Siemens 3WL 2000A 3P Drawout 1 unit, MCCB 3VA 250A 4 unit, serta verifikasi rating untuk panel LVMDP..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#003056] focus:ring-1 focus:ring-[#003056] transition-colors bg-white resize-y min-h-[85px]"
          />
        </div>

        {/* Submit Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          {/* Main Action: WhatsApp */}
          <button
            type="submit"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20BD5A] transition-all shadow-xs cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Kirim via WhatsApp</span>
          </button>

          {/* Secondary Action: Email */}
          <button
            type="button"
            onClick={handleEmailSubmit}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs font-bold text-[#003056] bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Kirim via Email</span>
          </button>
        </div>

        {/* Feedback message if triggered */}
        {submittedMethod && (
          <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>
              Format konsultasi dibuka via <strong>{submittedMethod}</strong>. Tim teknis Hokiindo Raya akan segera merespons Anda.
            </span>
          </div>
        )}

        <div className="pt-2 border-t border-gray-100 text-center">
          <span className="text-[11px] text-gray-400">
            🔒 Data Anda aman &amp; hanya digunakan untuk keperluan penawaran resmi.
          </span>
        </div>
      </form>
    </div>
  );
}
