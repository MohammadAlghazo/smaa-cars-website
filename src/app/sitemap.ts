import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://smaacars.com';

  // Get dynamic data
  const cars = await prisma.car.findMany({
    where: { isAvailable: true },
    select: { id: true, updatedAt: true },
  });

  const articles = await prisma.article.findMany({
    where: { isPublished: true },
    select: { slug: true, updatedAt: true },
  });

  // Map dynamic routes
  const carUrls = cars.map((car) => ({
    url: `${baseUrl}/cars/${car.id}`,
    lastModified: car.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: article.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Static routes
  const routes = ['', '/about', '/services', '/cars', '/articles', '/contact'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 1 : 0.9,
    })
  );

  return [...routes, ...carUrls, ...articleUrls];
}
