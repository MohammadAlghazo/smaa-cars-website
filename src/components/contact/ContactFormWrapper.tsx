"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

export const inputClass = "bg-white border border-gray-200 rounded-sm px-4 py-3 text-gray-900 focus:outline-none focus:border-smaa-blue-900 focus:ring-1 focus:ring-smaa-blue-900 transition-all w-full placeholder:text-gray-400 text-sm";
export const labelClass = "text-gray-700 font-bold text-sm mb-2 block";

type StatusMsg = { type: "success" | "error"; text: string } | null;

export function ContactFormWrapper({
  type,
  buttonText = "إرسال الطلب",
  children,
}: {
  type: string;
  buttonText?: string;
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<StatusMsg>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMsg(null);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string | null> = { type };
    formData.forEach((value, key) => {
      data[key] = value ? value.toString() : null;
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatusMsg({
          type: "success",
          text: "تم استلام طلبكم بنجاح، وسيتم مراجعته من الفريق المختص والتواصل معكم في أقرب وقت.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        const err = await res.json();
        setStatusMsg({ type: "error", text: err.error || "حدث خطأ، يرجى المحاولة لاحقاً." });
      }
    } catch {
      setStatusMsg({ type: "error", text: "حدث خطأ في الاتصال، يرجى المحاولة لاحقاً." });
    } finally {
      setIsLoading(false);
    }
  };

  if (statusMsg?.type === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20 text-center bg-gray-50 border border-gray-100 rounded-sm"
      >
        <div className="w-20 h-20 bg-green-50 rounded-sm flex items-center justify-center mb-6">
          <CheckCircle2 className="text-green-600" size={40} strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">تم الإرسال بنجاح!</h3>
        <p className="text-gray-500 max-w-md leading-relaxed font-light">{statusMsg.text}</p>
        <button
          onClick={() => setStatusMsg(null)}
          className="mt-8 px-8 py-3 bg-smaa-blue-900 text-white font-bold rounded-sm hover:bg-smaa-blue-800 transition-colors"
        >
          إرسال طلب آخر
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 md:p-10 rounded-sm border border-gray-100 shadow-sm">
      {statusMsg?.type === "error" && (
        <div className="md:col-span-2 p-4 bg-red-50 border border-red-100 text-red-600 rounded-sm flex items-center gap-3 text-sm font-bold">
          <p>{statusMsg.text}</p>
        </div>
      )}

      {children}

      <div className="md:col-span-2 mt-6">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 bg-smaa-red-600 hover:bg-smaa-red-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-sm transition-all shadow-lg active:scale-95 group"
        >
          {isLoading ? <Loader2 className="animate-spin" size={24} /> : buttonText}
        </button>
      </div>
    </form>
  );
}
