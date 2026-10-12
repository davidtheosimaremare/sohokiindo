// Reusable Eyebrow label — mirip style Axiom Power
// Contoh: <Eyebrow>kategori produk</Eyebrow>

interface EyebrowProps {
  children: React.ReactNode;
  light?: boolean; // untuk background gelap (navy)
}

export default function Eyebrow({ children, light = false }: EyebrowProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span
        className="eyebrow-mark w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: "#FF0800" }}
      />
      <span
        className={`text-xs font-semibold uppercase tracking-widest ${
          light ? "text-blue-300" : "text-gray-400"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
