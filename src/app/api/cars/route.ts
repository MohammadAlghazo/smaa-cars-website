import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { verifyAdminToken } from "@/lib/jwt";

// ✅ Zod schema for strict validation
const carSchema = z.object({
  name: z.string().min(1, "اسم السيارة مطلوب").max(100),
  brand: z.string().min(1, "الماركة مطلوبة").max(50),
  modelYear: z.string().regex(/^\d{4}$/, "سنة الموديل يجب أن تكون 4 أرقام"),
  mileage: z.string().min(1, "المسافة مطلوبة"),
  price: z.string().nullable().optional(),
  description: z.string().min(1, "الوصف مطلوب"),
  mainImage: z.string().url("رابط الصورة الرئيسية غير صالح"),
  images: z.array(z.string().url()).default([]),
  features: z.array(z.string()).default([]),
  isAvailable: z.boolean().default(true),
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    const cars = await prisma.car.findMany({
      where: category ? { brand: category } : undefined,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(cars);
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
    const parsed = carSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "بيانات غير صالحة", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { images, features, ...rest } = parsed.data;

    const car = await prisma.car.create({
      data: {
        ...rest,
        images: JSON.stringify(images),
        features: JSON.stringify(features),
      },
    });

    return NextResponse.json(car, { status: 201 });
  } catch (error) {
    console.error("Create Car Error:", error);
    return NextResponse.json({ error: "حدث خطأ أثناء إنشاء السيارة" }, { status: 500 });
  }
}
