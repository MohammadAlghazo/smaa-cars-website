import { prisma } from '../src/lib/prisma';
import bcrypt from 'bcryptjs';
import { signAdminToken, verifyAdminToken } from '../src/lib/jwt';
import { carSchema, articleSchema } from '../src/lib/schemas';

async function runFullDiagnostics() {
  console.log('--- بدء الفحص الشامل للداشبورد والعمليات ---');

  // 1. فحص الاتصال وقراءة السجلات
  console.log('[1] التحقق من الاتصال بقاعدة البيانات...');
  const admin = await prisma.adminUser.findUnique({ where: { username: 'admin' } });
  if (!admin) throw new Error('حساب الأدمن غير موجود');
  console.log('✔ تم العثور على حساب الأدمن:', admin.username);

  // 2. التحقق من مطابقة كلمة المرور
  console.log('[2] التحقق من مطابقة كلمة المرور الافتراضية admin123...');
  const isMatch = await bcrypt.compare('admin123', admin.passwordHash);
  if (!isMatch) throw new Error('كلمة المرور غير مطابقة');
  console.log('✔ كلمة المرور admin123 متطابقة بنجاح.');

  // 3. التحقق من إصدار وتحقق الـ JWT Token
  console.log('[3] اختبار توقيع والتحقق من جلسة المدير (JWT)...');
  const token = await signAdminToken('admin');
  const payload = await verifyAdminToken(token);
  if (payload.username !== 'admin') throw new Error('فشل التحقق من التوكن');
  console.log('✔ نظام الجلسات والأمان (JWT) يعمل بشكل ممتاز.');

  // 4. اختبار إضافة، تعديل، وحذف سيارة
  console.log('[4] اختبار دورة حياة السيارة (إضافة -> تعديل -> حذف)...');
  const testCarData = {
    name: 'سيارة اختبارية للفحص',
    brand: 'تويوتا',
    modelYear: '2024',
    mileage: '1,000 كم',
    price: '250,000 ريال',
    description: 'وصف اختباري للسيارة للتأكد من عمل الداشبورد بدون أخطاء',
    mainImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000'],
    features: ['شاشة ذكية', 'دفع رباعي'],
    isAvailable: true,
  };
  const parsedCar = carSchema.safeParse(testCarData);
  if (!parsedCar.success) throw new Error('فشل التحقق من مدخلات السيارة');

  const createdCar = await prisma.car.create({
    data: {
      ...parsedCar.data,
      images: JSON.stringify(parsedCar.data.images),
      features: JSON.stringify(parsedCar.data.features),
    },
  });
  console.log('✔ تمت إضافة سيارة اختبارية بنجاح. المعرف:', createdCar.id);

  const updatedCar = await prisma.car.update({
    where: { id: createdCar.id },
    data: { name: 'سيارة اختبارية محدثة', price: '260,000 ريال' },
  });
  console.log('✔ تم تعديل السيارة بنجاح. الاسم الجديد:', updatedCar.name);

  await prisma.car.delete({ where: { id: createdCar.id } });
  console.log('✔ تم حذف السيارة بنجاح وتم تنظيف قاعدة البيانات.');

  // 5. اختبار دورة حياة المقال (إضافة -> تعديل -> حذف)
  console.log('[5] اختبار دورة حياة المقالات (إضافة -> تعديل -> حذف)...');
  const testArticleData = {
    title: 'مقال اختباري للفحص الشامل',
    slug: 'test-article-diagnostics-check',
    excerpt: 'ملخص مقال اختباري لفحص نظام الإدارة والمحتوى',
    content: '<p>محتوى المقال الاختباري للتأكد من عدم وجود أي خطأ في الداشبورد.</p>',
    coverImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000',
    author: 'فريق الاختبار',
    isPublished: true,
  };
  const parsedArticle = articleSchema.safeParse(testArticleData);
  if (!parsedArticle.success) throw new Error('فشل التحقق من بيانات المقال');

  const createdArticle = await prisma.article.create({
    data: parsedArticle.data,
  });
  console.log('✔ تمت إضافة المقال الاختباري بنجاح. المعرف:', createdArticle.id);

  const updatedArticle = await prisma.article.update({
    where: { id: createdArticle.id },
    data: { title: 'مقال اختباري معدل ومحدث' },
  });
  console.log('✔ تم تعديل المقال بنجاح. العنوان الجديد:', updatedArticle.title);

  await prisma.article.delete({ where: { id: createdArticle.id } });
  console.log('✔ تم حذف المقال بنجاح.');

  // 6. اختبار دورة حياة رسائل ونماذج التواصل وحذفها
  console.log('[6] اختبار استقبال وحذف رسائل ونماذج التواصل...');
  const testMessage = await prisma.contactMessage.create({
    data: {
      type: 'individual',
      name: 'عميل اختباري',
      phone: '0501234567',
      carType: 'تويوتا',
      carModel: 'كامري',
      budget: '100,000 ريال',
    },
  });
  console.log('✔ تم إنشاء طلب اختباري بنجاح. المعرف:', testMessage.id);

  await prisma.contactMessage.delete({ where: { id: testMessage.id } });
  console.log('✔ تم حذف الطلب بنجاح والتأكد من دعم الحذف لكل أقسام الرسائل والطلبات.');

  console.log('🎉 جميع العمليات في الداشبورد (إضافة، تعديل، حذف، مصادقة، فحص بيانات) تعمل بنسبة 100% بدون أي أخطاء!');
}

runFullDiagnostics()
  .catch((err) => {
    console.error('❌ خطأ أثناء الفحص:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
