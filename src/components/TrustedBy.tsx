import Image from "next/image";
import clients from "../../data/clients.json";

export default function TrustedBy() {
  // Duplicate for seamless 0% to -50% infinite marquee loop
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="relative bg-white pt-8 pb-10 sm:pb-12 border-b border-[#E5E5E3] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-center mb-6">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-gray-500">
            Dipercaya oleh:
          </p>
        </div>

        {/* Marquee Wrapper with soft edge fades */}
        <div className="relative w-full overflow-hidden py-3">
          {/* Edge Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Track — Clean normalized logos */}
          <div 
            className="flex items-center gap-8 sm:gap-12 w-max animate-marquee-left hover:[animation-play-state:paused]"
            style={{ animationDuration: "38s" }}
          >
            {marqueeItems.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex items-center justify-center shrink-0 w-36 sm:w-44 h-12 px-2 group cursor-pointer"
                title={client.name}
              >
                <div className="relative w-full h-full flex items-center justify-center grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={48}
                    className="max-h-8 sm:max-h-10 max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
