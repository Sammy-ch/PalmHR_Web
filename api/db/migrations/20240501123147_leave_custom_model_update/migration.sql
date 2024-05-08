/*
  Warnings:

  - Changed the type of `leave_type` on the `LeaveCustom` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "LeaveType" AS ENUM ('Personal', 'Sick', 'Holiday');

-- AlterTable
ALTER TABLE "LeaveCustom" DROP COLUMN "leave_type",
ADD COLUMN     "leave_type" "LeaveType" NOT NULL;
