const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const existingAdmin = await prisma.adminUser.findUnique({
    where: { username: 'admin' },
  });

  if (!existingAdmin) {
    const password = process.env.ADMIN_PASSWORD || 'admin123';
    
    if (!process.env.ADMIN_PASSWORD) {
      console.warn('⚠️ WARNING: No ADMIN_PASSWORD provided in environment variables. Using default password "admin123". PLEASE CHANGE THIS IMMEDIATELY AFTER LOGIN.');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.adminUser.create({
      data: {
        username: 'admin',
        passwordHash,
      },
    });
    console.log('Admin user created successfully.');
  } else {
    console.log('Admin user already exists.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
