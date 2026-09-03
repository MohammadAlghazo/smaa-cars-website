import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signAdminToken } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ error: "بيانات الدخول غير مكتملة" }, { status: 400 });
    }

    const admin = await prisma.adminUser.findUnique({
      where: { username },
    });

    if (!admin || !(await bcrypt.compare(password, admin.passwordHash))) {
      // Intentionally vague to prevent username enumeration
      return NextResponse.json({ error: "بيانات الدخول غير صحيحة" }, { status: 401 });
    }

    // ✅ Issue a signed JWT instead of a plain "authenticated" string
    const token = await signAdminToken(admin.username);

    const response = NextResponse.json({ success: true });

    response.cookies.set({
      name: "smaa_admin_auth",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return response;
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ error: "حدث خطأ في النظام" }, { status: 500 });
  }
}
