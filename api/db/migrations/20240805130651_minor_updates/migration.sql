/*
  Warnings:

  - You are about to drop the `PayrollSetting` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PayrollSetting" DROP CONSTRAINT "PayrollSetting_org_id_fkey";

-- DropTable
DROP TABLE "PayrollSetting";

-- CreateTable
CREATE TABLE "OrganizationPayrollSetting" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "org_id" TEXT NOT NULL,
    "housing" INTEGER,
    "transportation" INTEGER,
    "INSS" INTEGER,
    "INSS_patronal" INTEGER,
    "INSS_risque" INTEGER,
    "medical_insurance" INTEGER,

    CONSTRAINT "OrganizationPayrollSetting_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrganizationPayrollSetting" ADD CONSTRAINT "OrganizationPayrollSetting_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("OrganizationId") ON DELETE CASCADE ON UPDATE CASCADE;
