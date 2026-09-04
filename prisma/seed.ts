import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 1. Seed Cars
  const cars = [
    {
      name: "تويوتا لاند كروزر 2024 VXR",
      brand: "تويوتا",
      modelYear: "2024",
      mileage: "0 كم",
      price: "385,000 ريال",
      mainImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
      isAvailable: true,
      description: "سيارة الدفع الرباعي الأقوى في فئتها، فل كامل مع جميع المواصفات الفاخرة وأنظمة السلامة الحديثة.",
      images: "[]",
      features: "[]",
    },
    {
      name: "مرسيدس بنز S-Class 2024",
      brand: "مرسيدس",
      modelYear: "2024",
      mileage: "5,000 كم",
      price: "650,000 ريال",
      mainImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop",
      isAvailable: true,
      description: "فخامة لا تضاهى مع أحدث التقنيات الألمانية في عالم السيارات السيدان الفارهة.",
      images: "[]",
      features: "[]",
    },
    {
      name: "لكزس LX 600 2024 F-Sport",
      brand: "لكزس",
      modelYear: "2024",
      mileage: "0 كم",
      price: "580,000 ريال",
      mainImage: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop",
      isAvailable: true,
      description: "مزيج مثالي بين الفخامة والأداء الرياضي والاعتمادية العالية للسيارة اليابانية العريقة.",
      images: "[]",
      features: "[]",
    },
    {
      name: "هيونداي باليسيد 2024",
      brand: "هيونداي",
      modelYear: "2024",
      mileage: "12,000 كم",
      price: "155,000 ريال",
      mainImage: "https://images.unsplash.com/photo-1633507300302-39c8c99a6b10?q=80&w=1000&auto=format&fit=crop",
      isAvailable: true,
      description: "سيارة عائلية بامتياز مع 3 صفوف من المقاعد وتقنيات ترفيه ومساعدة للسائق متطورة.",
      images: "[]",
      features: "[]",
    }
  ];

  for (const car of cars) {
    await prisma.car.create({
      data: car
    });
  }
  console.log("Cars seeded!");

  // 2. Seed Articles
  const articles = [
    {
      title: "دليلك الشامل لاستيراد السيارات من الخارج خطوة بخطوة",
      slug: "comprehensive-guide-importing-cars",
      excerpt: "تعرف على الإجراءات الجمركية والمواصفات المعتمدة وأهم النصائح لتجنب الأخطاء الشائعة عند استيراد سيارة إلى المملكة.",
      content: "تفاصيل المقال ستكون هنا...",
      author: "أحمد عبدالله",
      coverImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop",
      isPublished: true,
    },
    {
      title: "ما هي السيارات الأكثر طلباً في السوق السعودي لعام 2024؟",
      slug: "most-demanded-cars-saudi-market-2024",
      excerpt: "نستعرض معكم أحدث الإحصائيات والأرقام حول السيارات الأكثر مبيعاً وطلباً من قبل الأفراد والشركات في المملكة.",
      content: "تفاصيل المقال ستكون هنا...",
      author: "فريق التحرير",
      coverImage: "https://images.unsplash.com/photo-1503376712391-0e1ce5ec4a02?q=80&w=1000&auto=format&fit=crop",
      isPublished: true,
    },
    {
      title: "كيف تستفيد الشركات من خدمة توريد الأساطيل التشغيلية؟",
      slug: "benefits-corporate-fleet-supply",
      excerpt: "دراسة حالة توضح الفوائد المالية والتشغيلية التي تعود على الشركات عند الاعتماد على وكيل توريد متخصص لأساطيلها.",
      content: "تفاصيل المقال ستكون هنا...",
      author: "د. خالد السعيد",
      coverImage: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop",
      isPublished: true,
    }
  ];

  for (const article of articles) {
    await prisma.article.create({
      data: article
    });
  }
  console.log("Articles seeded!");

  console.log("Seeding completed successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
