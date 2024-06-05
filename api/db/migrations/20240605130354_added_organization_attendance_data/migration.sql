-- CreateTable
CREATE TABLE "OrganizationAttendanceData" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "TotalOvertime" INTEGER NOT NULL,
    "TotalWorkhours" INTEGER NOT NULL,
    "TotalSickLeaves" INTEGER NOT NULL,
    "AbstenteeismRate" INTEGER NOT NULL,
    "EarlyAttendaceRate" INTEGER NOT NULL,
    "LateAttedanceRate" INTEGER NOT NULL,
    "org_id" UUID NOT NULL,

    CONSTRAINT "OrganizationAttendanceData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrganizationAttendanceData" ADD CONSTRAINT "OrganizationAttendanceData_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("OrganizationId") ON DELETE RESTRICT ON UPDATE CASCADE;
