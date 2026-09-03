import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { verifyAdminToken } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    // ✅ Verify the JWT - not just a plain string comparison
    const token = req.cookies.get("smaa_admin_auth")?.value;

    if (!token) {
      return NextResponse.json({ error: "غير مصرح لك بالوصول" }, { status: 401 });
    }

    try {
      await verifyAdminToken(token);
    } catch {
      return NextResponse.json({ error: "انتهت صلاحية الجلسة" }, { status: 401 });
    }

    const { currentPassword, newPassword } = await req.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: "الحقول مطلوبة" }, { status: 400 });
    }

    if (newPassword.length < 8) {
      return NextResponse.json({ error: "كلمة المرور الجديدة يجب أن تكون 8 أحرف على الأقل" }, { status: 400 });
    }

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

    const hashedNewPassword = await bcrypt.hash(newPassword, 12);

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
