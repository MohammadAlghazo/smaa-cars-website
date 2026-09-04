"use client";
import { ContactFormWrapper, inputClass, labelClass } from "@/components/contact/ContactFormWrapper";
import Link from "next/link";
import { ArrowRight, User, ShieldCheck, Truck } from "lucide-react";

export default function IndividualRequestPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <Link href="/contact" className="hover:text-smaa-red-600 transition-colors flex items-center gap-1 font-bold">
            <ArrowRight size={16} />
            التواصل والطلبات
          </Link>
          <span>/</span>
          <span className="text-smaa-blue-900 font-bold">طلب الأفراد</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <div className="w-14 h-14 bg-smaa-blue-900 rounded-sm flex items-center justify-center mb-6 shadow-sm">
                <User className="text-white" size={28} strokeWidth={1.5} />
              </div>
              <h1 className="text-3xl font-extrabold text-smaa-blue-900 mb-4 tracking-tight">طلب الأفراد</h1>
              <p className="text-gray-600 leading-relaxed font-light text-sm">
                سواء كنت تبحث عن سيارة متوفرة داخل المملكة أو ترغب في استيراد سيارة من الخارج، يمكنك إرسال تفاصيل طلبك وسيتواصل معك فريقنا لدراسة الخيارات المتاحة وتقديم الاستشارة.
              </p>
            </div>
            
            <div className="bg-white rounded-sm p-8 border border-gray-100 shadow-sm space-y-5">
              <h3 className="font-bold text-smaa-blue-900 text-lg">لماذا سما؟</h3>
              {[
                { icon: ShieldCheck, text: "فحص شامل ودقيق للسيارة" },
                { icon: ShieldCheck, text: "تخليص جمركي متكامل" },
                { icon: ShieldCheck, text: "شفافية تامة في التكاليف" },
                { icon: Truck, text: "توصيل آمن حتى بابك" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon className="text-smaa-red-600 mt-0.5 flex-shrink-0" size={18} strokeWidth={1.5} />
                  <p className="text-sm font-light text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactFormWrapper type="individual" buttonText="إرسال طلب سيارة">
              <div className="md:col-span-2 mb-4 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-smaa-blue-900">بيانات الطلب</h2>
              </div>
              
              <div>
                <label className={labelClass}>الاسم الكامل <span className="text-smaa-red-600">*</span></label>
                <input name="name" type="text" className={inputClass} placeholder="اكتب اسمك الكامل" required />
              </div>
              <div>
                <label className={labelClass}>رقم الجوال <span className="text-smaa-red-600">*</span></label>
                <input name="phone" type="tel" dir="ltr" className={`${inputClass} text-right`} placeholder="05x xxx xxxx" required />
              </div>
              <div>
                <label className={labelClass}>المدينة</label>
                <input name="city" type="text" className={inputClass} placeholder="مثال: الرياض" />
              </div>
              <div>
                <label className={labelClass}>نوع الطلب</label>
                <select name="carCategory" className={inputClass}>
                  <option value="استيراد من الخارج">استيراد من الخارج</option>
                  <option value="شراء داخل المملكة">شراء داخل المملكة</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>نوع السيارة (الماركة)</label>
                <input name="carType" type="text" className={inputClass} placeholder="مثال: تويوتا، هيونداي، مرسيدس" />
              </div>
              <div>
                <label className={labelClass}>الموديل</label>
                <input name="carModel" type="text" className={inputClass} placeholder="مثال: 2025" />
              </div>
              <div>
                <label className={labelClass}>الفئة المطلوبة</label>
                <input name="carCategory2" type="text" className={inputClass} placeholder="مثال: SUV، سيدان" />
              </div>
              <div>
                <label className={labelClass}>اللون المفضل</label>
                <input name="carColor" type="text" className={inputClass} placeholder="مثال: أبيض، أسود" />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>الميزانية التقريبية</label>
                <input name="budget" type="text" className={inputClass} placeholder="مثال: 150,000 ريال" />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>ملاحظات إضافية</label>
                <textarea name="notes" rows={4} className={inputClass} placeholder="أي تفاصيل أخرى تود إضافتها..."></textarea>
              </div>
            </ContactFormWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
