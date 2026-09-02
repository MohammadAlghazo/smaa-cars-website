import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-smaa-blue-900 mb-6">حلول متكاملة لاستيراد وبيع السيارات</h2>
          <div className="w-16 h-1 bg-smaa-red-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            في سما التوريد لخدمات السيارات نقدّم حلولًا متكاملة لاستيراد وتوريد وبيع السيارات للأفراد والشركات داخل المملكة العربية السعودية، من خلال شبكة من الموردين ومصادر التوريد من مختلف دول العالم.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            نعمل على توفير خيارات متنوعة تلائم احتياجات الأفراد، المعارض، الشركات وقطاعات الأعمال، مع الحرص على وضوح الإجراءات وجودة الخدمة من بداية الطلب وحتى إتمام عملية التوريد أو البيع.
          </p>
        </div>
      </section>

      <AboutSection />
      <StatsSection />
      <HowItWorksSection />
      <ServicesSection />
      <FAQSection />
    </>
  );
}
