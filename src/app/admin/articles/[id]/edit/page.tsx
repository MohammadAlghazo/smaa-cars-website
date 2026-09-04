import { prisma } from "@/lib/prisma";
import ArticleEditForm from "@/components/admin/ArticleEditForm";
import { notFound } from "next/navigation";

export default async function EditArticlePage({ params }: { params: { id: string } }) {
  const article = await prisma.article.findUnique({
    where: { id: params.id }
  });

  if (!article) {
    notFound();
  }

  return <ArticleEditForm article={article} />;
}
