import { prisma } from "@/lib/prisma";
import AdminPagination from "@/components/admin/AdminPagination";
import AdminSearch from "@/components/admin/AdminSearch";
import { Handshake } from "lucide-react";

export const dynamic = "force-dynamic";

const ITEMS_PER_PAGE = 10;

export default async function PartnersPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const query = searchParams?.q || "";
  const currentPage = Number(searchParams?.page) || 1;

  const where = {
    type: "partner",
    OR: [
      { companyName: { contains: query } },
      { applicantName: { contains: query } },
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
            <Handshake className="text-amber-500" />
            شراكات وتعاون
          </h1>
          <p className="text-gray-500 text-sm">إجمالي الطلبات: {totalItems}</p>
        </div>
        <AdminSearch placeholder="ابحث باسم الشركة أو مقدم الطلب..." />
      </div>

      <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm">
              <tr>
                <th className="p-4 font-bold whitespace-nowrap">التاريخ</th>
                <th className="p-4 font-bold whitespace-nowrap">الجهة / الشركة</th>
                <th className="p-4 font-bold whitespace-nowrap">مقدم الطلب</th>
                <th className="p-4 font-bold whitespace-nowrap">المدينة / الدولة</th>
                <th className="p-4 font-bold whitespace-nowrap">نوع التعاون</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {requests.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-gray-500 font-light">لا يوجد طلبات تطابق بحثك حالياً</td>
                </tr>
              ) : (
                requests.map((req) => (
                  <tr key={req.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                      {req.createdAt.toLocaleDateString("ar-SA")}
                    </td>
                    <td className="p-4 font-bold text-gray-800">{req.companyName}</td>
                    <td className="p-4">
                      <span className="block font-medium">{req.applicantName}</span>
                      <span className="text-xs text-gray-500">{req.jobTitle}</span>
                    </td>
                    <td className="p-4 text-gray-600">{req.country || "---"}</td>
                    <td className="p-4">
                      <span className="bg-amber-50 text-amber-700 px-3 py-1.5 rounded-sm text-xs font-bold">
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

      <AdminPagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
