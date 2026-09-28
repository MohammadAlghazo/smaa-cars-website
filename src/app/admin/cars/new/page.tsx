"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { Loader2, ArrowRight, Save, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NewCarPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        setMainImage(data.url);
      }
    } catch {
      setError("فشل رفع الصورة");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!modelYear.trim() || !/^\d{4}$/.test(modelYear.trim())) {
      setError("سنة الصنع يجب أن تتكون من 4 أرقام (مثال: 2024).");
      return;
    }

    if (!mainImage.trim()) {
      setError("يرجى رفع صورة للسيارة أو إدخال رابط الصورة أولاً.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, brand, modelYear, mileage, price, description, mainImage, isAvailable
        }),
      });

      if (res.ok) {
        router.push("/admin/cars");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "حدث خطأ أثناء الحفظ");
      }
    } catch {
      setError("حدث خطأ في الاتصال");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = "w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-smaa-blue-700 focus:ring-1 focus:ring-smaa-blue-700 transition-colors bg-white";
  const labelClass = "block text-sm font-bold text-gray-700 mb-2";

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Link href="/admin/cars" className="inline-flex items-center gap-2 text-gray-500 hover:text-smaa-blue-900 transition-colors mb-2">
            <ArrowRight size={16} />
            العودة للسيارات
          </Link>
          <h1 className="text-3xl font-bold text-smaa-blue-900">إضافة سيارة جديدة</h1>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="md:col-span-2">
              <label className={labelClass}>اسم السيارة كامل (مثال: Hyundai The New Kona) <span className="text-smaa-red-600">*</span></label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} required />
            </div>
            
            <div>
              <label className={labelClass}>الماركة (مثال: Hyundai) <span className="text-smaa-red-600">*</span></label>
              <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} className={inputClass} required />
            </div>

            <div>
              <label className={labelClass}>سنة الصنع <span className="text-smaa-red-600">*</span></label>
              <input type="text" value={modelYear} onChange={(e) => setModelYear(e.target.value)} className={inputClass} required />
            </div>

            <div>
              <label className={labelClass}>الممشى <span className="text-smaa-red-600">*</span></label>
              <input type="text" value={mileage} onChange={(e) => setMileage(e.target.value)} className={inputClass} required placeholder="مثال: 94,712 كم" />
            </div>

            <div>
              <label className={labelClass}>السعر التقريبي (اختياري)</label>
              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className={inputClass} />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>وصف ومواصفات السيارة <span className="text-smaa-red-600">*</span></label>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <RichTextEditor value={description} onChange={setDescription} />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg border-b pb-2 mb-4 text-smaa-blue-900">نشر وعرض السيارة</h3>
            <div className="flex items-center gap-3 mb-6">
              <input 
                type="checkbox" 
                id="isAvailable"
                checked={isAvailable}
                onChange={(e) => setIsAvailable(e.target.checked)}
                className="w-5 h-5 accent-smaa-red-600"
              />
              <label htmlFor="isAvailable" className="font-medium cursor-pointer">السيارة متاحة للعرض</label>
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-smaa-blue-900 hover:bg-smaa-blue-800 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : (
                <>
                  <Save size={20} /> حفظ بيانات السيارة
                </>
              )}
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg border-b pb-2 mb-4 text-smaa-blue-900">الصورة الرئيسية للسيارة</h3>
            
            {mainImage && (
              <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 relative aspect-video">
                <Image src={mainImage} alt="Cover" fill className="object-cover" unoptimized />
              </div>
            )}
            
            <div className="mb-4">
              <label className={labelClass}>رابط الصورة (URL)</label>
              <input 
                type="text" 
                dir="ltr"
                value={mainImage}
                onChange={(e) => setMainImage(e.target.value)}
                className={`${inputClass} text-left mb-2`} 
                placeholder="https://..."
              />
            </div>

            <div className="relative">
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="w-full border-2 border-dashed border-gray-300 hover:border-smaa-blue-500 rounded-lg p-4 flex flex-col items-center justify-center text-gray-500 transition-colors">
                <ImageIcon size={24} className="mb-2" />
                <span className="text-sm font-medium">أو ارفع صورة من جهازك</span>
              </div>
            </div>
          </div>

        </div>

      </form>
    </div>
  );
}
