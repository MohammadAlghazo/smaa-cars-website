import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      <div className="relative w-40 h-16 mb-8 animate-pulse">
        <Image src="/logo.png" alt="SMAA CARS" fill className="object-contain" unoptimized />
      </div>
      <Loader2 className="animate-spin text-smaa-red-600" size={40} />
    </div>
  );
}
