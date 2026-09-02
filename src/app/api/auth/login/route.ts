import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    // Simple hardcoded auth for demo/MVP purposes
    if (username === "admin" && password === "admin123") {
      const response = NextResponse.json({ success: true });
      
      response.cookies.set({
        name: "smaa_admin_auth",
        value: "authenticated",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7 // 1 week
      });

      return response;
    }

    return NextResponse.json({ error: "بيانات الدخول غير صحيحة" }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "حدث خطأ" }, { status: 500 });
  }
}
