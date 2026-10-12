import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Katalog Produk Siemens Low Voltage & Industrial Control | PT Hokiindo Raya",
  description:
    "Katalog resmi produk elektrikal Siemens Low Voltage dan SIRIUS Industrial Control dari PT Hokiindo Raya. ACB 3WA, MCCB 3VA, MCB 5SL, SIRIUS Contactor, Busbar Chassis, dan Lampu Industri. Cek ketersediaan stok aktual di shop.hokiindo.co.id.",
  alternates: {
    canonical: "https://hokiindo.co.id/produk",
  },
  openGraph: {
    title: "Katalog Produk Siemens Low Voltage & Industrial Control — PT Hokiindo Raya",
    description:
      "Distributor resmi Siemens Low Voltage & Control. Cek spesifikasi teknis dan ketersediaan stok komponen industri di shop.hokiindo.co.id.",
    url: "https://hokiindo.co.id/produk",
  },
};

interface ProductItem {
  id: string;
  name: string;
  series: string;
  category: string;
  standard?: string;
  description: string;
  specs: string[];
  image: string;
  shopUrl: string;
}

const sentronProducts: ProductItem[] = [
  {
    id: "acb-3wa",
    name: "Air Circuit Breaker (ACB)",
    series: "SENTRON 3WA / 3WL",
    category: "Main Power Distribution",
    standard: "IEC 60947-2",
    description: "Pemutus arus utama berkapasitas besar untuk panel distribusi gardu trafo dan LVMDP industri. Dilengkapi trip unit elektronik cerdas untuk proteksi selektif tingkat tinggi.",
    specs: ["Kapasitas s/d 6300A", "Icu hingga 150 kA", "Proteksi LVMDP & Gardu"],
    image: "/images/products/acb-3wa.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/acb",
  },
  {
    id: "mccb-3va",
    name: "Molded Case Circuit Breaker (MCCB)",
    series: "SENTRON 3VA",
    category: "Feeder & Sub-Distribution",
    standard: "IEC 60947-2",
    description: "Proteksi beban lebih dan hubung singkat andal untuk kabel feeder distribusi daya, sub-panel, serta sirkuit motor industri dengan respon pemutusan ultra-cepat.",
    specs: ["Kapasitas 16A - 1600A", "Icu hingga 110 kA", "Thermal-Magnetic / ETU"],
    image: "/images/products/mccb-3va.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/mccb",
  },
  {
    id: "mcb-5sl",
    name: "Miniature Circuit Breaker (MCB)",
    series: "SENTRON 5SL / 5SY",
    category: "Final Circuit Protection",
    standard: "IEC 60898-1 / 60947-2",
    description: "Pengaman sirkuit cabang final, instalasi gedung komersial, beban penerangan, dan stop kontak. Menjamin keandalan trip tinggi serta kemudahan pemasangan DIN-rail.",
    specs: ["Kapasitas 0.5A - 63A", "Breaking Capacity 6kA - 10kA", "Pemasangan DIN-Rail"],
    image: "/images/products/mcb-5sl.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/mcb",
  },
  {
    id: "rcbo-5sv",
    name: "RCBO & RCCB (Earth Leakage)",
    series: "SENTRON 5SV",
    category: "Personal & Fire Protection",
    standard: "IEC 61009-1 / 61008-1",
    description: "Proteksi keselamatan terhadap arus bocor ke tanah (earth leakage) dan sengatan fatal manusia, sekaligus mencegah kebakaran akibat degradasi insulasi kabel.",
    specs: ["Sensitivitas 30mA - 300mA", "Kombinasi Overload & Leakage", "Standar Keselamatan Gedung"],
    image: "/images/products/rcbo-5sv1.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/rcbo",
  },
  {
    id: "spd-5sd",
    name: "Surge Protection Device (SPD)",
    series: "SENTRON 5SD7",
    category: "Transient & Lightning Protection",
    standard: "IEC 61643-11",
    description: "Perlindungan handal terhadap lonjakan tegangan transien dan petir untuk mengamankan perangkat otomasi serta sistem elektronik bernilai tinggi.",
    specs: ["Tipe 1, Tipe 2, & Tipe 3", "Discharge Current s/d 40kA", "Modul Cartridge Pluggable"],
    image: "/images/products/spd-5sd-t2.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/spd",
  },
  {
    id: "switch-disconnector-3kd",
    name: "Switch Disconnector / LBS",
    series: "SENTRON 3KD / 3LD",
    category: "Load Break & Isolation",
    standard: "IEC 60947-3",
    description: "Saklar pemutus beban manual dan saklar isolasi pemeliharaan. Menjamin pemutusan sirkuit yang aman secara mekanis dengan indikator kontak terverifikasi.",
    specs: ["Arus Beban s/d 1600A", "Isolasi Terlihat (Positive Off)", "Aplikasi AC & DC Industri"],
    image: "/images/products/switch-disconnector-3kd.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/switch-disconnector",
  },
  {
    id: "fuse-3na",
    name: "LV HRC Fuse Systems (Sekring NH)",
    series: "SENTRON 3NA / 3NE",
    category: "High Breaking Capacity",
    standard: "IEC 60269",
    description: "Sistem sekring pelebur industri berkemampuan pemutusan arus gangguan ekstrim secara instan untuk proteksi kabel feeder dan komponen semikonduktor.",
    specs: ["Kapasitas Breaking s/d 120kA", "Respon Pemutusan Ultra Cepat", "Ukuran NH000 - NH4"],
    image: "/images/products/fuse-3na-nh.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/fuse",
  },
  {
    id: "power-meter-pac",
    name: "Digital Power Meter",
    series: "SENTRON PAC3120 / PAC3200",
    category: "Energy Management",
    standard: "IEC 61557-12",
    description: "Digital power meter presisi tinggi untuk akuisisi parameter kelistrikan multi-dimensi (V, I, kW, kVA, THD) dan integrasi sistem manajemen energi berbasis IoT/Modbus.",
    specs: ["Akurasi Pengukuran Kelas 0.5", "Deteksi >50 Parameter", "Koneksi Modbus RTU / TCP"],
    image: "/images/products/pac-meter.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/power-meter",
  },
  {
    id: "installation-5tt",
    name: "Modular Installation Devices",
    series: "SENTRON 5TT / 5TE",
    category: "DIN-Rail Modular Control",
    standard: "IEC 61095",
    description: "Perangkat kontrol modular untuk panel distribusi gedung dan pabrik: kontaktor modular bebas bising (hum-free), saklar waktu, dan soket modular.",
    specs: ["Kontaktor Modular 20A - 63A", "Operasi Hening Bebas Getar", "Pemasangan Standar DIN 35mm"],
    image: "/images/products/installation-5tt.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/installation-devices",
  },
];

const siriusProducts: ProductItem[] = [
  {
    id: "contactor-3rt",
    name: "Power Contactors",
    series: "SIRIUS 3RT",
    category: "Motor Switching & Control",
    standard: "IEC 60947-4-1",
    description: "Kontaktor industri tangguh untuk switching motor listrik beban berat, pemanas industri, dan bank kapasitor dengan keandalan jutaan siklus operasi.",
    specs: ["Daya Motor s/d 250 kW (500A)", "Koil Universal AC/DC", "Daya Tahan Jutaan Siklus"],
    image: "/images/products/industrial/contactor-3rt-v2.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/contactor",
  },
  {
    id: "motor-starter-3rm",
    name: "Electronic Motor Starter",
    series: "SIRIUS 3RM1",
    category: "Compact Hybrid Starter",
    standard: "IEC 60947-4-2",
    description: "Solusi starter motor kompak selebar 22.5 mm dengan teknologi hybrid relay-semikonduktor. Hemat ruang hingga 75% di dalam panel kontrol.",
    specs: ["Lebar Hanya 22.5 mm", "Teknologi Hybrid Hemat Daya", "Direct & Reversing Starter"],
    image: "/images/products/industrial/motorstarter-3rm-v2.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/motor-starter",
  },
  {
    id: "softstarter-3rw",
    name: "Soft Starters",
    series: "SIRIUS 3RW",
    category: "Smooth Starting & Stopping",
    standard: "IEC 60947-4-2",
    description: "Pengasutan motor halus tanpa lonjakan arus start (inrush current) dan tanpa water hammer pada sistem pompa industri, konveyor, serta kompresor.",
    specs: ["Bypass Kontaktor Terintegrasi", "Reduksi Lonjakan Mekanis", "Range Daya Luas"],
    image: "/images/products/industrial/softstarter-3rw-v2.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/soft-starter",
  },
  {
    id: "overload-3ru",
    name: "Thermal & Electronic Overload Relays",
    series: "SIRIUS 3RU / 3RB",
    category: "Motor Protection",
    standard: "IEC 60947-4-1",
    description: "Proteksi motor presisi terhadap kenaikan suhu abnormal dan hilangnya fasa listrik. Tersedia tipe bimetal (3RU) dan elektronik presisi tinggi (3RB).",
    specs: ["Range Setting Arus Presisi", "Proteksi Hilang Fasa (Phase Loss)", "Reset Manual / Otomatis"],
    image: "/images/products/industrial/overload-3ru-v2.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/overload-relay",
  },
  {
    id: "mpcb-3rv",
    name: "Motor Starter Protector (MPCB)",
    series: "SIRIUS 3RV2",
    category: "Circuit Breaker for Motors",
    standard: "IEC 60947-2 / 60947-4-1",
    description: "Perangkat kombinasi proteksi motor yang menyatukan fungsi pemutus arus hubung singkat, proteksi beban lebih, dan saklar isolasi dalam satu unit kompak.",
    specs: ["Proteksi Hubung Singkat s/d 100kA", "Fungsi Isolasi Terpadu", "Aksesori Modular Lengkap"],
    image: "/images/products/industrial/mpcb-3rv-v2.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/mpcb",
  },
  {
    id: "relay-3rq",
    name: "Coupling Relays & Monitoring",
    series: "SIRIUS 3RQ / 3RS",
    category: "Signal Conditioning & Relay",
    standard: "IEC 60947-5-1",
    description: "Relai perantara kopling tipis untuk isolasi sinyal antara controller PLC dan aktuator lapangan, serta relai monitoring voltase dan suhu mesin.",
    specs: ["Desain Slim 6.2 mm", "Isolasi Galvanis Aman", "Koil Multi-Voltage"],
    image: "/images/products/industrial/relay-3rq-v2.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/relay",
  },
  {
    id: "safety-3sk",
    name: "Safety Relays",
    series: "SIRIUS 3SK",
    category: "Machine & Personnel Safety",
    standard: "ISO 13849-1 (PLe) / IEC 62061 (SIL 3)",
    description: "Relai keselamatan mesin untuk memantau tombol Emergency Stop, pintu pelindung pengaman (light curtain), dan saklar interlock berstandar keselamatan tertinggi.",
    specs: ["Sertifikasi SIL 3 / PL e", "Konfigurasi Fleksibel", "Ekspansi Output Modular"],
    image: "/images/products/industrial/safety-3sk-v2.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/safety-relay",
  },
  {
    id: "pushbutton-3su",
    name: "Pushbuttons & Pilot Lights",
    series: "SIRIUS ACT 3SU1",
    category: "Command & Signaling",
    standard: "IEC 60947-5-1 / IP69K",
    description: "Tombol tekan, selector switch, emergency stop, dan lampu pilot berdesain estetis berbahan logam murni dengan proteksi ekstrim IP69K terhadap air bertekanan.",
    specs: ["Proteksi Maksimal IP69K", "Bahan Metal & Plastik Kokoh", "Pemasangan Satu Tangan Mudah"],
    image: "/images/products/industrial/pushbutton-3su-v2.png",
    shopUrl: "https://shop.hokiindo.co.id/kategori/pushbutton",
  },
];

const busbarProducts: ProductItem[] = [
  {
    id: "busbar-chassis-ency",
    name: "Busbar Chassis Distribution System",
    series: "ENCY / EHC / ISCY Series",
    category: "Panel Distribution Chassis",
    description: "Sistem distribusi busbar chassis modular untuk pemasangan MCB dan MCCB feeder secara rapi, cepat, dan aman tanpa kabel berantakan di dalam panel distribusi.",
    specs: ["Rating Arus 250A - 630A", "Kompatibel Siemens 5SL & 3VA1", "Sertifikasi Uji Beban Hubung Singkat"],
    image: "/images/products/busbar/busbar-chassis.png",
    shopUrl: "https://shop.hokiindo.co.id/pencarian?q=&category=Busbar%20Chasis&page=1",
  },
];

const lightingProducts: ProductItem[] = [
  {
    id: "lighting-pt200",
    name: "Balloon Light Tower PT-200",
    series: "PT-200 Series",
    category: "Glare-Free Balloon Lighting",
    description: "Lampu penerangan balon industri 360 derajat bebas silau (glare-free) untuk proyek malam hari, perbaikan infrastruktur, terowongan, dan pertambangan.",
    specs: ["Pencahayaan 360° Non-Glare", "Tinggi Tiang Teleskopik 3.2m - 5m", "Konsumsi Daya Rendah"],
    image: "/images/products/lighting/pt200.jpg",
    shopUrl: "https://shop.hokiindo.co.id/produk/PT-200",
  },
  {
    id: "lighting-ps200",
    name: "Portable Floodlight PS-200",
    series: "PS-200 Series",
    category: "Portable Industrial Floodlight",
    description: "Lampu sorot industri portabel dengan bodi kokoh tahan benturan dan cuaca ekstrem untuk area konstruksi dan inspeksi tanggap darurat.",
    specs: ["Lumen Output Tinggi", "Bodi Tahan Cuaca IP65", "Mudah Dipindahkan"],
    image: "/images/products/lighting/ps200.jpg",
    shopUrl: "https://shop.hokiindo.co.id/produk/PS-200",
  },
  {
    id: "lighting-pl300",
    name: "Mobile Light Tower PL-300",
    series: "PL-300 Series",
    category: "Heavy-Duty Lighting Tower",
    description: "Menara lampu bergerak heavy-duty dengan generator dan tiang vertikal hidrolik untuk penerangan area kerja tambang, pelabuhan, dan konstruksi skala besar.",
    specs: ["Cakupan Luas Multi-Arah", "Tiang Teleskopik Kuat", "Operasi Mandiri Tahan Lama"],
    image: "/images/products/lighting/pl300.jpg",
    shopUrl: "https://shop.hokiindo.co.id/produk/PL-300",
  },
];

export default function ProdukPage() {
  const allProducts = [
    ...sentronProducts,
    ...siriusProducts,
    ...busbarProducts,
    ...lightingProducts,
  ];

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Katalog Produk Siemens Low Voltage & Industrial Controls PT Hokiindo Raya",
    description:
      "Daftar lengkap produk elektrikal Siemens Low Voltage dan SIRIUS Industrial Controls yang didistribusikan resmi oleh PT Hokiindo Raya.",
    url: "https://hokiindo.co.id/produk",
    numberOfItems: allProducts.length,
    itemListElement: allProducts.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.description,
        image: `https://hokiindo.co.id${p.image}`,
        brand: {
          "@type": "Brand",
          name: p.id.startsWith("lighting") ? "Hokiindo Lighting" : p.id.startsWith("busbar") ? "Hokiindo" : "Siemens",
        },
        url: p.shopUrl,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />

      {/* ── 1. HERO HEADER WITH HIGH-INTENT COPYWRITING ── */}
      <section className="pt-32 pb-16 bg-white border-b border-[#E5E5E3] relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none select-none opacity-[0.028]"
          style={{
            backgroundImage: "linear-gradient(to right, #003056 1px, transparent 1px), linear-gradient(to bottom, #003056 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Katalog Produk Distribusi</Eyebrow>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#003056] leading-tight mb-4 mt-2">
              Anda Bangun Panelnya,{" "}
              <span className="text-[#FF0800]">Kami Siapkan Komponennya.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
              Rangkaian lengkap komponen kelistrikan Siemens Low Voltage, sistem kontrol motor SIRIUS, busbar chassis, dan portable lighting bergaransi resmi 100% original principal untuk kontraktor, panel builder, dan industri.
            </p>

            {/* Quick Links / Status Banner to Shop */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E5E5E3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#003056]">
                    Toko Online Terintegrasi Real-Time
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  Periksa ketersediaan stok aktual, harga, dan unduh datasheet produk di{" "}
                  <strong className="text-[#003056]">shop.hokiindo.co.id</strong>
                </p>
              </div>

              <a
                href="https://shop.hokiindo.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#FF0800] hover:bg-[#E00700] transition-all shadow-xs shrink-0"
              >
                <span>Buka shop.hokiindo.co.id</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STICKY CATEGORY JUMP-NAV BAR ── */}
      <nav className="sticky top-[74px] sm:top-[78px] z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E5E3] py-3.5 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-0.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 shrink-0 mr-2">
              Kategori:
            </span>
            <a
              href="#sentron"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-[#003056] bg-slate-100 hover:bg-[#003056] hover:text-white transition-colors shrink-0"
            >
              SENTRON Low Voltage
            </a>
            <a
              href="#sirius"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-[#003056] bg-slate-100 hover:bg-[#003056] hover:text-white transition-colors shrink-0"
            >
              SIRIUS Kontrol Industri
            </a>
            <a
              href="#busbar"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-[#003056] bg-slate-100 hover:bg-[#003056] hover:text-white transition-colors shrink-0"
            >
              Busbar Chassis
            </a>
            <a
              href="#lighting"
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-[#003056] bg-slate-100 hover:bg-[#003056] hover:text-white transition-colors shrink-0"
            >
              Mobile &amp; Balloon Lighting
            </a>
            <a
              href="https://shop.hokiindo.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#FF0800] hover:underline shrink-0"
            >
              <span>Lihat Semua di Shop</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ── 3. SECTION 1: SIEMENS SENTRON LOW VOLTAGE POWER DISTRIBUTION ── */}
      <section id="sentron" className="py-16 sm:py-20 bg-white border-b border-[#E5E5E3] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#003056]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#003056]">
                Distribusi &amp; Proteksi Daya
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#003056] mb-3">
              Siemens SENTRON Low Voltage Protection
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Solusi pemutus sirkuit dan proteksi daya terdepan dari gardu trafo utama hingga instalasi sub-panel gedung dan manufaktur. Menjamin kontinuitas pasokan dan keamanan personil dengan standar IEC internasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sentronProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SECTION 2: SIEMENS SIRIUS INDUSTRIAL CONTROLS & MOTOR MANAGEMENT ── */}
      <section id="sirius" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E5E5E3] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF0800]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF0800]">
                Kendali Motor &amp; Otomasi Panel
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#003056] mb-3">
              Siemens SIRIUS Industrial Controls
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Portofolio modular paling komprehensif di dunia untuk switching, starter motor, proteksi beban lebih, relai keselamatan, hingga tombol tekan kontrol mesin industri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {siriusProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SECTION 3: BUSBAR CHASSIS SYSTEM ── */}
      <section id="busbar" className="py-16 sm:py-20 bg-white border-b border-[#E5E5E3] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#003056]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#003056]">
                Sistem Panel Distribusi
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#003056] mb-3">
              Busbar Chassis Distribution System
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Sistem perakitan busbar tembaga presisi untuk panel pembuat (panel builder). Mengeliminasi perakitan kabel jumper manual, mempercepat waktu pengerjaan perakitan panel hingga 50%, dan menjamin kerapian standar pabrikan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {busbarProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SECTION 4: MOBILE & BALLOON LIGHTING TOWERS ── */}
      <section id="lighting" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E5E5E3] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF0800]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF0800]">
                Penerangan Industri &amp; Tambang
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#003056] mb-3">
              Portable &amp; Mobile Industrial Lighting
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Lampu balon dan menara lampu portabel berteknologi non-glare anti-silau untuk pekerjaan shift malam konstruksi, pit pertambangan, perbaikan darurat PLN, dan fasilitas industri berat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {lightingProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. BOTTOM DIRECT LINK TO SHOP & KONSULTASI ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FF0800] text-white p-8 sm:p-14 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/80 block mb-1">
                E-Commerce &amp; Katalog Resmi
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold mb-3 tracking-tight">
                Cek Ketersediaan Stok Komponen di shop.hokiindo.co.id
              </h3>
              <p className="text-sm sm:text-base text-red-50 leading-relaxed font-normal">
                Kunjungi toko online resmi Hokiindo Raya untuk memeriksa stok aktual dan melakukan pemesanan langsung 24/7. Butuh negosiasi proyek atau penawaran BOQ partai besar? Tim sales kami siap membantu.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="https://shop.hokiindo.co.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#FF0800] bg-white hover:bg-slate-50 transition-all shadow-md hover:shadow-lg"
              >
                <span>Buka Toko Online</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#003056] hover:bg-[#00223e] transition-all border border-white/20 shadow-md"
              >
                <span>Konsultasi Proyek</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ product }: { product: ProductItem }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm overflow-hidden flex flex-col group hover:shadow-md hover:border-gray-300 transition-all duration-300">
      {/* Product Image Stage */}
      <div className="relative h-56 bg-slate-50/70 p-6 flex items-center justify-center overflow-hidden border-b border-gray-100">
        <Image
          src={product.image}
          alt={`${product.name} - ${product.series}`}
          width={240}
          height={200}
          className="max-h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Series Badge Top Right */}
        <div className="absolute top-3.5 right-3.5">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-gray-200 text-[#003056] shadow-2xs">
            {product.series}
          </span>
        </div>

        {product.standard && (
          <div className="absolute bottom-3 left-3.5">
            <span className="text-[9.5px] font-medium text-gray-500 bg-white/80 px-2 py-0.5 rounded border border-gray-100">
              {product.standard}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-2">
          <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#FF0800] block mb-1">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-[#003056] group-hover:text-[#FF0800] transition-colors leading-snug">
            {product.name}
          </h3>
        </div>

        <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mb-5 flex-1 font-normal">
          {product.description}
        </p>

        {/* Technical Specs List */}
        <div className="space-y-1.5 mb-6 pt-3 border-t border-gray-100">
          {product.specs.map((spec, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003056]/60 shrink-0" />
              <span>{spec}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2 border-t border-gray-100 mt-auto">
          {/* Main Action: Link to Shop */}
          <a
            href={product.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#FF0800] hover:bg-[#E00700] transition-all shadow-2xs group-hover:gap-2.5"
          >
            <span>Cek Stok di Shop Hokiindo</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Secondary Action: Tanya Teknis */}
          <a
            href={`https://wa.me/628111086180?text=Halo%20PT%20Hokiindo%20Raya,%20saya%20ingin%20konsultasi%20spesifikasi%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.series)}).`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-xs font-bold text-[#003056] bg-slate-50 hover:bg-slate-100 transition-colors border border-gray-200/80"
          >
            <span>Konsultasi Teknis</span>
          </a>
        </div>
      </div>
    </div>
  );
}
