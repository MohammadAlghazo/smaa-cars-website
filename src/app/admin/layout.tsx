"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Users, Building2, Handshake, MessageSquareWarning, MessageCircle, LogOut, Menu, X, Car, FileText, Settings } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "نظرة عامة", href: "/admin", icon: <LayoutDashboard size={20} /> },
  { name: "طلبات الأفراد", href: "/admin/individuals", icon: <Users size={20} /> },
  { name: "طلبات الشركات", href: "/admin/corporates", icon: <Building2 size={20} /> },
  { name: "التعاون والشراكة", href: "/admin/partners", icon: <Handshake size={20} /> },
  { name: "الشكاوى والاقتراحات", href: "/admin/complaints", icon: <MessageSquareWarning size={20} /> },
  { name: "تواصل معنا (عام)", href: "/admin/general", icon: <MessageCircle size={20} /> },
  { name: "السيارات", href: "/admin/cars", icon: <Car size={20} /> },
  { name: "المقالات", href: "/admin/articles", icon: <FileText size={20} /> },
  { name: "الإعدادات", href: "/admin/settings", icon: <Settings size={20} /> },
];

import NextTopLoader from 'nextjs-toploader';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      <NextTopLoader color="#dc2626" showSpinner={false} />
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-smaa-blue-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex-shrink-0 flex flex-col ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <div className="relative w-40 h-14">
            <Image src="/logo.png" alt="SMAA CARS" fill className="object-contain filter brightness-0 invert" unoptimized />
          </div>
          <button className="lg:hidden text-white" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="p-4 text-xs font-bold text-white/50 uppercase tracking-wider mt-4">
          القائمة الرئيسية
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive 
                    ? "bg-smaa-red-600 text-white font-bold shadow-lg" 
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-300 hover:bg-red-500/10 hover:text-red-200 transition-colors"
          >
            <LogOut size={20} />
            تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Mobile Header */}
        <header className="lg:hidden bg-white shadow-sm h-16 flex items-center justify-between px-4 sticky top-0 z-30">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="text-smaa-blue-900 p-2 rounded-md hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>
          <span className="font-bold text-smaa-blue-900">لوحة التحكم</span>
          <div className="w-8"></div> {/* Placeholder for centering */}
        </header>

        {/* Page Content */}
        <div className="p-4 md:p-8 flex-1 overflow-y-auto">
          {children}
        </div>
      </main>

    </div>
  );
}
