/*
  Warnings:

  - You are about to drop the `PayRollSetting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserAccount` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Organization" DROP CONSTRAINT "Organization_OrganizationId_fkey";

-- DropForeignKey
ALTER TABLE "PayRollSetting" DROP CONSTRAINT "PayRollSetting_org_id_fkey";

-- DropForeignKey
ALTER TABLE "PayRollSetting" DROP CONSTRAINT "PayRollSetting_userId_fkey";

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "userAccountId" UUID;

-- DropTable
DROP TABLE "PayRollSetting";

-- DropTable
DROP TABLE "UserAccount";

-- CreateTable
CREATE TABLE "PayrollData" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "org_id" UUID NOT NULL,
    "housing" INTEGER,
    "transport" INTEGER,
    "INSS" INTEGER,
    "INSS_contribution" INTEGER,
    "INSS_payroll_risks" INTEGER,
    "medical_insurance" INTEGER,
    "IPR" INTEGER,
    "userId" UUID,

    CONSTRAINT "PayrollData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PayrollData" ADD CONSTRAINT "PayrollData_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("OrganizationId") ON DELETE RESTRICT ON UPDATE CASCADE;
