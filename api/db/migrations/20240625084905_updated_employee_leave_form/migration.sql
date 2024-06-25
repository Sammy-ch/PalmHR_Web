/*
  Warnings:

  - You are about to drop the column `leave_approval` on the `EmployeeLeaveForm` table. All the data in the column will be lost.
  - Added the required column `leave_end` to the `EmployeeLeaveForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leave_start` to the `EmployeeLeaveForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leave_status` to the `EmployeeLeaveForm` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LeaveStatus" AS ENUM ('APPROVED', 'PENDING', 'DENIED');

-- AlterTable
ALTER TABLE "EmployeeLeaveForm" DROP COLUMN "leave_approval",
ADD COLUMN     "leave_end" DATE NOT NULL,
ADD COLUMN     "leave_start" DATE NOT NULL,
ADD COLUMN     "leave_status" "LeaveStatus" NOT NULL,
ALTER COLUMN "leave_days" DROP NOT NULL;
