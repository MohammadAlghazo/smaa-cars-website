import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";
const prisma = new PrismaClient();

export default async function PartnersPage() {
  const requests = await prisma.contactMessage.findMany({
    where: { type: "partner" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-smaa-blue-900 mb-8">التعاون والشراكة</h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm">
              <tr>
                <th className="p-4 font-bold">التاريخ</th>
                <th className="p-4 font-bold">الجهة</th>
                <th className="p-4 font-bold">مقدم الطلب</th>
                <th className="p-4 font-bold">التواصل</th>
                <th className="p-4 font-bold">نوع التعاون</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {requests.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-500">لا يوجد طلبات حالياً</td>
                </tr>
              ) : (
                requests.map((req) => (
                  <tr key={req.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                      {req.createdAt.toLocaleDateString("ar-SA")}
                    </td>
                    <td className="p-4 font-bold text-gray-800">{req.companyName}</td>
                    <td className="p-4 text-gray-700">
                      {req.applicantName}
                      {req.jobTitle && <span className="block text-xs text-gray-400">{req.jobTitle}</span>}
                    </td>
                    <td className="p-4 text-gray-600 text-sm" dir="ltr">
                      {req.phone}<br/>{req.email}
                    </td>
                    <td className="p-4">
                      <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
                        {req.collaborationType || "غير محدد"}
                      </span>
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
