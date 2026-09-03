import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      type, name, phone, email, city, carType, carModel, carCategory, 
      carColor, budget, notes, companyName, managerName, activityType, 
      carQuantity, applicantName, jobTitle, country, collaborationType, 
      companyBio, proposalDetails, complaintType, orderNumber, 
      complaintTitle, requiredAction 
    } = body;

    if (!name || !phone || !type) {
      return NextResponse.json({ error: "الاسم، ورقم الجوال، ونوع الطلب حقول مطلوبة" }, { status: 400 });
    }

    const newContact = await prisma.contactMessage.create({
      data: {
        type, name, phone, email, city, carType, carModel, carCategory, 
        carColor, budget, notes, companyName, managerName, activityType, 
        carQuantity, applicantName, jobTitle, country, collaborationType, 
        companyBio, proposalDetails, complaintType, orderNumber, 
        complaintTitle, requiredAction
      },
    });

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error) {
    console.error("Error creating contact message:", error);
    return NextResponse.json({ error: "حدث خطأ أثناء إرسال الطلب، يرجى المحاولة لاحقاً" }, { status: 500 });
  }
}
