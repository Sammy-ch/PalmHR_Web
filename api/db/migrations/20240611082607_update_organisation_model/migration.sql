/*
  Warnings:

  - You are about to drop the column `Organisation_tag` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Organization" DROP CONSTRAINT "Organization_Organisation_tag_fkey";

-- DropForeignKey
ALTER TABLE "PayRollSetting" DROP CONSTRAINT "PayRollSetting_userId_fkey";

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "Organisation_tag",
ALTER COLUMN "OrganizationId" DROP DEFAULT;

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "UserAccount" (
    "id" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "UserAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAccount_id_email_key" ON "UserAccount"("id", "email");

-- AddForeignKey
ALTER TABLE "PayRollSetting" ADD CONSTRAINT "PayRollSetting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_OrganizationId_fkey" FOREIGN KEY ("OrganizationId") REFERENCES "UserAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
