"use client";
import { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeleteRecordButton({ endpoint, itemName }: { endpoint: string, itemName: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm(`هل أنت متأكد من حذف ${itemName} بشكل نهائي؟`)) return;
    
    setIsDeleting(true);
    try {
      const res = await fetch(endpoint, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      } else {
        alert("حدث خطأ أثناء الحذف");
      }
    } catch {
      alert("حدث خطأ أثناء الحذف");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
      title="حذف"
    >
      {isDeleting ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
    </button>
  );
}
