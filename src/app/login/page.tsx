"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Network error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-gray-100">
        
        <div className="flex justify-center mb-8 relative w-32 h-12 mx-auto">
          <Image src="/logo.png" alt="SMAA CARS" fill className="object-contain" unoptimized />
        </div>
        
        <h1 className="text-2xl font-bold text-center text-smaa-blue-900 mb-8">تسجيل الدخول للإدارة</h1>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 text-center border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">اسم المستخدم</label>
            <input 
              type="text" 
              dir="ltr"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-smaa-blue-900 focus:ring-1 focus:ring-smaa-blue-900 text-right"
              required 
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">كلمة المرور</label>
            <input 
              type="password" 
              dir="ltr"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-smaa-blue-900 focus:ring-1 focus:ring-smaa-blue-900 text-right"
              required 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-smaa-blue-900 hover:bg-smaa-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center mt-4"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : "دخول"}
          </button>
        </form>
        
      </div>
    </div>
  );
}
