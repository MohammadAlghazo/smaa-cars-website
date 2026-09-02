import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const alexandria = Alexandria({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "سما التوريد لخدمات السيارات | SMAA CARS",
  description: "حلول متكاملة لاستيراد وتوريد وبيع السيارات للأفراد والشركات داخل المملكة العربية السعودية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth overflow-x-hidden">
      <body className={`${alexandria.className} bg-white text-smaa-gray-900 antialiased overflow-x-hidden min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
