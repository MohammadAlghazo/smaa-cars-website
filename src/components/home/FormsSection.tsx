"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Building, Handshake, MessageSquareWarning, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";

type TabId = "individual" | "corporate" | "partner" | "complaint" | "general";

export default function FormsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("individual");
  const [isLoading, setIsLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const tabs = [
    { id: "individual", label: "طلب أفراد", icon: <User size={18} /> },
    { id: "corporate", label: "طلب شركات", icon: <Building size={18} /> },
    { id: "partner", label: "شراكة وتعاون", icon: <Handshake size={18} /> },
    { id: "complaint", label: "شكاوى واقتراحات", icon: <MessageSquareWarning size={18} /> },
    { id: "general", label: "تواصل معنا", icon: <MessageCircle size={18} /> },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMsg(null);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string | null> = { type: activeTab };
    
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
        setStatusMsg({ type: 'success', text: "تم استلام طلبكم بنجاح، وسيتم مراجعته من الفريق المختص والتواصل معكم عند الحاجة." });
        (e.target as HTMLFormElement).reset();
      } else {
        const err = await res.json();
        setStatusMsg({ type: 'error', text: err.error || "حدث خطأ، يرجى المحاولة لاحقاً." });
      }
    } catch {
      setStatusMsg({ type: 'error', text: "حدث خطأ في الاتصال، يرجى المحاولة لاحقاً." });
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = "bg-white border border-gray-300 rounded-lg px-4 py-3 text-smaa-gray-900 focus:outline-none focus:border-smaa-blue-700 focus:ring-1 focus:ring-smaa-blue-700 transition-colors w-full";
  const labelClass = "text-gray-700 font-medium text-sm mb-1 block";

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-smaa-blue-900 mb-4"
          >
            الطلبات والتواصل
          </motion.h2>
          <div className="w-20 h-1 bg-smaa-red-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            حدد نوع الطلب الخاص بك وقم بتعبئة النموذج ليقوم فريق سما التوريد لخدمات السيارات بالتواصل معك في أقرب وقت.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gray-50 border border-gray-200 rounded-3xl overflow-hidden shadow-lg">
          
          {/* Tabs Header */}
          <div className="flex flex-wrap border-b border-gray-200 bg-white">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id as TabId); setStatusMsg(null); }}
                className={`flex-1 py-4 px-2 flex items-center justify-center gap-2 text-sm md:text-base font-bold transition-all border-b-2 active:scale-95 ${
                  activeTab === tab.id 
                    ? "border-smaa-red-600 text-smaa-red-600 bg-gray-50/50" 
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-smaa-blue-900"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.form 
                key={activeTab}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
              
              <div className="md:col-span-2">
                {statusMsg && (
                  <div className={`p-4 mb-6 rounded-lg flex items-center gap-3 ${statusMsg.type === 'success' ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'}`}>
                    {statusMsg.type === 'success' && <CheckCircle2 size={24} />}
                    <p>{statusMsg.text}</p>
                  </div>
                )}
              </div>

              {/* === INDIVIDUAL FORM === */}
              {activeTab === 'individual' && (
                <>
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
                    <input name="carType" type="text" className={inputClass} placeholder="مثال: تويوتا، هيونداي" />
                  </div>
                  <div>
                    <label className={labelClass}>الموديل</label>
                    <input name="carModel" type="text" className={inputClass} placeholder="مثال: 2024" />
                  </div>
                  <div>
                    <label className={labelClass}>اللون المفضل</label>
                    <input name="carColor" type="text" className={inputClass} placeholder="مثال: أبيض" />
                  </div>
                  <div>
                    <label className={labelClass}>الميزانية التقريبية</label>
                    <input name="budget" type="text" className={inputClass} placeholder="مثال: 150,000 ريال" />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>ملاحظات إضافية</label>
                    <textarea name="notes" rows={3} className={inputClass} placeholder="أي تفاصيل أخرى..."></textarea>
                  </div>
                </>
              )}

              {/* === CORPORATE FORM === */}
              {activeTab === 'corporate' && (
                <>
                  <div>
                    <label className={labelClass}>اسم الشركة أو المنشأة <span className="text-smaa-red-600">*</span></label>
                    <input name="companyName" type="text" className={inputClass} required />
                  </div>
                  <div>
                    <label className={labelClass}>اسم المسؤول <span className="text-smaa-red-600">*</span></label>
                    <input name="managerName" type="text" className={inputClass} required />
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
                    <label className={labelClass}>المدينة</label>
                    <input name="city" type="text" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>نوع النشاط</label>
                    <input name="activityType" type="text" className={inputClass} placeholder="مثال: تأجير سيارات، مقاولات..." />
                  </div>
                  <div>
                    <label className={labelClass}>نوع السيارات المطلوبة</label>
                    <input name="carType" type="text" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>العدد المطلوب</label>
                    <input name="carQuantity" type="text" className={inputClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>ملاحظات ومتطلبات إضافية</label>
                    <textarea name="notes" rows={3} className={inputClass}></textarea>
                  </div>
                </>
              )}

              {/* === PARTNERSHIP FORM === */}
              {activeTab === 'partner' && (
                <>
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
                    <input name="jobTitle" type="text" className={inputClass} />
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
                    <input name="country" type="text" className={inputClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>نوع التعاون المقترح</label>
                    <input name="collaborationType" type="text" className={inputClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>تفاصيل المقترح</label>
                    <textarea name="proposalDetails" rows={4} className={inputClass}></textarea>
                  </div>
                </>
              )}

              {/* === COMPLAINTS FORM === */}
              {activeTab === 'complaint' && (
                <>
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
                    <input name="orderNumber" type="text" className={inputClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>عنوان الطلب</label>
                    <input name="complaintTitle" type="text" className={inputClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>التفاصيل</label>
                    <textarea name="notes" rows={4} className={inputClass}></textarea>
                  </div>
                </>
              )}

              {/* === GENERAL CONTACT FORM === */}
              {activeTab === 'general' && (
                <>
                  <div>
                    <label className={labelClass}>الاسم الكامل <span className="text-smaa-red-600">*</span></label>
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
                    <input name="collaborationType" type="text" className={inputClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>الرسالة</label>
                    <textarea name="notes" rows={4} className={inputClass}></textarea>
                  </div>
                </>
              )}

              {/* Submit */}
              <div className="md:col-span-2 mt-6">
                <button type="submit" disabled={isLoading} className="w-full flex items-center justify-center gap-2 bg-smaa-red-600 hover:bg-smaa-red-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg text-lg active:scale-95">
                  {isLoading ? <Loader2 className="animate-spin" /> : "إرسال الطلب"}
                </button>
              </div>

            </motion.form>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
