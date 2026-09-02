"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith('/admin') || pathname.startsWith('/login')) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "الخدمات", href: "/services" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || pathname !== '/' ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-32 h-12 flex items-center justify-center">
            <Image src="/logo.png" alt="SMAA CARS" fill className="object-contain" priority unoptimized />
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <Link 
              key={idx} 
              href={link.href} 
              className={`font-medium transition-colors ${
                pathname === link.href 
                  ? "text-smaa-red-600 font-bold" 
                  : "text-smaa-blue-900 hover:text-smaa-red-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="bg-smaa-red-600 hover:bg-smaa-red-500 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md ml-4">
            اطلب سيارتك
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-smaa-blue-900" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4">
          {navLinks.map((link, idx) => (
            <Link 
              key={idx} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`block font-medium text-lg ${pathname === link.href ? "text-smaa-red-600 font-bold" : "text-smaa-blue-900 hover:text-smaa-red-500"}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-smaa-red-600 hover:bg-smaa-red-500 text-white px-6 py-3 rounded-full font-bold transition-all text-center mt-2">
            اطلب سيارتك
          </Link>
        </div>
      )}
    </nav>
  );
}
