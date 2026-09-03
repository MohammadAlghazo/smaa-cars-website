import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// ✅ Zod schema for strict contact validation
const contactSchema = z.object({
  type: z.enum(["individual", "corporate", "partner", "complaint", "general"]),
  name: z.string().max(100).optional().nullable(),
  phone: z
    .string()
    .min(9, "رقم الجوال غير صحيح")
    .max(20)
    .regex(/^[0-9+\s-]+$/, "رقم الجوال يحتوي على أحرف غير مسموح بها"),
  email: z.string().email("البريد الإلكتروني غير صحيح").optional().nullable(),
  city: z.string().max(50).optional().nullable(),
  // Individual fields
  carType: z.string().max(100).optional().nullable(),
  carModel: z.string().max(100).optional().nullable(),
  carCategory: z.string().max(50).optional().nullable(),
  carColor: z.string().max(50).optional().nullable(),
  budget: z.string().max(50).optional().nullable(),
  notes: z.string().max(1000).optional().nullable(),
  // Corporate fields
  companyName: z.string().max(100).optional().nullable(),
  managerName: z.string().max(100).optional().nullable(),
  activityType: z.string().max(100).optional().nullable(),
  carQuantity: z.string().max(20).optional().nullable(),
  // Partner fields
  applicantName: z.string().max(100).optional().nullable(),
  jobTitle: z.string().max(100).optional().nullable(),
  country: z.string().max(50).optional().nullable(),
  collaborationType: z.string().max(100).optional().nullable(),
  companyBio: z.string().max(1000).optional().nullable(),
  proposalDetails: z.string().max(2000).optional().nullable(),
  // Complaint fields
  complaintType: z.string().max(100).optional().nullable(),
  orderNumber: z.string().max(50).optional().nullable(),
  complaintTitle: z.string().max(200).optional().nullable(),
  requiredAction: z.string().max(500).optional().nullable(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));

    // ✅ Validate with Zod - prevents junk/oversized data reaching the DB
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "البيانات المرسلة غير صالحة", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;
    
    // DB requires 'name'. If it's missing (e.g. Corporate form), fallback to something else.
    const resolvedName = data.name || data.applicantName || data.companyName || "بدون اسم";

    const newContact = await prisma.contactMessage.create({
      data: {
        ...data,
        name: resolvedName
      },
    });

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error) {
    console.error("Error creating contact message:", error);
    return NextResponse.json({ error: "حدث خطأ أثناء إرسال الطلب، يرجى المحاولة لاحقاً" }, { status: 500 });
  }
}
