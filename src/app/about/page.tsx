import Link from "next/link";
import { ShieldCheck, Globe, Clock, Users, TrendingUp, Award, ArrowLeft, Target, Eye } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "من نحن | سما التوريد لخدمات السيارات",
  description: "سما التوريد لخدمات السيارات – SMAA Cars شركة سعودية متخصصة في استيراد وتوريد وبيع السيارات الجديدة والمستعملة للأفراد والشركات.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "الشفافية والمصداقية",
    text: "نلتزم بالوضوح التام في كل التفاصيل – الأسعار، المواصفات، والمواعيد. لا مفاجآت ولا رسوم مخفية.",
  },
  {
    icon: Globe,
    title: "شبكة توريد دولية",
    text: "شراكات موثوقة مع موردين في عدة دول تمنحنا قدرة على توفير الخيار المناسب بالسعر والوقت المناسبين.",
  },
  {
    icon: Clock,
    title: "الكفاءة والسرعة",
    text: "نحرص على إنجاز كل طلب بالسرعة القصوى، من التخليص الجمركي إلى توصيل السيارة لبابك.",
  },
  {
    icon: Users,
    title: "خدمة مخصصة",
    text: "نتعامل مع كل عميل باحترافية ونكيّف حلولنا لتناسب احتياجه الفردي سواء كان شخصاً أو شركة.",
  },
  {
    icon: TrendingUp,
    title: "تطوير مستمر",
    text: "نسعى دائماً لتطوير خدماتنا وتوسيع شبكة مورديّنا لنقدم أفضل عروض وأكثرها تنافسية.",
  },
  {
    icon: Award,
    title: "جودة مضمونة",
    text: "كل سيارة تمر بمراحل فحص دقيقة قبل توريدها لضمان استلامك مركبة بأفضل حالة ممكنة.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">

      {/* Hero Header */}
      <section className="bg-smaa-blue-900 text-white pt-32 pb-24 relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.png" 
            alt="About SMAA Cars" 
            fill 
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-smaa-blue-900 via-smaa-blue-900/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-smaa-red-600"></div>
            <span className="text-smaa-red-400 font-bold tracking-wider uppercase text-sm">من نحن</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-sm">
            نصنع الفارق في سوق
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">السيارات السعودي</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl">
            سما التوريد للسيارات؛ ليست مجرد وسيط، بل شريك استراتيجي يضمن لك الجودة والاحترافية والشفافية التامة في استيراد وشراء السيارات.
          </p>
        </div>
      </section>

      {/* About Text & Stats */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-smaa-blue-900 mb-8">
                نجعل استيراد السيارات<br />تجربة <span className="text-smaa-red-600">موثوقة وبسيطة</span>
              </h2>
              <p className="text-gray-600 font-light text-lg mb-6">
                سما للسيارات هي شركة سعودية متخصصة في توفير حلول مرنة ومتكاملة لاستيراد وتوريد وبيع السيارات، سواءً للأفراد الراغبين في سيارة شخصية فاخرة أو للشركات والمعارض التي تحتاج إلى توريد أساطيل بالجملة.
              </p>
              <p className="text-gray-600 font-light text-lg">
                نعتمد على دراسة احتياج كل عميل بشكل فردي، ثم البحث في الأسواق المحلية والدولية عن أفضل خيار يناسب الميزانية والمواصفات المطلوبة، مع متابعة مستمرة وشفافية تامة من لحظة تقديم الطلب حتى استلام المفتاح.
              </p>
            </div>

            {/* Stats Panel */}
            <div className="w-full lg:w-1/2 bg-smaa-blue-900 rounded-sm p-10 md:p-14 text-white shadow-xl relative overflow-hidden">
               {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-10 text-white">أرقام تعكس ثقتكم بنا</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { num: "+500", label: "عميل يثق بنا" },
                    { num: "+1000", label: "سيارة مستوردة" },
                    { num: "+15", label: "دولة نستورد منها" },
                    { num: "24/7", label: "دعم ومتابعة" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-md rounded-sm p-6 border border-white/20">
                      <div className="text-4xl font-extrabold text-white mb-2">{stat.num}</div>
                      <div className="text-sm text-smaa-red-400 font-bold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 bg-white shadow-sm rounded-sm overflow-hidden">
            
            <div className="p-12 hover:bg-smaa-blue-900 group transition-colors duration-500 border-b md:border-b-0 md:border-l border-gray-100">
              <div className="w-16 h-16 bg-smaa-red-50 text-smaa-red-600 rounded-sm flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors duration-500">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-extrabold text-smaa-blue-900 mb-6 group-hover:text-white transition-colors duration-500">رؤيتنا</h2>
              <p className="text-gray-500 group-hover:text-gray-300 font-light text-lg transition-colors duration-500">
                أن نكون الجهة الأولى الموثوقة والوجهة المفضلة في مجال توريد واستيراد السيارات، ونوفر حلولاً عملية واحترافية تخدم الأفراد والشركات داخل المملكة العربية السعودية بمعايير عالمية.
              </p>
            </div>

            <div className="p-12 hover:bg-smaa-blue-900 group transition-colors duration-500">
              <div className="w-16 h-16 bg-smaa-red-50 text-smaa-red-600 rounded-sm flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors duration-500">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-extrabold text-smaa-blue-900 mb-6 group-hover:text-white transition-colors duration-500">رسالتنا</h2>
              <p className="text-gray-500 group-hover:text-gray-300 font-light text-lg transition-colors duration-500">
                تسهيل الوصول إلى السيارات المناسبة من الأسواق المحلية والعالمية، من خلال خدمة احترافية شفافة ومرنة تراعي احتياج كل عميل وتضمن رضاه الكامل، لتجربة شراء خالية من المتاعب.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold text-smaa-blue-900 mb-6 tracking-tight">مبادئنا في <span className="text-smaa-red-600">العمل</span></h2>
              <p className="text-gray-600 font-light text-lg">
                هذه القيم هي بوصلتنا التي نوجه بها كل قرار نتخذه وكل خدمة نقدمها لعملائنا.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="group bg-gray-50 hover:bg-smaa-blue-900 border border-gray-100 hover:border-smaa-blue-900 p-8 rounded-sm transition-all duration-300">
                <div className="w-14 h-14 bg-white text-smaa-red-600 rounded-sm flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-none">
                  <val.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-smaa-blue-900 text-xl mb-4 group-hover:text-white transition-colors duration-300">{val.title}</h3>
                <p className="text-gray-500 text-sm font-light group-hover:text-gray-300 transition-colors duration-300">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-smaa-blue-900 text-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-smaa-red-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">مستعد لطلب سيارتك؟</h2>
          <p className="text-gray-300 mb-10 text-lg font-light">
            تواصل معنا الآن وسيساعدك فريقنا الاحترافي في إيجاد وتوريد أفضل خيار يناسب تطلعاتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact/individual" className="w-full sm:w-auto bg-smaa-red-600 hover:bg-smaa-red-500 text-white font-bold px-10 py-4 rounded-sm transition-all shadow-lg flex items-center justify-center gap-2">
              اطلب سيارتك الآن
            </Link>
            <Link href="/contact/corporate" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-10 py-4 rounded-sm transition-all flex items-center justify-center gap-2 group">
              طلب عرض للشركات
              <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
