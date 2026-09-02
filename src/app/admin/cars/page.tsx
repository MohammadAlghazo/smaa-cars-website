import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { Car, Plus, Edit } from "lucide-react";

export const dynamic = "force-dynamic";
const prisma = new PrismaClient();

export default async function AdminCarsPage() {
  const cars = await prisma.car.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-smaa-blue-900">إدارة السيارات</h1>
        <Link 
          href="/admin/cars/new" 
          className="bg-smaa-red-600 hover:bg-smaa-red-500 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
        >
          <Plus size={20} />
          إضافة سيارة جديدة
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm">
              <tr>
                <th className="p-4 font-bold w-16">#</th>
                <th className="p-4 font-bold">صورة</th>
                <th className="p-4 font-bold">الماركة والموديل</th>
                <th className="p-4 font-bold">السنة</th>
                <th className="p-4 font-bold">الممشى</th>
                <th className="p-4 font-bold">الحالة</th>
                <th className="p-4 font-bold text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {cars.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-gray-500">لا يوجد سيارات حتى الآن</td>
                </tr>
              ) : (
                cars.map((car, idx) => (
                  <tr key={car.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-500">{idx + 1}</td>
                    <td className="p-4">
                      {car.mainImage ? (
                        <img src={car.mainImage} alt={car.name} className="w-16 h-12 object-cover rounded-md border border-gray-200" />
                      ) : (
                        <div className="w-16 h-12 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                          <Car size={20} />
                        </div>
                      )}
                    </td>
                    <td className="p-4 font-bold text-smaa-blue-900">{car.brand} - {car.name}</td>
                    <td className="p-4 text-gray-600">{car.modelYear}</td>
                    <td className="p-4 text-gray-600">{car.mileage}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${car.isAvailable ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {car.isAvailable ? "متاحة" : "مباعة"}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <Link href={`/admin/cars/${car.id}/edit`} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit size={18} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
