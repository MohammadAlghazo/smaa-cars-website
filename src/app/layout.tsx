import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const alexandria = Alexandria({ 
  subsets: ["arabic", "latin"],
  display: 'swap',
  variable: '--font-alexandria',
});

const siteTitle = "سما التوريد لخدمات السيارات | SMAA CARS";
const siteDesc = "حلول متكاملة لاستيراد وتوريد وبيع السيارات للأفراد والشركات داخل المملكة العربية السعودية. نوفر أفضل الخيارات بأسعار تنافسية وخدمات ما بعد البيع المميزة.";

export const metadata: Metadata = {
  metadataBase: new URL("https://smaacars.com"),
  title: {
    default: siteTitle,
    template: "%s | SMAA CARS",
  },
  description: siteDesc,
  keywords: ["سيارات", "استيراد سيارات", "سما التوريد", "SMAA CARS", "معرض سيارات", "السعودية"],
  authors: [{ name: "SMAA CARS" }],
  creator: "SMAA CARS",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://smaacars.com",
    siteName: siteTitle,
    title: siteTitle,
    description: siteDesc,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDesc,
    images: ["/logo.png"],
  },
};

import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth overflow-x-hidden">
      <body className={`${alexandria.variable} font-sans bg-white text-smaa-gray-900 antialiased overflow-x-hidden min-h-screen flex flex-col`}>
        <NextTopLoader
          color="#dc2626"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #dc2626,0 0 5px #dc2626"
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
