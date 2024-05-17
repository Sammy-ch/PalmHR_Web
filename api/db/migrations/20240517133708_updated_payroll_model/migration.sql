/*
  Warnings:

  - You are about to drop the column `hours_Worked` on the `EmployeePayRoll` table. All the data in the column will be lost.
  - You are about to drop the column `netpay` on the `EmployeePayRoll` table. All the data in the column will be lost.
  - The `overtime` column on the `EmployeePayRoll` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `payroll_id` to the `EmployeeAttendanceReport` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `TotalOvertime` on the `EmployeeAttendanceReport` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `TotalWorkhours` on the `EmployeeAttendanceReport` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `TotalSickLeaves` on the `EmployeeAttendanceReport` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "EmployeeAttendanceReport" ADD COLUMN     "payroll_id" UUID NOT NULL,
DROP COLUMN "TotalOvertime",
ADD COLUMN     "TotalOvertime" INTEGER NOT NULL,
DROP COLUMN "TotalWorkhours",
ADD COLUMN     "TotalWorkhours" INTEGER NOT NULL,
DROP COLUMN "TotalSickLeaves",
ADD COLUMN     "TotalSickLeaves" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "EmployeePayRoll" DROP COLUMN "hours_Worked",
DROP COLUMN "netpay",
ADD COLUMN     "bonuses" INTEGER,
ADD COLUMN     "gross_amount" INTEGER,
ADD COLUMN     "labor_cost" INTEGER,
ADD COLUMN     "net_salary" INTEGER,
DROP COLUMN "overtime",
ADD COLUMN     "overtime" INTEGER;

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PayRollSetting" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "housing" INTEGER,
    "transport" INTEGER,
    "INSS" INTEGER,
    "INSS_contribution" INTEGER,
    "INSS_payroll_risks" INTEGER,
    "medical_insurance" INTEGER,
    "IPR" INTEGER,

    CONSTRAINT "PayRollSetting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_email_key" ON "User"("id", "email");

-- AddForeignKey
ALTER TABLE "PayRollSetting" ADD CONSTRAINT "PayRollSetting_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeAttendanceReport" ADD CONSTRAINT "EmployeeAttendanceReport_payroll_id_fkey" FOREIGN KEY ("payroll_id") REFERENCES "EmployeePayRoll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
