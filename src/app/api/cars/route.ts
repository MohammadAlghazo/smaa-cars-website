import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAdminToken } from "@/lib/jwt";
import { revalidatePath } from "next/cache";
import { carSchema } from "@/lib/schemas";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    // Check auth to see if we should expose unavailable cars
    let isAuthenticated = false;
    const token = req.cookies.get("smaa_admin_auth")?.value;
    if (token) {
      try {
        await verifyAdminToken(token);
        isAuthenticated = true;
      } catch {}
    }

    const whereClause: { brand?: string; isAvailable?: boolean } = {};
    if (category) whereClause.brand = category;
    if (!isAuthenticated) whereClause.isAvailable = true; // Hide unavailable from public

    const cars = await prisma.car.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(cars);
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

    revalidatePath("/cars"); // ✅ Clear public cache
    return NextResponse.json(car, { status: 201 });
  } catch (error) {
    console.error("Create Car Error:", error);
    return NextResponse.json({ error: "حدث خطأ أثناء إنشاء السيارة" }, { status: 500 });
  }
}
