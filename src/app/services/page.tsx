import Link from "next/link";
import { ArrowLeft, Globe, MapPin, Building2, ShieldCheck, Truck, Search, FileText, Star, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "خدماتنا | سما التوريد لخدمات السيارات",
  description: "استيراد السيارات، بيع السيارات داخل المملكة، وتوريد سيارات الشركات والأساطيل.",
};

const services = [
  {
    id: "import",
    icon: Globe,
    title: "استيراد السيارات",
    desc: "نوفر لك خدمة استيراد السيارات من مختلف دول العالم وفق مواصفاتك الدقيقة وميزانيتك. نتولى كامل إجراءات البحث والشحن والتخليص الجمركي حتى تصل سيارتك بأمان.",
    details: [
      { icon: Search, text: "البحث عن السيارة المطلوبة وتوفير خيارات متعددة من الموردين المعتمدين." },
      { icon: Truck, text: "متابعة عمليات الشحن الدولي وإجراءات التخليص الجمركي بالكامل." },
      { icon: ShieldCheck, text: "فحص شامل ودقيق للسيارة قبل الشراء لضمان مطابقتها للمواصفات." },
      { icon: FileText, text: "تسليم كامل الوثائق والمستندات اللازمة للتسجيل النظامي." },
    ],
    ctaText: "اطلب سيارتك",
    ctaLink: "/contact/individual",
    badge: "الأكثر طلباً",
    badgeColor: "bg-smaa-red-600 text-white",
  },
  {
    id: "local",
    icon: MapPin,
    title: "بيع السيارات داخل المملكة",
    desc: "نوفر ونبيع السيارات للأفراد والشركات داخل المملكة العربية السعودية، سواء كانت جديدة أو مستعملة، بحسب الطلبات والعروض المتاحة مع ضمان إجراءات نقل ملكية سليمة.",
    details: [
      { icon: Star, text: "خيارات مرنة للبيع الفوري بحسب السيارات المتاحة في المعرض." },
      { icon: Users, text: "التعاون مع الوكلاء والمعارض المعتمدة محلياً لتوفير خيارات أوسع." },
      { icon: FileText, text: "تسهيل وتخليص إجراءات نقل الملكية والتسليم الرسمي." },
      { icon: ShieldCheck, text: "ضمان سلامة وجودة السيارة ميكانيكياً قبل عملية البيع." },
    ],
    ctaText: "استفسر عن المتاح",
    ctaLink: "/contact/individual",
    badge: null,
    badgeColor: "",
  },
  {
    id: "corporate",
    icon: Building2,
    title: "توريد الأساطيل للشركات",
    desc: "نقدم حلول توريد مخصصة للشركات، المعارض، مكاتب التأجير وقطاعات الأعمال المختلفة. نعمل وفق متطلباتكم من حيث الكميات، المواصفات، والميزانية.",
    details: [
      { icon: Building2, text: "حلول توريد مخصصة لشركات التأجير، المقاولات، والمشاريع الكبرى." },
      { icon: TrendingUp, text: "عروض أسعار تنافسية وحصرية للكميات (B2B) مع مرونة في العقود." },
      { icon: Truck, text: "توفير سيارات تلائم مشاريع النقل والتوصيل والأساطيل التشغيلية." },
      { icon: FileText, text: "فواتير ووثائق رسمية وعقود واضحة كاملة لكل صفقة." },
    ],
    ctaText: "طلب عرض أسعار للشركات",
    ctaLink: "/contact/corporate",
    badge: "قطاع الأعمال",
    badgeColor: "bg-smaa-blue-900 text-white",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-smaa-blue-900 text-white pt-32 pb-24 relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.png" 
            alt="Services SMAA Cars" 
            fill 
            className="object-cover object-center opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-smaa-blue-900 via-smaa-blue-900/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-smaa-red-600"></div>
            <span className="text-smaa-red-400 font-bold tracking-wider uppercase text-sm">خدماتنا</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-sm">
            حلول متكاملة
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">لكل احتياجاتك</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl">
            سواء كنت فرداً يبحث عن سيارة أحلامه، أو شركة تحتاج إلى توريد أسطول كامل، صممنا خدماتنا لتوفر لك أعلى مستويات الجودة والراحة والأمان.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl space-y-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row group"
              >
                {/* Side Accent */}
                <div className="hidden md:block w-2 bg-smaa-red-600 transition-all duration-300 group-hover:w-4"></div>
                <div className="h-1.5 md:hidden bg-smaa-red-600 w-full transition-all duration-300"></div>
                
                <div className="p-10 md:p-12 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-smaa-red-50 text-smaa-red-600 rounded-sm flex items-center justify-center">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-smaa-blue-900">{service.title}</h2>
                    </div>
                    {service.badge && (
                      <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 font-light text-lg mb-10">{service.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.details.map((detail, idx) => {
                      const DetailIcon = detail.icon;
                      return (
                        <div key={idx} className="flex items-start gap-3 p-5 bg-gray-50 rounded-sm border border-gray-100 hover:bg-white hover:border-gray-200 transition-colors">
                          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 text-smaa-red-600">
                            <DetailIcon size={20} strokeWidth={1.5}/>
                          </div>
                          <p className="text-gray-600 text-sm font-light leading-relaxed">{detail.text}</p>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    href={service.ctaLink}
                    className="inline-flex items-center gap-3 bg-smaa-blue-900 hover:bg-smaa-blue-800 text-white font-bold px-8 py-4 rounded-sm transition-all group/btn text-sm"
                  >
                    {service.ctaText}
                    <ArrowLeft size={16} className="group-hover/btn:-translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-smaa-blue-900 text-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-smaa-red-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">لم تجد ما تبحث عنه؟</h2>
          <p className="text-gray-300 mb-10 text-lg font-light">
            لا تتردد في التواصل معنا مباشرة. فريق الخبراء لدينا جاهز للاستماع لك وتصميم حل مخصص يناسب احتياجك بالكامل.
          </p>
          <Link
            href="/contact/general"
            className="inline-flex items-center justify-center gap-3 bg-smaa-red-600 hover:bg-smaa-red-500 text-white font-bold px-10 py-4 rounded-sm transition-all shadow-lg group"
          >
            تواصل معنا الآن
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
