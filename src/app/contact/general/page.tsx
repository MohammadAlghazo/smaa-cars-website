"use client";
import { ContactFormWrapper, inputClass, labelClass } from "@/components/contact/ContactFormWrapper";
import Link from "next/link";
import { ArrowRight, MessageCircle, Clock, Phone, Mail, MapPin } from "lucide-react";

export default function GeneralContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/contact" className="hover:text-smaa-blue-900 transition-colors flex items-center gap-1">
            <ArrowRight size={16} />
            التواصل والطلبات
          </Link>
          <span>/</span>
          <span className="text-smaa-blue-900 font-semibold">تواصل عام</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-4">
                <MessageCircle className="text-white" size={28} />
              </div>
              <h1 className="text-3xl font-extrabold text-smaa-blue-900 mb-3">تواصل معنا</h1>
              <p className="text-gray-600 leading-relaxed">
                نحن هنا لخدمتكم. لأي استفسار حول خدماتنا أو طريقة عملنا، فريقنا مستعد للإجابة على جميع تساؤلاتك.
              </p>
            </div>

            {/* Contact Info from project spec */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-5">
              <h3 className="font-bold text-smaa-blue-900 text-lg">معلومات التواصل</h3>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-smaa-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-smaa-blue-900" size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">رقم التواصل</p>
                  <a href="tel:0565848380" dir="ltr" className="font-bold text-smaa-blue-900 hover:text-smaa-red-600 transition-colors">
                    0565848380
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-smaa-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-smaa-blue-900" size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">البريد الإلكتروني</p>
                  <a href="mailto:info@smaacars.sa" dir="ltr" className="font-bold text-smaa-blue-900 hover:text-smaa-red-600 transition-colors text-sm">
                    info@smaacars.sa
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-smaa-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-smaa-blue-900" size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">الموقع</p>
                  <p className="font-bold text-smaa-blue-900 text-sm">الرياض – المملكة العربية السعودية</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-smaa-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-smaa-blue-900" size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">ساعات الدوام</p>
                  <p className="font-bold text-smaa-blue-900 text-sm">الأحد – الخميس</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-smaa-blue-900 mb-6 pb-4 border-b border-gray-100">أرسل لنا رسالتك</h2>
            <ContactFormWrapper type="general" buttonText="إرسال">
              <div>
                <label className={labelClass}>الاسم <span className="text-smaa-red-600">*</span></label>
                <input name="name" type="text" className={inputClass} required />
              </div>
              <div>
                <label className={labelClass}>رقم الجوال <span className="text-smaa-red-600">*</span></label>
                <input name="phone" type="tel" dir="ltr" className={`${inputClass} text-right`} required />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>البريد الإلكتروني <span className="text-smaa-red-600">*</span></label>
                <input name="email" type="email" dir="ltr" className={`${inputClass} text-right`} required />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>نوع الاستفسار</label>
                <input name="collaborationType" type="text" className={inputClass} placeholder="مثال: استفسار عن خدمة الاستيراد" />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>الرسالة</label>
                <textarea name="notes" rows={5} className={inputClass} placeholder="اكتب رسالتك هنا..."></textarea>
              </div>
            </ContactFormWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
