import HeroSection from "@/components/home/HeroSection";
import BrandMarquee from "@/components/home/BrandMarquee";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import LatestCarsSection from "@/components/home/LatestCarsSection";
import LatestArticlesSection from "@/components/home/LatestArticlesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";

// Revalidate homepage every hour so dynamic sections (cars/articles) stay fresh
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandMarquee />
      <FeaturesGrid />
      <LatestCarsSection />
      <AboutSection />
      <StatsSection />
      <HowItWorksSection />
      <ServicesSection />
      <TestimonialsSection />
      <LatestArticlesSection />
      <FAQSection />
    </>
  );
}
