import FormsSection from "@/components/home/FormsSection";

export const metadata = {
  title: "تواصل معنا | سما التوريد لخدمات السيارات",
  description: "نسعد بتواصلكم معنا لطلبات استيراد السيارات للأفراد والشركات في المملكة العربية السعودية.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <FormsSection />
    </div>
  );
}
