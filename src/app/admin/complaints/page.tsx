import { prisma } from "@/lib/prisma";
import AdminPagination from "@/components/admin/AdminPagination";
import AdminSearch from "@/components/admin/AdminSearch";
import { MessageSquareWarning } from "lucide-react";

export const dynamic = "force-dynamic";

const ITEMS_PER_PAGE = 10;

export default async function ComplaintsPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const query = searchParams?.q || "";
  const currentPage = Number(searchParams?.page) || 1;

  const where = {
    type: "complaint",
    OR: [
      { name: { contains: query } },
      { phone: { contains: query } },
      { orderNumber: { contains: query } },
    ],
  };

  const totalItems = await prisma.contactMessage.count({ where });
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const requests = await prisma.contactMessage.findMany({
    where,
    orderBy: { createdAt: "desc" },
    skip: (currentPage - 1) * ITEMS_PER_PAGE,
    take: ITEMS_PER_PAGE,
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-smaa-blue-900 mb-2 flex items-center gap-3">
            <MessageSquareWarning className="text-smaa-red-600" />
            شكاوى واقتراحات
          </h1>
          <p className="text-gray-500 text-sm">إجمالي الطلبات: {totalItems}</p>
        </div>
        <AdminSearch placeholder="ابحث بالاسم أو رقم الجوال أو الطلب..." />
      </div>

      <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm">
              <tr>
                <th className="p-4 font-bold whitespace-nowrap">التاريخ</th>
                <th className="p-4 font-bold whitespace-nowrap">الاسم</th>
                <th className="p-4 font-bold whitespace-nowrap">النوع</th>
                <th className="p-4 font-bold whitespace-nowrap">العنوان</th>
                <th className="p-4 font-bold whitespace-nowrap">رقم الطلب</th>
                <th className="p-4 font-bold whitespace-nowrap">رقم الجوال</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {requests.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-gray-500 font-light">لا يوجد طلبات تطابق بحثك حالياً</td>
                </tr>
              ) : (
                requests.map((req) => (
                  <tr key={req.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                      {req.createdAt.toLocaleDateString("ar-SA")}
                    </td>
                    <td className="p-4 font-bold text-gray-800">{req.name}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1.5 rounded-sm text-xs font-bold ${
                        req.complaintType === 'شكوى' ? 'bg-red-50 text-red-700' :
                        req.complaintType === 'اقتراح' ? 'bg-green-50 text-green-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {req.complaintType || "غير محدد"}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600 font-medium max-w-[200px] truncate" title={req.complaintTitle || ''}>
                      {req.complaintTitle || "---"}
                    </td>
                    <td className="p-4 font-medium text-gray-600" dir="ltr">{req.orderNumber || "---"}</td>
                    <td className="p-4 text-gray-600" dir="ltr">{req.phone}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AdminPagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
