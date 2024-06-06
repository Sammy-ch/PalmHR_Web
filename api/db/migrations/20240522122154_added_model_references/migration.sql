/*
  Warnings:

  - You are about to drop the column `user_id` on the `PayRollSetting` table. All the data in the column will be lost.
  - Added the required column `org_id` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `org_id` to the `EmployeeProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Organisation_tag` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `org_id` to the `PayRollSetting` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PayRollSetting" DROP CONSTRAINT "PayRollSetting_user_id_fkey";

-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "org_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "EmployeeProfile" ADD COLUMN     "org_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "Organisation_tag" UUID NOT NULL;

-- AlterTable
ALTER TABLE "PayRollSetting" DROP COLUMN "user_id",
ADD COLUMN     "org_id" UUID NOT NULL,
ADD COLUMN     "userId" UUID;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("OrganizationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeProfile" ADD CONSTRAINT "EmployeeProfile_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("OrganizationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayRollSetting" ADD CONSTRAINT "PayRollSetting_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("OrganizationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayRollSetting" ADD CONSTRAINT "PayRollSetting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_Organisation_tag_fkey" FOREIGN KEY ("Organisation_tag") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
