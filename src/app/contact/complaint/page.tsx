"use client";
import { ContactFormWrapper, inputClass, labelClass } from "@/components/contact/ContactFormWrapper";
import Link from "next/link";
import { ArrowRight, MessageSquareWarning, Clock, ShieldCheck } from "lucide-react";

export default function ComplaintPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/contact" className="hover:text-smaa-blue-900 transition-colors flex items-center gap-1">
            <ArrowRight size={16} />
            التواصل والطلبات
          </Link>
          <span>/</span>
          <span className="text-smaa-blue-900 font-semibold">شكاوى واقتراحات</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center mb-4">
                <MessageSquareWarning className="text-white" size={28} />
              </div>
              <h1 className="text-3xl font-extrabold text-smaa-blue-900 mb-3">شكاوى واقتراحات</h1>
              <p className="text-gray-600 leading-relaxed">
                رأيكم يساهم في تطوير خدماتنا. نحرص على تقديم تجربة مهنية وموثوقة، ونرحب باستقبال الشكاوى والملاحظات والاقتراحات ودراستها بعناية. جميع الطلبات تُعالج بسرية تامة.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
              <h3 className="font-bold text-smaa-blue-900 text-lg">التزاماتنا</h3>
              {[
                { icon: Clock, text: "الرد خلال 24 ساعة عمل" },
                { icon: ShieldCheck, text: "معالجة جادة لكل شكوى" },
                { icon: ShieldCheck, text: "سرية تامة لبياناتك" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon className="text-smaa-red-600 mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-smaa-blue-900 mb-6 pb-4 border-b border-gray-100">تفاصيل الشكوى أو الاقتراح</h2>
            <ContactFormWrapper type="complaint" buttonText="إرسال الشكوى أو الاقتراح">
              <div className="md:col-span-2">
                <label className={labelClass}>نوع الطلب</label>
                <select name="complaintType" className={inputClass}>
                  <option value="شكوى">شكوى</option>
                  <option value="اقتراح">اقتراح</option>
                  <option value="ملاحظة">ملاحظة</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>الاسم الكامل <span className="text-smaa-red-600">*</span></label>
                <input name="name" type="text" className={inputClass} required />
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
                <label className={labelClass}>رقم الطلب أو الفاتورة (إن وجد)</label>
                <input name="orderNumber" type="text" className={inputClass} placeholder="اختياري" />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>عنوان الطلب</label>
                <input name="complaintTitle" type="text" className={inputClass} placeholder="ملخص قصير لموضوع الشكوى أو الاقتراح" />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>التفاصيل</label>
                <textarea name="notes" rows={5} className={inputClass} placeholder="اشرح تجربتك أو اقتراحك بالتفصيل..."></textarea>
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>الإجراء المطلوب</label>
                <input name="requiredAction" type="text" className={inputClass} placeholder="مثال: استرداد، تعديل، توضيح..." />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>إرفاق المستندات أو الصور (إن وجدت)</label>
                <input name="attachment" type="file" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 file:mr-0 file:ml-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-600 hover:file:bg-red-100 transition-all cursor-pointer" />
              </div>
            </ContactFormWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
