"use client";
import { ContactFormWrapper, inputClass, labelClass } from "@/components/contact/ContactFormWrapper";
import Link from "next/link";
import { ArrowRight, MessageSquareWarning, Clock, ShieldCheck } from "lucide-react";

export default function ComplaintPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <Link href="/contact" className="hover:text-smaa-red-600 transition-colors flex items-center gap-1 font-bold">
            <ArrowRight size={16} />
            التواصل والطلبات
          </Link>
          <span>/</span>
          <span className="text-smaa-blue-900 font-bold">شكاوى واقتراحات</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <div className="w-14 h-14 bg-smaa-red-600 rounded-sm flex items-center justify-center mb-6 shadow-sm">
                <MessageSquareWarning className="text-white" size={28} strokeWidth={1.5} />
              </div>
              <h1 className="text-3xl font-extrabold text-smaa-blue-900 mb-4 tracking-tight">شكاوى واقتراحات</h1>
              <p className="text-gray-600 leading-relaxed font-light text-sm">
                رأيكم هو البوصلة التي توجه خدماتنا. نحرص على تقديم تجربة مهنية وموثوقة، ونرحب باستقبال أي شكاوى أو اقتراحات لتطوير العمل.
              </p>
            </div>
            
            <div className="bg-white rounded-sm p-8 border border-gray-100 shadow-sm space-y-5">
              <h3 className="font-bold text-smaa-blue-900 text-lg">التزاماتنا تجاهكم</h3>
              {[
                { icon: Clock, text: "الرد المبدئي خلال 24 ساعة عمل" },
                { icon: ShieldCheck, text: "معالجة جادة وموضوعية لكل شكوى" },
                { icon: ShieldCheck, text: "سرية تامة لبياناتك الشخصية" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon className="text-smaa-red-600 mt-0.5 flex-shrink-0" size={18} strokeWidth={1.5} />
                  <p className="text-sm font-light text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactFormWrapper type="complaint" buttonText="إرسال الشكوى أو الاقتراح">
              <div className="md:col-span-2 mb-4 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-smaa-blue-900">تفاصيل الرسالة</h2>
              </div>
              
              <div className="md:col-span-2">
                <label className={labelClass}>نوع الطلب</label>
                <select name="complaintType" className={inputClass}>
                  <option value="شكوى">شكوى</option>
                  <option value="اقتراح">اقتراح تطويري</option>
                  <option value="ملاحظة">ملاحظة عامة</option>
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
                <label className={labelClass}>عنوان الرسالة</label>
                <input name="complaintTitle" type="text" className={inputClass} placeholder="ملخص قصير لموضوع الشكوى أو الاقتراح" />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>التفاصيل</label>
                <textarea name="notes" rows={5} className={inputClass} placeholder="اشرح تجربتك أو اقتراحك بالتفصيل الكامل..."></textarea>
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>الإجراء أو الحل المتوقع</label>
                <input name="requiredAction" type="text" className={inputClass} placeholder="مثال: استرداد، تعديل إجراء، توضيح مشكلة..." />
              </div>
            </ContactFormWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
