import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
  console.log('Exporting data from SQLite...');
  
  const adminUsers = await prisma.adminUser.findMany();
  const cars = await prisma.car.findMany();
  const articles = await prisma.article.findMany();
  const messages = await prisma.contactMessage.findMany();
  
  const data = {
    adminUsers,
    cars,
    articles,
    messages
  };
  
  fs.writeFileSync('data-export.json', JSON.stringify(data, null, 2));
  console.log('Data successfully exported to data-export.json!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
