import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const admin = await prisma.adminUser.findUnique({
      where: { username },
    });

    if (admin && (await bcrypt.compare(password, admin.passwordHash))) {
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
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ error: "حدث خطأ في النظام" }, { status: 500 });
  }
}
