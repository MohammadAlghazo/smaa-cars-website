"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Pagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  if (totalPages <= 1) return null;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-12" dir="ltr">
      <button
        onClick={() => router.push(createPageURL(currentPage - 1))}
        disabled={currentPage <= 1}
        className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-smaa-blue-900 text-smaa-blue-900 bg-white hover:bg-smaa-blue-900 hover:text-white disabled:border-gray-200 disabled:text-gray-300 disabled:hover:bg-white disabled:cursor-not-allowed transition-all shadow-sm"
      >
        <ChevronLeft size={20} strokeWidth={2.5}/>
      </button>
      
      <span className="px-4 text-lg font-bold text-smaa-blue-900">
        صفحة {currentPage} من {totalPages}
      </span>

      <button
        onClick={() => router.push(createPageURL(currentPage + 1))}
        disabled={currentPage >= totalPages}
        className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-smaa-blue-900 text-smaa-blue-900 bg-white hover:bg-smaa-blue-900 hover:text-white disabled:border-gray-200 disabled:text-gray-300 disabled:hover:bg-white disabled:cursor-not-allowed transition-all shadow-sm"
      >
        <ChevronRight size={20} strokeWidth={2.5}/>
      </button>
    </div>
  );
}
