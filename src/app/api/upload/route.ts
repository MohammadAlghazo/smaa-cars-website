import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { existsSync } from "fs";
import { verifyAdminToken } from "@/lib/jwt";
import sharp from "sharp";

const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
];

const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("smaa_admin_auth")?.value;
    if (!token) {
      return NextResponse.json({ error: "غير مصرح لك" }, { status: 401 });
    }
    try {
      await verifyAdminToken(token);
    } catch {
      return NextResponse.json({ error: "انتهت صلاحية الجلسة" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "لا يوجد ملف" }, { status: 400 });
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: `نوع الملف غير مسموح به. الأنواع المسموح بها: JPEG, PNG, WebP, GIF` },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json(
        { error: `حجم الملف يتجاوز الحد المسموح به (${MAX_FILE_SIZE_MB}MB)` },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    
    const optimizedBuffer = await sharp(buffer)
      .resize(1920, 1920, { 
        fit: "inside", 
        withoutEnlargement: true 
      }) 
      .webp({ quality: 80 }) 
      .toBuffer();

    const safeName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.webp`;

    const uploadDir = path.join(process.cwd(), "public", "uploads");

    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    const filepath = path.join(uploadDir, safeName);
    await writeFile(filepath, optimizedBuffer);

    return NextResponse.json({ url: `/uploads/${safeName}` });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "حدث خطأ أثناء معالجة ورفع الصورة" }, { status: 500 });
  }
}
