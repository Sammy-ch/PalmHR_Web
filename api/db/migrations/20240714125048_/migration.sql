/*
  Warnings:

  - You are about to drop the column `attendance_report` on the `EmployeePayRoll` table. All the data in the column will be lost.
  - You are about to drop the `EmployeeAttendanceReport` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EmployeeAttendanceReport" DROP CONSTRAINT "EmployeeAttendanceReport_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "EmployeePayRoll" DROP CONSTRAINT "EmployeePayRoll_attendance_report_fkey";

-- AlterTable
ALTER TABLE "EmployeePayRoll" DROP COLUMN "attendance_report";

-- DropTable
DROP TABLE "EmployeeAttendanceReport";
