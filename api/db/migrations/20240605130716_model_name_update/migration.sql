/*
  Warnings:

  - You are about to drop the `OrganizationAttendanceData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrganizationAttendanceData" DROP CONSTRAINT "OrganizationAttendanceData_org_id_fkey";

-- DropTable
DROP TABLE "OrganizationAttendanceData";

-- CreateTable
CREATE TABLE "OrganizationAttendanceKpi" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "TotalOvertime" INTEGER NOT NULL,
    "TotalWorkhours" INTEGER NOT NULL,
    "TotalSickLeaves" INTEGER NOT NULL,
    "AbstenteeismRate" INTEGER NOT NULL,
    "EarlyAttendaceRate" INTEGER NOT NULL,
    "LateAttedanceRate" INTEGER NOT NULL,
    "org_id" UUID NOT NULL,

    CONSTRAINT "OrganizationAttendanceKpi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrganizationAttendanceKpi" ADD CONSTRAINT "OrganizationAttendanceKpi_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("OrganizationId") ON DELETE RESTRICT ON UPDATE CASCADE;
