import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAdminToken } from "@/lib/jwt";
import { carSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const car = await prisma.car.findUnique({ where: { id: params.id } });
    if (!car) return NextResponse.json({ error: "السيارة غير موجودة" }, { status: 404 });

    // Check auth to see if we should expose unavailable cars
    let isAuthenticated = false;
    const token = req.cookies.get("smaa_admin_auth")?.value;
    if (token) {
      try {
        await verifyAdminToken(token);
        isAuthenticated = true;
      } catch {}
    }

    if (!car.isAvailable && !isAuthenticated) {
      return NextResponse.json({ error: "السيارة غير موجودة" }, { status: 404 });
    }

    return NextResponse.json(car);
  } catch {
    return NextResponse.json({ error: "حدث خطأ أثناء جلب البيانات" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // ✅ JWT Auth
    const token = req.cookies.get("smaa_admin_auth")?.value;
    if (!token) return NextResponse.json({ error: "غير مصرح لك" }, { status: 401 });
    try {
      await verifyAdminToken(token);
    } catch {
      return NextResponse.json({ error: "الجلسة منتهية" }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    
    // ✅ Validate input
    const parsed = carSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "بيانات غير صالحة", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { images, features, ...rest } = parsed.data;

    const car = await prisma.car.update({
      where: { id: params.id },
      data: {
        ...rest,
        images: JSON.stringify(images),
        features: JSON.stringify(features),
      },
    });

    revalidatePath("/cars");
    revalidatePath(`/cars/${params.id}`);
    return NextResponse.json(car);
  } catch {
    return NextResponse.json({ error: "حدث خطأ أثناء تعديل البيانات" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // ✅ JWT Auth
    const token = req.cookies.get("smaa_admin_auth")?.value;
    if (!token) return NextResponse.json({ error: "غير مصرح لك" }, { status: 401 });
    try {
      await verifyAdminToken(token);
    } catch {
      return NextResponse.json({ error: "الجلسة منتهية" }, { status: 401 });
    }

    await prisma.car.delete({ where: { id: params.id } });
    
    revalidatePath("/cars");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "حدث خطأ أثناء الحذف" }, { status: 500 });
  }
}
