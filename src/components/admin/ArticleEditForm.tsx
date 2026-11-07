"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { Loader2, ArrowRight, Save, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ArticleData {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author?: string;
  isPublished: boolean;
}

export default function ArticleEditForm({ article }: { article: ArticleData }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [title, setTitle] = useState(article.title);
  const [slug, setSlug] = useState(article.slug);
  const [author, setAuthor] = useState(article.author || "SMAA CARS");
  const [excerpt, setExcerpt] = useState(article.excerpt);
  const [content, setContent] = useState(article.content);
  const [coverImage, setCoverImage] = useState(article.coverImage);
  const [isPublished, setIsPublished] = useState(article.isPublished);

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
        setCoverImage(data.url);
      }
    } catch {
      setError("فشل رفع الصورة");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!coverImage.trim()) {
      setError("يرجى رفع أو إضافة صورة غلاف للمقال أولاً.");
      return;
    }

    if (!content.trim()) {
      setError("محتوى المقال مطلوب.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`/api/articles/${article.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title, slug, author, excerpt, content, coverImage, isPublished
        }),
      });

      if (res.ok) {
        router.push("/admin/articles");
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
          <Link href="/admin/articles" className="inline-flex items-center gap-2 text-gray-500 hover:text-smaa-blue-900 transition-colors mb-2">
            <ArrowRight size={16} />
            العودة للمقالات
          </Link>
          <h1 className="text-3xl font-bold text-smaa-blue-900">تعديل المقال</h1>
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
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="mb-6">
              <label className={labelClass}>عنوان المقال <span className="text-smaa-red-600">*</span></label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={inputClass} 
                required 
              />
            </div>
            
            <div className="mb-6">
              <label className={labelClass}>رابط المقال (Slug) <span className="text-smaa-red-600">*</span></label>
              <input 
                type="text" 
                dir="ltr"
                value={slug}
                onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                className={`${inputClass} text-left font-mono`} 
                required 
              />
              <p className="text-xs text-gray-500 mt-1">الرابط بالإنجليزية أو العربية الذي سيظهر في شريط العنوان.</p>
            </div>

            <div className="mb-6">
              <label className={labelClass}>الكاتب <span className="text-smaa-red-600">*</span></label>
              <input 
                type="text" 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className={inputClass} 
                required 
                placeholder="اسم الكاتب"
              />
            </div>

            <div>
              <label className={labelClass}>محتوى المقال <span className="text-smaa-red-600">*</span></label>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <RichTextEditor value={content} onChange={setContent} />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg border-b pb-2 mb-4 text-smaa-blue-900">نشر المقال</h3>
            <div className="flex items-center gap-3 mb-6">
              <input 
                type="checkbox" 
                id="isPublished"
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
                className="w-5 h-5 accent-smaa-red-600"
              />
              <label htmlFor="isPublished" className="font-medium cursor-pointer">نشر المقال فوراً</label>
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-smaa-blue-900 hover:bg-smaa-blue-800 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : (
                <>
                  <Save size={20} /> حفظ التعديلات
                </>
              )}
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg border-b pb-2 mb-4 text-smaa-blue-900">صورة المقال</h3>
            
            {coverImage && (
              <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 relative aspect-video">
                <Image src={coverImage} alt="Cover" fill className="object-cover" unoptimized />
              </div>
            )}
            
            <div className="mb-4">
              <label className={labelClass}>رابط الصورة (URL)</label>
              <input 
                type="text" 
                dir="ltr"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                className={`${inputClass} text-left mb-2`} 
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

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg border-b pb-2 mb-4 text-smaa-blue-900">مقتطف قصير</h3>
            <label className="block text-xs text-gray-500 mb-2">وصف قصير للمقال يظهر في الصفحة الرئيسية...</label>
            <textarea 
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className={inputClass}
              rows={4}
              required
            ></textarea>
          </div>

        </div>

      </form>
    </div>
  );
}
