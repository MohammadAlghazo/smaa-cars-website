import Link from "next/link";
import { ArrowLeft, Globe, MapPin, Building2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "خدماتنا | سما التوريد لخدمات السيارات",
  description: "استيراد السيارات، بيع السيارات داخل المملكة، وتوريد سيارات الشركات والأساطيل.",
};

const services = [
  {
    id: "import",
    title: "استيراد السيارات",
    icon: <Globe className="text-smaa-red-600 mb-4" size={48} />,
    desc: "توفير واستيراد السيارات من مختلف دول العالم وفق طلب العميل والخيارات المتاحة لدى الموردين.",
    details: [
      "البحث عن السيارة المطلوبة وتوفير خيارات متعددة.",
      "متابعة الشحن والتخليص الجمركي.",
      "فحص السيارة قبل الشراء لضمان سلامتها."
    ],
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "local",
    title: "بيع السيارات داخل المملكة",
    icon: <MapPin className="text-smaa-red-600 mb-4" size={48} />,
    desc: "توفير وبيع السيارات للأفراد والشركات داخل المملكة العربية السعودية، بحسب السيارات والعروض المتاحة.",
    details: [
      "خيارات مرنة للبيع الفوري.",
      "التعاون مع الوكلاء المعتمدين محلياً.",
      "تسهيل إجراءات نقل الملكية والتسليم."
    ],
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "corporate",
    title: "توريد سيارات الشركات والأساطيل",
    icon: <Building2 className="text-smaa-red-600 mb-4" size={48} />,
    desc: "تقديم عروض توريد مخصصة للشركات، المعارض، مكاتب التأجير وقطاعات الأعمال، وفق الكميات والمواصفات المطلوبة.",
    details: [
      "حلول توريد مخصصة لشركات تأجير السيارات والمقاولات.",
      "عروض أسعار تنافسية للكميات (B2B).",
      "توفير سيارات تلائم مشاريع النقل والتوصيل."
    ],
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      
      {/* Header */}
      <section className="bg-smaa-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero_car.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">خدماتنا</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">حلول متكاملة لاستيراد وتوريد السيارات مصممة خصيصاً لتلبية احتياجاتك.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          
          {services.map((service, index) => (
            <div id={service.id} key={service.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 mb-24 bg-white p-8 rounded-3xl shadow-sm border border-gray-100`}>
              
              <div className="w-full md:w-1/2">
                {service.icon}
                <h2 className="text-3xl font-bold text-smaa-blue-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-smaa-red-600 font-bold mt-1">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-smaa-blue-900 hover:bg-smaa-blue-800 text-white px-6 py-3 rounded-full font-bold transition-colors"
                >
                  الطلب والاستفسار
                  <ArrowLeft size={18} />
                </Link>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
