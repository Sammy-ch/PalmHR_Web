/*
  Warnings:

  - You are about to drop the `Admin_Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee_attendance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee_profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Leave_Custom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Admin_Role" DROP CONSTRAINT "Admin_Role_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Employee_attendance" DROP CONSTRAINT "Employee_attendance_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "Leave_Custom" DROP CONSTRAINT "Leave_Custom_leave_id_fkey";

-- DropTable
DROP TABLE "Admin_Role";

-- DropTable
DROP TABLE "Employee_attendance";

-- DropTable
DROP TABLE "Employee_profile";

-- DropTable
DROP TABLE "Leave_Custom";

-- CreateTable
CREATE TABLE "AdminRole" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "adminId" UUID,
    "role" TEXT NOT NULL,

    CONSTRAINT "AdminRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeProfile" (
    "profile_id" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "profile_image" TEXT,
    "position" TEXT NOT NULL,
    "email" TEXT,
    "allowed_leaves" INTEGER,

    CONSTRAINT "EmployeeProfile_pkey" PRIMARY KEY ("profile_id")
);

-- CreateTable
CREATE TABLE "EmployeeAttendance" (
    "attendance_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "employee_id" UUID NOT NULL,
    "checkin_time" TIME,
    "checkout_time" TIME,
    "checking_date" DATE,
    "working_time" TIME,
    "presence_tag" "PresenceTag" NOT NULL,

    CONSTRAINT "EmployeeAttendance_pkey" PRIMARY KEY ("attendance_id")
);

-- CreateTable
CREATE TABLE "LeaveCustom" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "requested_leave_date" DATE NOT NULL,
    "leave_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "leave_type" TEXT NOT NULL,
    "leave_days" INTEGER NOT NULL,
    "leave_approval" BOOLEAN,

    CONSTRAINT "LeaveCustom_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminRole_id_role_adminId_key" ON "AdminRole"("id", "role", "adminId");

-- AddForeignKey
ALTER TABLE "AdminRole" ADD CONSTRAINT "AdminRole_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeAttendance" ADD CONSTRAINT "EmployeeAttendance_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "EmployeeProfile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaveCustom" ADD CONSTRAINT "LeaveCustom_leave_id_fkey" FOREIGN KEY ("leave_id") REFERENCES "EmployeeProfile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;
