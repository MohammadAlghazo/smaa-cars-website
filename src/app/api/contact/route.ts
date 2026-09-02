import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// In development, to avoid multiple instances of PrismaClient
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}
const prisma = globalForPrisma.prisma ?? new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, type, message, city, carType, budget } = body;

    if (!name || !phone || !type) {
      return NextResponse.json({ error: "الاسم، ورقم الجوال، ونوع الطلب حقول مطلوبة" }, { status: 400 });
    }

    const newContact = await prisma.contactMessage.create({
      data: {
        name,
        phone,
        email,
        type,
        message,
        city,
        carType,
        budget,
      },
    });

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error) {
    console.error("Error creating contact message:", error);
    return NextResponse.json({ error: "حدث خطأ أثناء إرسال الطلب، يرجى المحاولة لاحقاً" }, { status: 500 });
  }
}
