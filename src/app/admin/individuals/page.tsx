import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";
const prisma = new PrismaClient();

export default async function IndividualsPage() {
  const requests = await prisma.contactMessage.findMany({
    where: { type: "individual" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-smaa-blue-900 mb-8">طلبات الأفراد</h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm">
              <tr>
                <th className="p-4 font-bold">التاريخ</th>
                <th className="p-4 font-bold">الاسم</th>
                <th className="p-4 font-bold">رقم الجوال</th>
                <th className="p-4 font-bold">نوع الطلب</th>
                <th className="p-4 font-bold">السيارة</th>
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
                    <td className="p-4 font-bold text-gray-800">{req.name}</td>
                    <td className="p-4 text-gray-600" dir="ltr">{req.phone}</td>
                    <td className="p-4">
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
                        {req.carCategory || "غير محدد"}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">
                      {req.carType} {req.carModel} {req.carColor ? `(${req.carColor})` : ''}
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
