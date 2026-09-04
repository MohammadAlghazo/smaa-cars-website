"use client";
import { ContactFormWrapper, inputClass, labelClass } from "@/components/contact/ContactFormWrapper";
import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Users } from "lucide-react";

export default function CorporateRequestPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <Link href="/contact" className="hover:text-smaa-red-600 transition-colors flex items-center gap-1 font-bold">
            <ArrowRight size={16} />
            التواصل والطلبات
          </Link>
          <span>/</span>
          <span className="text-smaa-blue-900 font-bold">طلب الشركات</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <div className="w-14 h-14 bg-smaa-blue-900 rounded-sm flex items-center justify-center mb-6 shadow-sm">
                <Building2 className="text-white" size={28} strokeWidth={1.5} />
              </div>
              <h1 className="text-3xl font-extrabold text-smaa-blue-900 mb-4 tracking-tight">طلب الشركات</h1>
              <p className="text-gray-600 leading-relaxed font-light text-sm">
                نقدّم حلول توريد سيارات مخصصة للجهات التجارية، شركات تأجير السيارات، معارض السيارات، والجهات الراغبة في تجهيز أساطيلها التجارية.
              </p>
            </div>
            
            <div className="bg-white rounded-sm p-8 border border-gray-100 shadow-sm space-y-5">
              <h3 className="font-bold text-smaa-blue-900 text-lg">مميزات العملاء المؤسسيين</h3>
              {[
                { icon: ShieldCheck, text: "عروض أسعار مخصصة وتنافسية" },
                { icon: ShieldCheck, text: "توريد أساطيل بكميات مرنة" },
                { icon: Users, text: "مدير حساب مخصص لمتابعة طلباتكم" },
                { icon: ShieldCheck, text: "فواتير رسمية ووثائق كاملة" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon className="text-smaa-red-600 mt-0.5 flex-shrink-0" size={18} strokeWidth={1.5} />
                  <p className="text-sm font-light text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactFormWrapper type="corporate" buttonText="طلب عرض أسعار">
              <div className="md:col-span-2 mb-4 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-smaa-blue-900">طلب عرض للشركات</h2>
              </div>
              
              <div>
                <label className={labelClass}>اسم الشركة أو المنشأة <span className="text-smaa-red-600">*</span></label>
                <input name="companyName" type="text" className={inputClass} placeholder="مثال: شركة الخليج للتأجير" required />
              </div>
              <div>
                <label className={labelClass}>اسم المسؤول <span className="text-smaa-red-600">*</span></label>
                <input name="managerName" type="text" className={inputClass} placeholder="اسم مسؤول التواصل" required />
              </div>
              <div>
                <label className={labelClass}>رقم الجوال <span className="text-smaa-red-600">*</span></label>
                <input name="phone" type="tel" dir="ltr" className={`${inputClass} text-right`} placeholder="05x xxx xxxx" required />
              </div>
              <div>
                <label className={labelClass}>البريد الإلكتروني <span className="text-smaa-red-600">*</span></label>
                <input name="email" type="email" dir="ltr" className={`${inputClass} text-right`} placeholder="info@company.com" required />
              </div>
              <div>
                <label className={labelClass}>المدينة</label>
                <input name="city" type="text" className={inputClass} placeholder="مثال: جدة" />
              </div>
              <div>
                <label className={labelClass}>نوع النشاط التجاري</label>
                <input name="activityType" type="text" className={inputClass} placeholder="مثال: تأجير سيارات، مقاولات..." />
              </div>
              <div>
                <label className={labelClass}>نوع السيارات المطلوبة</label>
                <input name="carType" type="text" className={inputClass} placeholder="مثال: SUV، شاحنات نقل" />
              </div>
              <div>
                <label className={labelClass}>الموديلات والفئات</label>
                <input name="carModels" type="text" className={inputClass} placeholder="مثال: لاند كروزر 2025" />
              </div>
              <div>
                <label className={labelClass}>الكمية المطلوبة</label>
                <input name="carQuantity" type="text" className={inputClass} placeholder="مثال: 5 سيارات" />
              </div>
              <div>
                <label className={labelClass}>الميزانية التقريبية</label>
                <input name="budget" type="text" className={inputClass} placeholder="مثال: 500,000 ريال" />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>ملاحظات ومتطلبات إضافية</label>
                <textarea name="notes" rows={4} className={inputClass} placeholder="أي تفاصيل أو مواصفات خاصة بأسطولكم..."></textarea>
              </div>
            </ContactFormWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
