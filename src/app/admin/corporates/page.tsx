import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function CorporatesPage() {
  const requests = await prisma.contactMessage.findMany({
    where: { type: "corporate" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-smaa-blue-900 mb-8">طلبات الشركات</h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm">
              <tr>
                <th className="p-4 font-bold">التاريخ</th>
                <th className="p-4 font-bold">الشركة</th>
                <th className="p-4 font-bold">المسؤول</th>
                <th className="p-4 font-bold">التواصل</th>
                <th className="p-4 font-bold">السيارات / العدد</th>
                <th className="p-4 font-bold">الميزانية</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {requests.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">لا يوجد طلبات حالياً</td>
                </tr>
              ) : (
                requests.map((req) => (
                  <tr key={req.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                      {req.createdAt.toLocaleDateString("ar-SA")}
                    </td>
                    <td className="p-4 font-bold text-gray-800">{req.companyName}</td>
                    <td className="p-4 text-gray-700">{req.managerName}</td>
                    <td className="p-4 text-gray-600 text-sm" dir="ltr">
                      {req.phone}<br/>{req.email}
                    </td>
                    <td className="p-4 text-gray-600">
                      {req.carType} <br/> 
                      <span className="text-sm bg-gray-100 px-2 rounded">العدد: {req.carQuantity || "غير محدد"}</span>
                    </td>
                    <td className="p-4 font-medium text-smaa-red-600">{req.budget || "غير محدد"}</td>
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
