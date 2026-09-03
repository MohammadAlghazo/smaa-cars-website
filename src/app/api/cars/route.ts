import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    
    // Simple filter if needed
    const cars = await prisma.car.findMany({
      where: category ? { brand: category } : undefined,
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json(cars);
  } catch {
    return NextResponse.json({ error: "Error fetching cars" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const car = await prisma.car.create({
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
        isAvailable: data.isAvailable ?? true,
      }
    });
    return NextResponse.json(car);
  } catch {
    return NextResponse.json({ error: "Error creating car" }, { status: 500 });
  }
}
