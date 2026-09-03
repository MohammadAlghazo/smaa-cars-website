"use client";

import { useEffect } from "react";
import { AlertOctagon, RotateCcw } from "lucide-react";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Admin Dashboard Error:", error);
  }, [error]);

  return (
    <div className="h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertOctagon className="text-red-500" size={32} />
        </div>
        
        <h2 className="text-xl font-bold text-gray-800 mb-2">تعذر تحميل هذه الصفحة</h2>
        <p className="text-gray-500 mb-6 text-sm">
          حدث خطأ أثناء جلب البيانات أو معالجتها في هذه الصفحة. الرجاء المحاولة مرة أخرى لاحقاً.
        </p>

        <button
          onClick={() => reset()}
          className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold py-3 px-6 rounded-xl transition-colors"
        >
          <RotateCcw size={18} />
          تحديث البيانات
        </button>
      </div>
    </div>
  );
}
