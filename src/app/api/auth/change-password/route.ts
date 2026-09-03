import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const authCookie = req.cookies.get("smaa_admin_auth")?.value;
    
    if (authCookie !== "authenticated") {
      return NextResponse.json({ error: "غير مصرح لك بالوصول" }, { status: 401 });
    }

    const { currentPassword, newPassword } = await req.json();

    // We only have one admin for MVP, so we assume username 'admin'
    const admin = await prisma.adminUser.findUnique({
      where: { username: "admin" },
    });

    if (!admin) {
      return NextResponse.json({ error: "حساب المدير غير موجود" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(currentPassword, admin.passwordHash);
    if (!isMatch) {
      return NextResponse.json({ error: "كلمة المرور الحالية غير صحيحة" }, { status: 401 });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    
    await prisma.adminUser.update({
      where: { username: "admin" },
      data: { passwordHash: hashedNewPassword },
    });

    return NextResponse.json({ success: true, message: "تم تغيير كلمة المرور بنجاح" });
  } catch (error) {
    console.error("Change Password Error:", error);
    return NextResponse.json({ error: "حدث خطأ في النظام" }, { status: 500 });
  }
}
