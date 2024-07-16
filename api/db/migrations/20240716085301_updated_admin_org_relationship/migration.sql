-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_org_id_fkey";

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "adminId" UUID;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
