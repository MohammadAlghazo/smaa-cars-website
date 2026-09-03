import Link from "next/link";
import { ArrowLeft, Globe, MapPin, Building2, ShieldCheck, Truck, Search, FileText, Star, Users, TrendingUp } from "lucide-react";

export const metadata = {
  title: "خدماتنا | سما التوريد لخدمات السيارات",
  description: "استيراد السيارات، بيع السيارات داخل المملكة، وتوريد سيارات الشركات والأساطيل.",
};

const services = [
  {
    id: "import",
    icon: Globe,
    iconColor: "text-smaa-blue-900 bg-smaa-blue-50",
    title: "استيراد السيارات",
    desc: "نوفر لك خدمة استيراد السيارات من مختلف دول العالم وفق مواصفاتك وميزانيتك. نتولى كامل إجراءات البحث والشحن والتخليص الجمركي حتى تصل سيارتك بأمان.",
    details: [
      { icon: Search, text: "البحث عن السيارة المطلوبة وتوفير خيارات متعددة من الموردين." },
      { icon: Truck, text: "متابعة عمليات الشحن الدولي وإجراءات التخليص الجمركي بالكامل." },
      { icon: ShieldCheck, text: "فحص شامل للسيارة قبل الشراء لضمان مطابقتها للمواصفات." },
      { icon: FileText, text: "تسليم كامل الوثائق والمستندات اللازمة للتسجيل." },
    ],
    ctaText: "اطلب سيارة الآن",
    ctaLink: "/contact/individual",
    badge: "الأكثر طلباً",
    badgeColor: "bg-smaa-red-50 text-smaa-red-600 border-smaa-red-100",
  },
  {
    id: "local",
    icon: MapPin,
    iconColor: "text-green-700 bg-green-50",
    title: "بيع السيارات داخل المملكة",
    desc: "نوفر ونبيع السيارات للأفراد والشركات داخل المملكة العربية السعودية، سواء كانت جديدة أو مستعملة، بحسب الطلبات والعروض المتاحة مع ضمان إجراءات نقل ملكية سليمة.",
    details: [
      { icon: Star, text: "خيارات مرنة للبيع الفوري بحسب السيارات المتاحة." },
      { icon: Users, text: "التعاون مع الوكلاء والمعارض المعتمدين محلياً." },
      { icon: FileText, text: "تسهيل إجراءات نقل الملكية والتسليم الرسمي." },
      { icon: ShieldCheck, text: "ضمان سلامة السيارة قبل عملية البيع." },
    ],
    ctaText: "استفسر عن المتاح",
    ctaLink: "/contact/individual",
    badge: null,
    badgeColor: "",
  },
  {
    id: "corporate",
    icon: Building2,
    iconColor: "text-indigo-700 bg-indigo-50",
    title: "توريد سيارات الشركات والأساطيل",
    desc: "نقدم حلول توريد مخصصة للشركات، المعارض، مكاتب التأجير وقطاعات الأعمال المختلفة. نعمل وفق متطلباتكم من حيث الكميات، المواصفات، والميزانية.",
    details: [
      { icon: Building2, text: "حلول توريد مخصصة لشركات التأجير، المقاولات، والمشاريع الكبرى." },
      { icon: TrendingUp, text: "عروض أسعار تنافسية للكميات (B2B) مع هوامش مرنة." },
      { icon: Truck, text: "توفير سيارات تلائم مشاريع النقل والتوصيل والأساطيل." },
      { icon: FileText, text: "فواتير ووثائق رسمية كاملة لكل صفقة." },
    ],
    ctaText: "اطلب عرض أسعار للشركات",
    ctaLink: "/contact/corporate",
    badge: "للشركات",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-smaa-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-bold mb-6 border border-white/20">
            خدماتنا
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">حلول متكاملة لكل احتياجاتك</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            سواء كنت فرداً يبحث عن سيارة أحلامه أو شركة تحتاج إلى توريد أسطول كامل — لدينا الحل الأنسب لك.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl space-y-10">

          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                {/* Top bar */}
                <div className="h-1.5 bg-gradient-to-l from-smaa-red-600 to-smaa-blue-900 w-full" />
                
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-start gap-4 mb-6">
                    <div className={`w-14 h-14 ${service.iconColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon size={26} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-smaa-blue-900">{service.title}</h2>
                        {service.badge && (
                          <span className={`px-3 py-1 text-xs font-bold rounded-full border ${service.badgeColor}`}>
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">{service.desc}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.details.map((detail, idx) => {
                      const DetailIcon = detail.icon;
                      return (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <DetailIcon size={16} className="text-smaa-red-600" />
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{detail.text}</p>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    href={service.ctaLink}
                    className="inline-flex items-center gap-2 bg-smaa-blue-900 hover:bg-smaa-blue-800 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-95"
                  >
                    {service.ctaText}
                    <ArrowLeft size={18} />
                  </Link>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-smaa-blue-900 text-white mt-10">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">لم تجد ما تبحث عنه؟</h2>
          <p className="text-gray-300 mb-8">
            تواصل معنا مباشرة وسيساعدك فريقنا في إيجاد أفضل حل لاحتياجك
          </p>
          <Link
            href="/contact/general"
            className="inline-flex items-center gap-2 bg-smaa-red-600 hover:bg-smaa-red-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg active:scale-95"
          >
            تواصل معنا
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
