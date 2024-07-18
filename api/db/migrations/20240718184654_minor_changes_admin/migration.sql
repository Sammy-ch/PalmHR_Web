/*
  Warnings:

  - A unique constraint covering the columns `[id,email,org_id]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Admin_id_email_key";

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_email_org_id_key" ON "Admin"("id", "email", "org_id");
