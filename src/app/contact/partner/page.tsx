"use client";
import { ContactFormWrapper, inputClass, labelClass } from "@/components/contact/ContactFormWrapper";
import Link from "next/link";
import { ArrowRight, Handshake, Globe, TrendingUp } from "lucide-react";

export default function PartnerRequestPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/contact" className="hover:text-smaa-blue-900 transition-colors flex items-center gap-1">
            <ArrowRight size={16} />
            التواصل والطلبات
          </Link>
          <span>/</span>
          <span className="text-smaa-blue-900 font-semibold">شراكة وتعاون</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mb-4">
                <Handshake className="text-white" size={28} />
              </div>
              <h1 className="text-3xl font-extrabold text-smaa-blue-900 mb-3">شراكة وتعاون</h1>
              <p className="text-gray-600 leading-relaxed">
                نرحب بالتعاون مع الشركات والمؤسسات والجهات العاملة في قطاعات السيارات والتوريد والخدمات المساندة. أرسل لنا مقترحك وسنتواصل معك.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
              <h3 className="font-bold text-smaa-blue-900 text-lg">فرص التعاون</h3>
              {[
                { icon: Globe, text: "شراكة مع موردين دوليين" },
                { icon: TrendingUp, text: "تعاون مع شركات لوجستية" },
                { icon: Handshake, text: "اتفاقيات حصرية مع معارض السيارات" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon className="text-amber-500 mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-smaa-blue-900 mb-6 pb-4 border-b border-gray-100">بيانات مقترح الشراكة</h2>
            <ContactFormWrapper type="partner" buttonText="إرسال طلب تعاون">
              <div>
                <label className={labelClass}>اسم الشركة أو الجهة <span className="text-smaa-red-600">*</span></label>
                <input name="companyName" type="text" className={inputClass} required />
              </div>
              <div>
                <label className={labelClass}>اسم مقدم الطلب <span className="text-smaa-red-600">*</span></label>
                <input name="applicantName" type="text" className={inputClass} required />
              </div>
              <div>
                <label className={labelClass}>المسمى الوظيفي</label>
                <input name="jobTitle" type="text" className={inputClass} placeholder="مثال: مدير تطوير الأعمال" />
              </div>
              <div>
                <label className={labelClass}>رقم الجوال <span className="text-smaa-red-600">*</span></label>
                <input name="phone" type="tel" dir="ltr" className={`${inputClass} text-right`} required />
              </div>
              <div>
                <label className={labelClass}>البريد الإلكتروني <span className="text-smaa-red-600">*</span></label>
                <input name="email" type="email" dir="ltr" className={`${inputClass} text-right`} required />
              </div>
              <div>
                <label className={labelClass}>المدينة والدولة</label>
                <input name="country" type="text" className={inputClass} placeholder="مثال: الرياض، المملكة العربية السعودية" />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>نوع التعاون المقترح</label>
                <input name="collaborationType" type="text" className={inputClass} placeholder="مثال: توريد، تسويق، لوجستيات..." />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>نبذة عن الشركة</label>
                <textarea name="companyBrief" rows={3} className={inputClass} placeholder="وصف مختصر عن نشاط شركتك وعدد سنوات الخبرة..."></textarea>
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>تفاصيل المقترح</label>
                <textarea name="proposalDetails" rows={5} className={inputClass} placeholder="اشرح لنا فكرة التعاون بالتفصيل..."></textarea>
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>إرفاق الملف التعريفي أو العرض (إن وجد)</label>
                <input name="attachment" type="file" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 file:mr-0 file:ml-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-600 hover:file:bg-amber-100 transition-all cursor-pointer" />
              </div>
            </ContactFormWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
