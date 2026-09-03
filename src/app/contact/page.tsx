import Link from "next/link";
import { User, Building2, Handshake, MessageSquareWarning, MessageCircle, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "تواصل معنا | سما التوريد لخدمات السيارات",
  description: "تواصل مع سما التوريد لخدمات السيارات — طلبات الأفراد، الشركات، الشراكات، الشكاوى، والاستفسارات العامة.",
};

const forms = [
  {
    href: "/contact/individual",
    icon: User,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    accent: "group-hover:bg-smaa-blue-900 group-hover:text-white",
    title: "طلب الأفراد",
    desc: "هل تريد استيراد سيارة لاستخدامك الشخصي؟ أخبرنا بمواصفاتك وميزانيتك وسنجد لك الخيار الأنسب من أسواق العالم.",
    cta: "تقديم طلبك",
  },
  {
    href: "/contact/corporate",
    icon: Building2,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    accent: "group-hover:bg-smaa-blue-900 group-hover:text-white",
    title: "طلب الشركات",
    desc: "نوفر حلول توريد مخصصة للشركات والمعارض ومكاتب التأجير بكميات مرنة ومواصفات دقيقة تناسب نشاطك التجاري.",
    cta: "طلب عرض أسعار",
  },
  {
    href: "/contact/partner",
    icon: Handshake,
    color: "bg-amber-50 text-amber-600 border-amber-100",
    accent: "group-hover:bg-amber-600 group-hover:text-white",
    title: "شراكة وتعاون",
    desc: "إن كنت تمثل جهة أو مؤسسة وترغب في إقامة تعاون أو شراكة استراتيجية معنا، نسعد باستقبال مقترحاتكم.",
    cta: "اقتراح شراكة",
  },
  {
    href: "/contact/complaint",
    icon: MessageSquareWarning,
    color: "bg-red-50 text-red-500 border-red-100",
    accent: "group-hover:bg-smaa-red-600 group-hover:text-white",
    title: "شكاوى واقتراحات",
    desc: "نأخذ ملاحظاتكم وشكاواكم بجدية تامة لتطوير خدماتنا. شاركنا تجربتك وسنعمل على معالجتها بأسرع وقت.",
    cta: "رفع شكوى أو اقتراح",
  },
  {
    href: "/contact/general",
    icon: MessageCircle,
    color: "bg-green-50 text-green-600 border-green-100",
    accent: "group-hover:bg-green-600 group-hover:text-white",
    title: "تواصل عام",
    desc: "لأي استفسار عام أو استيضاح حول خدماتنا وطريقة عملنا، فريقنا مستعد للإجابة عليك.",
    cta: "ارسل رسالة",
  },
];

export default function ContactHubPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      {/* Header */}
      <div className="bg-smaa-blue-900 text-white py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">كيف يمكننا مساعدتك؟</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            اختر نوع الطلب المناسب لك وسيتولى فريقنا المختص التواصل معك في أقرب وقت ممكن.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {forms.map((form) => {
            const Icon = form.icon;
            return (
              <Link
                href={form.href}
                key={form.href}
                className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-6 transition-all duration-300 ${form.color} ${form.accent}`}>
                  <Icon size={28} />
                </div>
                <h2 className="text-2xl font-bold text-smaa-blue-900 mb-3 group-hover:text-smaa-red-600 transition-colors">
                  {form.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">{form.desc}</p>
                <div className="flex items-center gap-2 text-smaa-blue-900 font-bold group-hover:text-smaa-red-600 transition-colors">
                  {form.cta}
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
