import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(articles);
  } catch {
    return NextResponse.json({ error: "Error fetching articles" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const article = await prisma.article.create({
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        coverImage: data.coverImage,
        author: data.author || "SMAA CARS",
        isPublished: data.isPublished ?? true,
      }
    });
    return NextResponse.json(article);
  } catch (error) {
    console.error("Create Article Error:", error);
    return NextResponse.json({ error: "Error creating article (Make sure slug is unique)" }, { status: 500 });
  }
}
