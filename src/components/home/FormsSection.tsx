"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { User, Building, Handshake, MessageSquareWarning, Loader2, CheckCircle2 } from "lucide-react";

type TabId = "individuals" | "corporates" | "partnership" | "complaints";

export default function FormsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("individuals");
  const [isLoading, setIsLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const tabs = [
    { id: "individuals", label: "طلب أفراد", icon: <User size={18} /> },
    { id: "corporates", label: "طلب شركات", icon: <Building size={18} /> },
    { id: "partnership", label: "شراكة وتعاون", icon: <Handshake size={18} /> },
    { id: "complaints", label: "شكاوى واقتراحات", icon: <MessageSquareWarning size={18} /> },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMsg(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      type: activeTab,
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email") || null,
      message: formData.get("message") || null,
      carType: formData.get("carType") || null,
      budget: formData.get("budget") || null,
      city: formData.get("city") || null,
    };

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

  return (
    <section id="contact" className="py-24 bg-smaa-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            الطلبات والتواصل
          </motion.h2>
          <div className="w-20 h-1 bg-smaa-red-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            حدد نوع الطلب الخاص بك وقم بتعبئة النموذج ليقوم فريق سما التوريد لخدمات السيارات بالتواصل معك في أقرب وقت.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-smaa-blue-900/20 border border-smaa-blue-800 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Tabs Header */}
          <div className="flex flex-wrap border-b border-smaa-blue-800 bg-smaa-blue-900/40">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id as TabId); setStatusMsg(null); }}
                className={`flex-1 py-4 px-2 flex items-center justify-center gap-2 text-sm md:text-base font-bold transition-all ${
                  activeTab === tab.id 
                    ? "bg-smaa-red-600 text-white" 
                    : "text-gray-400 hover:bg-smaa-blue-800/50 hover:text-white"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-10">
            <motion.form 
              key={activeTab}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              
              {/* Common Fields */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-smaa-red-500 mb-6 border-b border-smaa-blue-800 pb-2 inline-block">
                  {tabs.find(t => t.id === activeTab)?.label}
                </h3>
                
                {statusMsg && (
                  <div className={`p-4 mb-6 rounded-lg flex items-center gap-3 ${statusMsg.type === 'success' ? 'bg-green-900/40 border border-green-700 text-green-400' : 'bg-red-900/40 border border-red-700 text-red-400'}`}>
                    {statusMsg.type === 'success' && <CheckCircle2 size={24} />}
                    <p>{statusMsg.text}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-300 font-medium text-sm">الاسم الكامل <span className="text-smaa-red-500">*</span></label>
                <input name="name" type="text" className="bg-smaa-dark border border-smaa-blue-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-smaa-red-500 transition-colors" placeholder="اكتب اسمك الكامل" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 font-medium text-sm">رقم الجوال <span className="text-smaa-red-500">*</span></label>
                <input name="phone" type="tel" dir="ltr" className="bg-smaa-dark border border-smaa-blue-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-smaa-red-500 transition-colors text-right" placeholder="05x xxx xxxx" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-300 font-medium text-sm">البريد الإلكتروني</label>
                <input name="email" type="email" dir="ltr" className="bg-smaa-dark border border-smaa-blue-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-smaa-red-500 transition-colors text-right" placeholder="example@email.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-300 font-medium text-sm">المدينة</label>
                <input name="city" type="text" className="bg-smaa-dark border border-smaa-blue-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-smaa-red-500 transition-colors" placeholder="الرياض، جدة، ..." />
              </div>

              {/* Specific fields based on tab */}
              {activeTab === 'corporates' && (
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-gray-300 font-medium text-sm">اسم الشركة / المنشأة <span className="text-smaa-red-500">*</span></label>
                  <input name="company" type="text" className="bg-smaa-dark border border-smaa-blue-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-smaa-red-500 transition-colors" placeholder="اسم الشركة" required={activeTab === 'corporates'} />
                </div>
              )}

              {(activeTab === 'individuals' || activeTab === 'corporates') && (
                <>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-300 font-medium text-sm">نوع السيارة (الماركة)</label>
                    <input name="carType" type="text" className="bg-smaa-dark border border-smaa-blue-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-smaa-red-500 transition-colors" placeholder="مثال: تويوتا، هيونداي" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-300 font-medium text-sm">الميزانية التقريبية</label>
                    <input name="budget" type="text" className="bg-smaa-dark border border-smaa-blue-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-smaa-red-500 transition-colors" placeholder="مثال: 150,000 ريال" />
                  </div>
                </>
              )}

              {/* Textarea */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-gray-300 font-medium text-sm">التفاصيل / الملاحظات</label>
                <textarea name="message" rows={4} className="bg-smaa-dark border border-smaa-blue-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-smaa-red-500 transition-colors resize-none" placeholder="اكتب تفاصيل طلبك أو استفسارك هنا..."></textarea>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 mt-4">
                <button type="submit" disabled={isLoading} className="w-full flex items-center justify-center gap-2 bg-smaa-red-600 hover:bg-smaa-red-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-smaa-red-600/20 text-lg">
                  {isLoading ? <Loader2 className="animate-spin" /> : "إرسال الطلب"}
                </button>
              </div>

            </motion.form>
          </div>
        </div>

      </div>
    </section>
  );
}
