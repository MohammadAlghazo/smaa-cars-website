import Link from "next/link";
import { ShieldCheck, Globe, Clock, Users, TrendingUp, Award, ArrowLeft, Target, Eye } from "lucide-react";

export const metadata = {
  title: "من نحن | سما التوريد لخدمات السيارات",
  description: "سما التوريد لخدمات السيارات – SMAA Cars شركة سعودية متخصصة في استيراد وتوريد وبيع السيارات الجديدة والمستعملة للأفراد والشركات.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "الشفافية والمصداقية",
    text: "نلتزم بالوضوح التام في كل التفاصيل – الأسعار، المواصفات، والمواعيد. لا مفاجآت ولا رسوم مخفية.",
    color: "text-smaa-blue-900 bg-smaa-blue-50",
  },
  {
    icon: Globe,
    title: "شبكة توريد دولية",
    text: "شراكات موثوقة مع موردين في عدة دول تمنحنا قدرة على توفير الخيار المناسب بالسعر والوقت المناسبين.",
    color: "text-green-700 bg-green-50",
  },
  {
    icon: Clock,
    title: "الكفاءة والسرعة",
    text: "نحرص على إنجاز كل طلب بالسرعة القصوى، من تخليص جمركي إلى توصيل السيارة لبابك.",
    color: "text-amber-700 bg-amber-50",
  },
  {
    icon: Users,
    title: "خدمة مخصصة",
    text: "نتعامل مع كل عميل باحترافية ونكيّف حلولنا لتناسب احتياجه الفردي سواء كان شخصاً أو شركة.",
    color: "text-purple-700 bg-purple-50",
  },
  {
    icon: TrendingUp,
    title: "تطوير مستمر",
    text: "نسعى دائماً لتطوير خدماتنا وتوسيع شبكة مورديّنا لنقدم أفضل عروض وأكثرها تنافسية.",
    color: "text-red-700 bg-red-50",
  },
  {
    icon: Award,
    title: "جودة مضمونة",
    text: "كل سيارة تمر بمراحل فحص دقيقة قبل توريدها لضمان استلامك مركبة بأفضل حالة ممكنة.",
    color: "text-teal-700 bg-teal-50",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">

      {/* Hero Header */}
      <section className="bg-smaa-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-bold mb-6 border border-white/20">
            من نحن
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            سما التوريد<br />
            <span className="text-smaa-red-400">لخدمات السيارات</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            شركة سعودية متخصصة في استيراد وتوريد وبيع السيارات للأفراد والشركات، نعمل بشفافية ومهنية عالية لتوفير أفضل الخيارات من أسواق المملكة والعالم.
          </p>
        </div>
      </section>

      {/* About Text */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-smaa-red-50 text-smaa-red-600 text-sm font-bold rounded-full mb-5 border border-smaa-red-100">
                قصتنا
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-smaa-blue-900 mb-6 leading-tight">
                نجعل استيراد السيارات<br />تجربة موثوقة وبسيطة
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                سما للسيارات هي شركة سعودية متخصصة في توفير حلول مرنة ومتكاملة لاستيراد وتوريد وبيع السيارات، سواءً للأفراد الراغبين في سيارة شخصية أو للشركات والمعارض التي تحتاج إلى توريد بالجملة.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                نعتمد على دراسة احتياج كل عميل بشكل فردي، ثم البحث في الأسواق المحلية والدولية عن أفضل خيار يناسب الميزانية والمواصفات المطلوبة، مع متابعة مستمرة من تقديم الطلب حتى استلام السيارة.
              </p>
            </div>

            {/* Stats Panel */}
            <div className="bg-gradient-to-br from-smaa-blue-900 to-smaa-blue-800 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-lg font-bold mb-8 text-gray-200">أرقام تعكس ثقتكم بنا</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "+500", label: "عميل راضٍ" },
                  { num: "+100", label: "سيارة تم توريدها" },
                  { num: "دولية", label: "شبكة موردين" },
                  { num: "24h", label: "وقت الاستجابة" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/10 rounded-2xl p-5 text-center border border-white/10">
                    <div className="text-3xl font-extrabold text-smaa-red-400 mb-1">{stat.num}</div>
                    <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-smaa-blue-50 text-smaa-blue-900 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={28} />
              </div>
              <h2 className="text-2xl font-extrabold text-smaa-blue-900 mb-4">رؤيتنا</h2>
              <div className="w-10 h-1 bg-smaa-red-600 rounded-full mb-4" />
              <p className="text-gray-600 leading-relaxed text-lg">
                أن نكون الجهة الأولى الموثوقة في مجال توريد واستيراد السيارات، ونوفر حلولاً عملية تخدم الأفراد والشركات داخل المملكة العربية السعودية.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-smaa-red-50 text-smaa-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-extrabold text-smaa-blue-900 mb-4">رسالتنا</h2>
              <div className="w-10 h-1 bg-smaa-red-600 rounded-full mb-4" />
              <p className="text-gray-600 leading-relaxed text-lg">
                تسهيل الوصول إلى السيارات المناسبة من الأسواق المحلية والعالمية، من خلال خدمة احترافية شفافة ومرنة تراعي احتياج كل عميل وتضمن رضاه الكامل.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 bg-smaa-blue-50 text-smaa-blue-900 text-sm font-bold rounded-full mb-4 border border-smaa-blue-100">
              قيمنا
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-smaa-blue-900 mb-3">مبادئنا في العمل</h2>
            <div className="w-16 h-1 bg-smaa-red-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg p-6 rounded-2xl transition-all duration-300">
                <div className={`w-12 h-12 ${val.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <val.icon size={22} />
                </div>
                <h3 className="font-bold text-smaa-blue-900 text-lg mb-2">{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-smaa-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
          <h2 className="text-3xl font-extrabold mb-4">مستعد لطلب سيارتك؟</h2>
          <p className="text-gray-300 mb-8 text-lg">
            تواصل معنا الآن وسيساعدك فريقنا في إيجاد أفضل خيار يناسبك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/individual" className="bg-smaa-red-600 hover:bg-smaa-red-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg inline-flex items-center justify-center gap-2 active:scale-95">
              اطلب سيارتك الآن
            </Link>
            <Link href="/contact/corporate" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center justify-center gap-2 active:scale-95">
              طلب عرض للشركات
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
