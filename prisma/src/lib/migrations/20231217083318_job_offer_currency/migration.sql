-- CreateEnum
CREATE TYPE "CURRENCY" AS ENUM ('EUR', 'USD', 'PLN');

-- AlterTable
ALTER TABLE "JobOffer" ADD COLUMN     "salary_currency" "CURRENCY" NOT NULL DEFAULT 'PLN';
