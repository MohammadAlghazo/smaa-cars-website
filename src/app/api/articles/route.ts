import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAdminToken } from "@/lib/jwt";
import { revalidatePath } from "next/cache";
import { articleSchema } from "@/lib/schemas";

export async function GET(req: NextRequest) {
  try {
    let isAuthenticated = false;
    const token = req.cookies.get("smaa_admin_auth")?.value;
    if (token) {
      try {
        await verifyAdminToken(token);
        isAuthenticated = true;
      } catch {}
    }

    const whereClause = isAuthenticated ? undefined : { isPublished: true };

    const articles = await prisma.article.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(articles);
  } catch {
    return NextResponse.json({ error: "حدث خطأ أثناء جلب البيانات" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("smaa_admin_auth")?.value;
    if (!token) return NextResponse.json({ error: "غير مصرح لك" }, { status: 401 });
    try {
      await verifyAdminToken(token);
    } catch {
      return NextResponse.json({ error: "الجلسة منتهية" }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    
    const parsed = articleSchema.safeParse(body);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const firstError = Object.values(fieldErrors).flat()[0] || "بيانات غير صالحة";
      return NextResponse.json(
        { error: firstError, details: fieldErrors },
        { status: 400 }
      );
    }

    const article = await prisma.article.create({
      data: parsed.data,
    });

    revalidatePath("/articles");
    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error("Create Article Error:", error);
    return NextResponse.json(
      { error: "حدث خطأ، تأكد من أن الـ slug غير مكرر" },
      { status: 500 }
    );
  }
}
