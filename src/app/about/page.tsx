import Image from "next/image";

export const metadata = {
  title: "من نحن | سما التوريد لخدمات السيارات",
  description: "سما التوريد لخدمات السيارات – SMAA Cars شركة سعودية متخصصة في استيراد وتوريد وبيع السيارات الجديدة والمستعملة للأفراد والشركات.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      
      {/* Header */}
      <section className="bg-smaa-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            سما التوريد لخدمات السيارات – SMAA Cars شركة سعودية متخصصة في استيراد وتوريد وبيع السيارات الجديدة والمستعملة للأفراد والشركات.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-xl mb-6">
              نوفّر حلولًا مرنة تناسب مختلف الاحتياجات، سواءً لشراء سيارة للاستخدام الشخصي، أو توريد مجموعة من السيارات للمعارض والشركات والأساطيل.
            </p>
            <p className="text-gray-600 leading-relaxed text-xl">
              نعتمد على دراسة احتياج العميل والبحث عن الخيارات المناسبة من مصادر متعددة حول العالم، مع تقديم معلومات واضحة ومتابعة مستمرة حتى اكتمال الطلب.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24 bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <div>
              <h2 className="text-3xl font-bold text-smaa-blue-900 mb-6 flex items-center gap-4">
                <span className="w-12 h-1 bg-smaa-red-600 block"></span>
                رؤيتنا
              </h2>
              <p className="text-gray-600 leading-relaxed text-xl">
                أن نكون من الجهات الموثوقة في مجال توريد واستيراد السيارات، وأن نوفّر حلولًا عملية تخدم الأفراد وقطاع الأعمال داخل المملكة.
              </p>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop" 
                alt="Premium Car" 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-gray-50 p-8 rounded-3xl border border-gray-100 flex-col-reverse md:flex-row-reverse">
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-smaa-blue-900 mb-6 flex items-center gap-4">
                <span className="w-12 h-1 bg-smaa-red-600 block"></span>
                رسالتنا
              </h2>
              <p className="text-gray-600 leading-relaxed text-xl">
                تسهيل الوصول إلى السيارات المناسبة من الأسواق المحلية والعالمية، من خلال خدمة احترافية واضحة ومرنة تراعي احتياج كل عميل.
              </p>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image 
                src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800&auto=format&fit=crop" 
                alt="Car Inspection" 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
