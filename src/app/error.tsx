"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4" dir="rtl">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="text-smaa-red-600" size={40} />
        </div>
        
        <h1 className="text-2xl font-bold text-smaa-blue-900 mb-2">عذراً، حدث خطأ ما!</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          نعتذر عن هذا الخلل غير المتوقع. لقد قمنا بتسجيل الخطأ وجاري العمل على حله. يرجى المحاولة مرة أخرى أو العودة للصفحة الرئيسية.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full flex items-center justify-center gap-2 bg-smaa-blue-900 hover:bg-smaa-blue-800 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md active:scale-95"
          >
            <RotateCcw size={20} />
            إعادة المحاولة
          </button>
          
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-smaa-blue-900 font-bold py-3.5 px-6 rounded-xl transition-all active:scale-95"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}
