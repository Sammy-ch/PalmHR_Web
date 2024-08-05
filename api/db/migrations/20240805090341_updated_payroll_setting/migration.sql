/*
  Warnings:

  - You are about to drop the column `gross_amount` on the `EmployeePayRoll` table. All the data in the column will be lost.
  - You are about to drop the column `overtime` on the `EmployeePayRoll` table. All the data in the column will be lost.
  - You are about to drop the column `INSS_contribution` on the `PayrollSetting` table. All the data in the column will be lost.
  - You are about to drop the column `INSS_payroll_risks` on the `PayrollSetting` table. All the data in the column will be lost.
  - You are about to drop the column `IPR` on the `PayrollSetting` table. All the data in the column will be lost.
  - You are about to drop the column `transport` on the `PayrollSetting` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `PayrollSetting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EmployeeAttendance" ADD COLUMN     "overtime" TIME;

-- AlterTable
ALTER TABLE "EmployeePayRoll" DROP COLUMN "gross_amount",
DROP COLUMN "overtime",
ADD COLUMN     "IPR" INTEGER,
ADD COLUMN     "gross_salary" INTEGER;

-- AlterTable
ALTER TABLE "PayrollSetting" DROP COLUMN "INSS_contribution",
DROP COLUMN "INSS_payroll_risks",
DROP COLUMN "IPR",
DROP COLUMN "transport",
DROP COLUMN "userId",
ADD COLUMN     "INSS_patronal" INTEGER,
ADD COLUMN     "INSS_risque" INTEGER,
ADD COLUMN     "transportation" INTEGER;
