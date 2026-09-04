"use client";
import Image from "next/image";

const brands = [
  { name: "Toyota", url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Toyota.svg" },
  { name: "Hyundai", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg" },
  { name: "Kia", url: "https://upload.wikimedia.org/wikipedia/commons/4/47/KIA_logo2.svg" },
  { name: "Honda", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg" },
  { name: "Audi", url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg" },
  { name: "Mercedes", url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
  { name: "BMW", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Ford", url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg" },
];

export default function BrandMarquee() {
  return (
    <div className="py-12 bg-white border-b border-gray-100 relative flex flex-col items-center">
      <p className="text-sm font-bold text-gray-400 mb-8 uppercase tracking-widest text-center px-4">
        نستورد أفضل العلامات التجارية العالمية
      </p>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-all grayscale hover:grayscale-0 duration-300"
            >
              <div className="relative w-16 h-10 md:w-24 md:h-12 lg:w-28 lg:h-14">
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
