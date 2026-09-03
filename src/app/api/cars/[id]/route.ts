import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const car = await prisma.car.findUnique({ where: { id: params.id } });
    if (!car) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(car);
  } catch {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await req.json();
    const car = await prisma.car.update({
      where: { id: params.id },
      data: {
        name: data.name,
        brand: data.brand,
        modelYear: data.modelYear,
        mileage: data.mileage,
        price: data.price,
        description: data.description,
        mainImage: data.mainImage,
        images: JSON.stringify(data.images || []),
        features: JSON.stringify(data.features || []),
        isAvailable: data.isAvailable,
      }
    });
    return NextResponse.json(car);
  } catch {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.car.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
