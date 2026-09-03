import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { verifyAdminToken } from "@/lib/jwt";

// ✅ Zod schema for strict article validation
const articleSchema = z.object({
  title: z.string().min(1, "العنوان مطلوب").max(200),
  slug: z
    .string()
    .min(1, "الـ slug مطلوب")
    .max(100)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "الـ slug يجب أن يحتوي على حروف إنجليزية صغيرة وأرقام وشرطات فقط"),
  excerpt: z.string().min(1, "الملخص مطلوب").max(500),
  content: z.string().min(1, "المحتوى مطلوب"),
  coverImage: z.string().url("رابط صورة الغلاف غير صالح"),
  author: z.string().default("SMAA CARS"),
  isPublished: z.boolean().default(true),
});

export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(articles);
  } catch {
    return NextResponse.json({ error: "حدث خطأ أثناء جلب البيانات" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    // ✅ Require admin JWT for write operations
    const token = req.cookies.get("smaa_admin_auth")?.value;
    if (!token) {
      return NextResponse.json({ error: "غير مصرح لك" }, { status: 401 });
    }
    await verifyAdminToken(token);

    const body = await req.json();

    // ✅ Validate with Zod
    const parsed = articleSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "بيانات غير صالحة", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const article = await prisma.article.create({
      data: parsed.data,
    });

    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error("Create Article Error:", error);
    // Handle unique constraint violation on slug
    return NextResponse.json(
      { error: "حدث خطأ، تأكد من أن الـ slug غير مكرر" },
      { status: 500 }
    );
  }
}
