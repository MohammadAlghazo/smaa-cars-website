"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.startsWith('/admin') || pathname.startsWith('/login')) {
    return null;
  }

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "خدماتنا", href: "/services" },
    { name: "السيارات المستوردة", href: "/cars" },
    { name: "المركز الإعلامي", href: "/articles" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || pathname !== '/' ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-28 h-10 flex items-center justify-center">
            {/* Logo handles dark/light automatically using CSS filter depending on background, but since it's an image, let's just make it clear. In mobile when not scrolled, it might be white. */}
            <Image src="/logo.png" alt="SMAA CARS" fill className={`object-contain transition-all ${(!isScrolled && pathname === '/') ? 'brightness-0 invert' : ''}`} priority unoptimized />
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 z-40"
            />
            
            {/* Menu Panel */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-4 right-4 bg-white rounded-2xl shadow-2xl flex flex-col gap-2 overflow-hidden z-50 p-6 mt-2"
            >
              {navLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={`block font-medium text-lg p-3 rounded-xl transition-colors ${pathname === link.href ? "bg-smaa-red-50 text-smaa-red-600 font-bold" : "text-smaa-blue-900 hover:bg-gray-50"}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-2"></div>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-smaa-red-600 hover:bg-smaa-red-500 text-white p-4 rounded-xl font-bold transition-all text-center active:scale-95 flex items-center justify-center">
                اطلب سيارتك الآن
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
