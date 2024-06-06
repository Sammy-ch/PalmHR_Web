/*
  Warnings:

  - You are about to drop the column `payroll_id` on the `EmployeeAttendanceReport` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[employee_id]` on the table `EmployeeAttendanceReport` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `attendance_report` to the `EmployeePayRoll` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EmployeeAttendanceReport" DROP CONSTRAINT "EmployeeAttendanceReport_payroll_id_fkey";

-- AlterTable
ALTER TABLE "EmployeeAttendanceReport" DROP COLUMN "payroll_id";

-- AlterTable
ALTER TABLE "EmployeePayRoll" ADD COLUMN     "attendance_report" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeAttendanceReport_employee_id_key" ON "EmployeeAttendanceReport"("employee_id");

-- AddForeignKey
ALTER TABLE "EmployeePayRoll" ADD CONSTRAINT "EmployeePayRoll_attendance_report_fkey" FOREIGN KEY ("attendance_report") REFERENCES "EmployeeAttendanceReport"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;
