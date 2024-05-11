-- CreateEnum
CREATE TYPE "AttendanceTag" AS ENUM ('PRESENT', 'ABSENT');

-- CreateEnum
CREATE TYPE "CheckingType" AS ENUM ('CHECKIN', 'CHECKOUT');

-- CreateEnum
CREATE TYPE "CheckingStatus" AS ENUM ('APPROVED', 'PENDING', 'DECLINED');

-- CreateEnum
CREATE TYPE "LeaveType" AS ENUM ('PERSONAL', 'SICK', 'HOLIDAY');

-- CreateTable
CREATE TABLE "Admin" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

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
    "attendance_tag" "AttendanceTag" NOT NULL,

    CONSTRAINT "EmployeeAttendance_pkey" PRIMARY KEY ("attendance_id")
);

-- CreateTable
CREATE TABLE "CheckingRequestQueue" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "employee_id" UUID NOT NULL,
    "checking_date" DATE NOT NULL,
    "checking_time" TIME NOT NULL,
    "checking_type" "CheckingType" NOT NULL,
    "checking_status" "CheckingStatus" NOT NULL,

    CONSTRAINT "CheckingRequestQueue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeePayRoll" (
    "id" UUID NOT NULL,
    "pay_period_start" DATE NOT NULL,
    "pay_period_end" DATE NOT NULL,
    "hours_Worked" TIME NOT NULL,
    "base_salary" INTEGER NOT NULL,
    "overtime" TIME,
    "netpay" INTEGER,

    CONSTRAINT "EmployeePayRoll_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeLeaveForm" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "requested_leave_date" DATE NOT NULL,
    "leave_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "leave_type" "LeaveType" NOT NULL,
    "leave_days" INTEGER NOT NULL,
    "leave_approval" BOOLEAN,

    CONSTRAINT "EmployeeLeaveForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeAttendanceReport" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "employee_id" UUID NOT NULL,
    "TotalOvertime" TIME NOT NULL,
    "TotalWorkhours" TIME NOT NULL,
    "TotalSickLeaves" TIME NOT NULL,
    "AbstenteeismRate" INTEGER NOT NULL,
    "EarlyAttendaceRate" INTEGER NOT NULL,
    "LateAttedanceRate" INTEGER NOT NULL,

    CONSTRAINT "EmployeeAttendanceReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "OrganizationId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "OrganizationName" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("OrganizationId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_email_key" ON "Admin"("id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "AdminRole_id_role_adminId_key" ON "AdminRole"("id", "role", "adminId");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeePayRoll_id_key" ON "EmployeePayRoll"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_OrganizationId_OrganizationName_Email_key" ON "Organization"("OrganizationId", "OrganizationName", "Email");

-- AddForeignKey
ALTER TABLE "AdminRole" ADD CONSTRAINT "AdminRole_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeAttendance" ADD CONSTRAINT "EmployeeAttendance_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "EmployeeProfile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CheckingRequestQueue" ADD CONSTRAINT "CheckingRequestQueue_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "EmployeeProfile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeePayRoll" ADD CONSTRAINT "EmployeePayRoll_id_fkey" FOREIGN KEY ("id") REFERENCES "EmployeeProfile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeLeaveForm" ADD CONSTRAINT "EmployeeLeaveForm_leave_id_fkey" FOREIGN KEY ("leave_id") REFERENCES "EmployeeProfile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeAttendanceReport" ADD CONSTRAINT "EmployeeAttendanceReport_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "EmployeeProfile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;
