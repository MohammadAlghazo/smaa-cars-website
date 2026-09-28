import { prisma } from "@/lib/prisma";
import AdminPagination from "@/components/admin/AdminPagination";
import AdminSearch from "@/components/admin/AdminSearch";
import DeleteRecordButton from "@/components/admin/DeleteRecordButton";
import { Building2 } from "lucide-react";

export const dynamic = "force-dynamic";

const ITEMS_PER_PAGE = 10;

export default async function CorporatesPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const query = searchParams?.q || "";
  const currentPage = Number(searchParams?.page) || 1;

  const where = {
    type: "corporate",
    OR: [
      { companyName: { contains: query } },
      { managerName: { contains: query } },
      { phone: { contains: query } },
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
            <Building2 className="text-smaa-red-600" />
            طلبات الشركات
          </h1>
          <p className="text-gray-500 text-sm">إجمالي الطلبات: {totalItems}</p>
        </div>
        <AdminSearch placeholder="ابحث باسم الشركة أو رقم الجوال..." />
      </div>

      <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm">
              <tr>
                <th className="p-4 font-bold whitespace-nowrap">التاريخ</th>
                <th className="p-4 font-bold whitespace-nowrap">الشركة</th>
                <th className="p-4 font-bold whitespace-nowrap">رقم الجوال</th>
                <th className="p-4 font-bold whitespace-nowrap">النشاط</th>
                <th className="p-4 font-bold whitespace-nowrap">السيارات المطلوبة</th>
                <th className="p-4 font-bold whitespace-nowrap">الكمية</th>
                <th className="p-4 font-bold whitespace-nowrap text-center">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {requests.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-12 text-center text-gray-500 font-light">لا يوجد طلبات تطابق بحثك حالياً</td>
                </tr>
              ) : (
                requests.map((req) => (
                  <tr key={req.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                      {req.createdAt.toLocaleDateString("ar-SA")}
                    </td>
                    <td className="p-4">
                      <span className="block font-bold text-gray-800">{req.companyName}</span>
                      <span className="text-xs text-gray-400">{req.managerName}</span>
                    </td>
                    <td className="p-4 text-gray-600" dir="ltr">{req.phone}</td>
                    <td className="p-4 text-gray-600 text-sm">{req.activityType || "---"}</td>
                    <td className="p-4 text-gray-600 text-sm">
                      <span className="block font-bold">{req.carType}</span>
                      <span className="text-xs text-gray-400">{req.carModel}</span>
                    </td>
                    <td className="p-4">
                      <span className="bg-smaa-blue-50 text-smaa-blue-900 px-3 py-1.5 rounded-sm text-xs font-bold">
                        {req.carQuantity || "---"}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <DeleteRecordButton endpoint={`/api/contact/${req.id}`} itemName="طلب الشركة" />
                    </td>
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
