import { z } from "zod";

const imageValidator = z.string().refine((val) => val.startsWith("/") || val.startsWith("http"), {
  message: "يرجى تحديد أو رفع صورة صحيحة",
});

export const carSchema = z.object({
  name: z.string().min(1, "اسم السيارة مطلوب").max(100).trim(),
  brand: z.string().min(1, "الماركة مطلوبة").max(50).trim(),
  modelYear: z.string().regex(/^\d{4}$/, "سنة الموديل يجب أن تكون 4 أرقام"),
  mileage: z.string().min(1, "المسافة مطلوبة").trim(),
  price: z.string().nullable().optional(),
  description: z.string().min(1, "الوصف مطلوب"),
  mainImage: imageValidator,
  images: z.array(imageValidator).default([]),
  features: z.array(z.string()).default([]),
  isAvailable: z.boolean().default(true),
});

export const articleSchema = z.object({
  title: z.string().min(1, "العنوان مطلوب").max(200).trim(),
  slug: z
    .string()
    .min(1, "رابط المقال (slug) مطلوب")
    .max(100)
    .regex(/^[a-zA-Z0-9\u0600-\u06FF]+(?:-[a-zA-Z0-9\u0600-\u06FF]+)*$/, "الرابط يجب أن يحتوي على أحرف وأرقام وشرطات فقط"),
  excerpt: z.string().min(1, "الملخص مطلوب").max(500).trim(),
  content: z.string().min(1, "المحتوى مطلوب"),
  coverImage: imageValidator,
  author: z.string().min(1, "اسم الكاتب مطلوب").max(100).default("SMAA CARS"),
  isPublished: z.boolean().default(true),
});
