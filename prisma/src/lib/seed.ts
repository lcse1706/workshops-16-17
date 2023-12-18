import { CURRENCY } from '@prisma/client';
import prisma from './db';

async function main() {
  const companyOne = await prisma.company.create({
    data: {
      name: 'Januszex',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  });
  const companyTwo = await prisma.company.create({
    data: {
      name: 'Szwagropol',
      description: 'This is a description of Szwagropol',
    },
  });

  await prisma.jobOffer.create({
    data: {
      title: 'Frontend Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      salary_from: 10000,
      salary_to: 15000,
      salary_currency: CURRENCY.PLN,
      company: {
        connect: {
          id: companyOne.id,
        },
      },
    },
  });

  await prisma.jobOffer.create({
    data: {
      title: 'Backend Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      salary_from: 9500,
      salary_to: 12000,
      company: {
        connect: {
          id: companyTwo.id,
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
