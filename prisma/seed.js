"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var cars, _i, cars_1, car, articles, _a, articles_1, article;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("Seeding database...");
                    cars = [
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
                    _i = 0, cars_1 = cars;
                    _b.label = 1;
                case 1:
                    if (!(_i < cars_1.length)) return [3 /*break*/, 4];
                    car = cars_1[_i];
                    return [4 /*yield*/, prisma.car.create({
                            data: car
                        })];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log("Cars seeded!");
                    articles = [
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
                    _a = 0, articles_1 = articles;
                    _b.label = 5;
                case 5:
                    if (!(_a < articles_1.length)) return [3 /*break*/, 8];
                    article = articles_1[_a];
                    return [4 /*yield*/, prisma.article.create({
                            data: article
                        })];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7:
                    _a++;
                    return [3 /*break*/, 5];
                case 8:
                    console.log("Articles seeded!");
                    console.log("Seeding completed successfully.");
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
