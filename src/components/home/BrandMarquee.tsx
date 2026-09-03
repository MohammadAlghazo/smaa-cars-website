"use client";
import Image from "next/image";

const brands = [
  { name: "Toyota", url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Toyota.svg" },
  { name: "Hyundai", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg" },
  { name: "Kia", url: "https://upload.wikimedia.org/wikipedia/commons/4/47/KIA_logo2.svg" },
  { name: "Genesis", url: "https://upload.wikimedia.org/wikipedia/commons/4/43/Genesis_Logo.svg" },
  { name: "Lexus", url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Lexus_logo.svg" },
  { name: "Mercedes", url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
  { name: "BMW", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Ford", url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg" },
];

export default function BrandMarquee() {
  // triple the list so the seamless loop works perfectly
  const list = [...brands, ...brands, ...brands];

  return (
    <div className="py-10 bg-white border-b border-gray-100 overflow-hidden relative flex flex-col items-center">
      <p className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest">
        نستورد أفضل العلامات التجارية العالمية
      </p>

      {/* Fade edges */}
      <div className="absolute left-0 top-12 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-12 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="w-full overflow-hidden">
        {/* animate-marquee moves from 0 → -33.33% (right to left) */}
        <div
          className="flex w-max animate-marquee hover:[animation-play-state:paused]"
          style={{ direction: "ltr" }}
        >
          {list.map((brand, i) => (
            <div
              key={i}
              className="mx-10 md:mx-16 flex items-center justify-center opacity-40 hover:opacity-100 transition-all grayscale hover:grayscale-0 duration-300 flex-shrink-0"
            >
              <div className="relative w-20 h-12 md:w-28 md:h-14">
                <Image
                  src={brand.url}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
