"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Lock } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith('/admin') || pathname.startsWith('/login')) {
    return null;
  }

  return (
    <footer className="bg-smaa-blue-900 pt-16 pb-8 text-white mt-auto border-t-[6px] border-smaa-red-600">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">سما التوريد لخدمات السيارات</h2>
            <p className="text-gray-300 max-w-md text-balance leading-relaxed">
              SMAA Cars<br/>
              حلول استيراد وتوريد وبيع السيارات للأفراد والشركات داخل المملكة العربية السعودية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-smaa-red-600 pb-2 inline-block">روابط سريعة</h3>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li><Link href="/" className="hover:text-smaa-red-400 transition-colors">الرئيسية</Link></li>
              <li><Link href="/about" className="hover:text-smaa-red-400 transition-colors">من نحن</Link></li>
              <li><Link href="/#services" className="hover:text-smaa-red-400 transition-colors">خدماتنا</Link></li>
              <li><Link href="/contact/individual" className="hover:text-smaa-red-400 transition-colors">خدمات الأفراد</Link></li>
              <li><Link href="/contact/corporate" className="hover:text-smaa-red-400 transition-colors">خدمات الشركات</Link></li>
              <li><Link href="/contact/partner" className="hover:text-smaa-red-400 transition-colors">التعاون والشراكة</Link></li>
              <li><Link href="/contact/complaint" className="hover:text-smaa-red-400 transition-colors">الشكاوى والاقتراحات</Link></li>
              <li><Link href="/contact/general" className="hover:text-smaa-red-400 transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-smaa-red-600 pb-2 inline-block">تواصل معنا</h3>
            <ul className="flex flex-col gap-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="text-smaa-red-500 shrink-0 mt-1" size={20} />
                <span>الرياض – المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-smaa-red-500 shrink-0" size={20} />
                <span dir="ltr">056 584 8380</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-smaa-red-500 shrink-0" size={20} />
                <span>info@smaacars.sa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-smaa-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} سما التوريد لخدمات السيارات – جميع الحقوق محفوظة.</p>
          <div className="flex gap-4 items-center">
            <Link href="#" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            <Link href="#" className="hover:text-white transition-colors">الشروط والأحكام</Link>
            <Link href="/admin" className="hover:text-smaa-red-400 transition-colors mr-2 opacity-50 hover:opacity-100" title="لوحة التحكم">
              <Lock size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
