import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAdminToken } from "@/lib/jwt";
import { articleSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const article = await prisma.article.findUnique({ where: { id: params.id } });
    if (!article) return NextResponse.json({ error: "المقال غير موجود" }, { status: 404 });

    let isAuthenticated = false;
    const token = req.cookies.get("smaa_admin_auth")?.value;
    if (token) {
      try {
        await verifyAdminToken(token);
        isAuthenticated = true;
      } catch {}
    }

    if (!article.isPublished && !isAuthenticated) {
      return NextResponse.json({ error: "المقال غير موجود" }, { status: 404 });
    }

    return NextResponse.json(article);
  } catch {
    return NextResponse.json({ error: "حدث خطأ أثناء جلب البيانات" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
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
      return NextResponse.json(
        { error: "بيانات غير صالحة", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const article = await prisma.article.update({
      where: { id: params.id },
      data: parsed.data,
    });

    revalidatePath("/articles");
    revalidatePath(`/articles/${article.slug}`);
    return NextResponse.json(article);
  } catch {
    return NextResponse.json({ error: "حدث خطأ، تأكد من أن الـ slug غير مكرر" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const token = req.cookies.get("smaa_admin_auth")?.value;
    if (!token) return NextResponse.json({ error: "غير مصرح لك" }, { status: 401 });
    try {
      await verifyAdminToken(token);
    } catch {
      return NextResponse.json({ error: "الجلسة منتهية" }, { status: 401 });
    }

    await prisma.article.delete({ where: { id: params.id } });
    
    revalidatePath("/articles");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "حدث خطأ أثناء الحذف" }, { status: 500 });
  }
}
