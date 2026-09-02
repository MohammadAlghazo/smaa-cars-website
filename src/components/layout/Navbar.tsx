"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "#about" },
    { name: "خدماتنا", href: "#services" },
    { name: "خدمات الأفراد", href: "#individuals" },
    { name: "خدمات الشركات", href: "#corporates" },
    { name: "الأسئلة الشائعة", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-smaa-dark/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          {/* Please place the logo image as 'logo.png' in the 'public' folder */}
          <div className="relative w-32 h-12 flex items-center justify-center">
            {/* We use unoptimized to avoid build errors if logo is missing temporarily, but we remove it later */}
            <Image src="/logo.png" alt="SMAA CARS" fill className="object-contain" priority />
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <Link key={idx} href={link.href} className="text-smaa-light hover:text-smaa-red-500 transition-colors font-medium">
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className="bg-smaa-red-600 hover:bg-smaa-red-500 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md shadow-smaa-red-600/20 ml-4">
            تواصل معنا
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-smaa-light" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-smaa-dark/95 backdrop-blur-md shadow-lg border-t border-smaa-blue-800 p-4 flex flex-col gap-4">
          {navLinks.map((link, idx) => (
            <Link key={idx} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-smaa-light hover:text-smaa-red-500 transition-colors font-medium text-lg">
              {link.name}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-smaa-red-600 hover:bg-smaa-red-500 text-white px-6 py-3 rounded-full font-bold transition-all text-center mt-2">
            تواصل معنا
          </Link>
        </div>
      )}
    </nav>
  );
}
