import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
  console.log('Importing data to MySQL...');
  
  const rawData = fs.readFileSync('data-export.json', 'utf-8');
  const data = JSON.parse(rawData);
  
  // Insert AdminUsers
  if (data.adminUsers && data.adminUsers.length > 0) {
    console.log(`Inserting ${data.adminUsers.length} admin users...`);
    await prisma.adminUser.createMany({ data: data.adminUsers, skipDuplicates: true });
  }

  // Insert Cars
  if (data.cars && data.cars.length > 0) {
    console.log(`Inserting ${data.cars.length} cars...`);
    await prisma.car.createMany({ data: data.cars, skipDuplicates: true });
  }

  // Insert Articles
  if (data.articles && data.articles.length > 0) {
    console.log(`Inserting ${data.articles.length} articles...`);
    await prisma.article.createMany({ data: data.articles, skipDuplicates: true });
  }

  // Insert Contact Messages
  if (data.messages && data.messages.length > 0) {
    console.log(`Inserting ${data.messages.length} messages...`);
    await prisma.contactMessage.createMany({ data: data.messages, skipDuplicates: true });
  }
  
  console.log('Data successfully imported to MySQL!');
}

main()
  .catch(e => {
    console.error('Import failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
