import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-smaa-dark border-t border-smaa-blue-900 pt-16 pb-8 text-smaa-light mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-40 h-14">
                <Image src="/logo.png" alt="SMAA CARS" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-400 max-w-md text-balance leading-relaxed">
              سما التوريد لخدمات السيارات – SMAA Cars<br/>
              حلول استيراد وتوريد وبيع السيارات للأفراد والشركات داخل المملكة العربية السعودية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-smaa-red-600 pb-2 inline-block">روابط سريعة</h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              <li><Link href="/" className="hover:text-smaa-red-500 transition-colors">الرئيسية</Link></li>
              <li><Link href="#about" className="hover:text-smaa-red-500 transition-colors">من نحن</Link></li>
              <li><Link href="#services" className="hover:text-smaa-red-500 transition-colors">خدماتنا</Link></li>
              <li><Link href="#individuals" className="hover:text-smaa-red-500 transition-colors">خدمات الأفراد</Link></li>
              <li><Link href="#corporates" className="hover:text-smaa-red-500 transition-colors">خدمات الشركات</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-smaa-red-600 pb-2 inline-block">تواصل معنا</h3>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-smaa-red-600 shrink-0 mt-1" size={20} />
                <span>الرياض – المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-smaa-red-600 shrink-0" size={20} />
                <span dir="ltr">056 584 8380</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-smaa-red-600 shrink-0" size={20} />
                <span>info@smaacars.sa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-smaa-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} سما التوريد لخدمات السيارات – جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
