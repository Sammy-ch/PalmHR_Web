/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `EmployeeLeaveForm` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeLeaveForm_id_key" ON "EmployeeLeaveForm"("id");
