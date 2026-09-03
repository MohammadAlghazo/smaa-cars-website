import { Users, Building2, Handshake, MessageSquareWarning, MessageCircle, Car, FileText } from "lucide-react";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const counts = await Promise.all([
    prisma.contactMessage.count({ where: { type: "individual" } }),
    prisma.contactMessage.count({ where: { type: "corporate" } }),
    prisma.contactMessage.count({ where: { type: "partner" } }),
    prisma.contactMessage.count({ where: { type: "complaint" } }),
    prisma.contactMessage.count({ where: { type: "general" } }),
    prisma.car.count(),
    prisma.article.count(),
  ]);

  const stats = [
    { label: "السيارات", count: counts[5], icon: <Car size={32} className="text-smaa-red-600" /> },
    { label: "المقالات", count: counts[6], icon: <FileText size={32} className="text-smaa-blue-600" /> },
    { label: "طلبات الأفراد", count: counts[0], icon: <Users size={32} className="text-blue-500" /> },
    { label: "طلبات الشركات", count: counts[1], icon: <Building2 size={32} className="text-indigo-500" /> },
    { label: "التعاون والشراكة", count: counts[2], icon: <Handshake size={32} className="text-teal-500" /> },
    { label: "الشكاوى والاقتراحات", count: counts[3], icon: <MessageSquareWarning size={32} className="text-orange-500" /> },
    { label: "تواصل معنا", count: counts[4], icon: <MessageCircle size={32} className="text-gray-500" /> },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-smaa-blue-900 mb-8">نظرة عامة</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="bg-gray-50 p-4 rounded-full mb-4">
              {stat.icon}
            </div>
            <h3 className="text-gray-500 font-medium mb-2">{stat.label}</h3>
            <span className="text-4xl font-bold text-gray-800">{stat.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
