/*
  Warnings:

  - You are about to drop the column `pay_period_end` on the `EmployeePayRoll` table. All the data in the column will be lost.
  - You are about to drop the column `pay_period_start` on the `EmployeePayRoll` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EmployeePayRoll" DROP COLUMN "pay_period_end",
DROP COLUMN "pay_period_start";
