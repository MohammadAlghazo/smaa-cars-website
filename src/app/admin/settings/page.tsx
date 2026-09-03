"use client";

import { useState } from "react";
import { KeyRound, Save, Loader2 } from "lucide-react";

export default function SettingsPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("كلمة المرور الجديدة غير متطابقة.");
      return;
    }

    if (newPassword.length < 6) {
      setError("يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message || "تم تغيير كلمة المرور بنجاح.");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setError(data.error || "حدث خطأ أثناء تغيير كلمة المرور.");
      }
    } catch {
      setError("خطأ في الاتصال بالخادم.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = "w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-smaa-blue-700 focus:ring-1 focus:ring-smaa-blue-700 transition-colors bg-white";
  const labelClass = "block text-sm font-bold text-gray-700 mb-2";

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-smaa-blue-900">إعدادات الحساب</h1>
        <p className="text-gray-500 mt-2">إدارة حسابك وتغيير كلمة المرور الخاصة بك.</p>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <div className="bg-orange-50 p-3 rounded-xl text-orange-600">
            <KeyRound size={24} />
          </div>
          <h2 className="text-xl font-bold text-smaa-blue-900">تغيير كلمة المرور</h2>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 border border-red-200 text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 border border-green-200 text-sm font-medium">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={labelClass}>كلمة المرور الحالية</label>
            <input 
              type="password" 
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className={inputClass} 
              required
              dir="ltr"
            />
          </div>

          <div>
            <label className={labelClass}>كلمة المرور الجديدة</label>
            <input 
              type="password" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={inputClass} 
              required
              dir="ltr"
            />
          </div>

          <div>
            <label className={labelClass}>تأكيد كلمة المرور الجديدة</label>
            <input 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={inputClass} 
              required
              dir="ltr"
            />
          </div>

          <div className="pt-4 border-t border-gray-100">
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full sm:w-auto bg-smaa-blue-900 hover:bg-smaa-blue-800 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : (
                <>
                  <Save size={20} /> حفظ التغييرات
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
