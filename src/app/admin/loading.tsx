import { Loader2 } from "lucide-react";

export default function AdminLoading() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-4 text-smaa-blue-900">
        <Loader2 className="animate-spin text-smaa-red-600" size={48} />
        <h3 className="text-lg font-bold">جاري تحميل البيانات...</h3>
        <p className="text-gray-500 text-sm">لحظات ونستعرض المعلومات المطلوبة.</p>
      </div>
    </div>
  );
}
