-- CreateEnum
CREATE TYPE "AttendanceTag" AS ENUM ('PRESENT', 'ABSENT');

-- CreateEnum
CREATE TYPE "CheckingType" AS ENUM ('CHECKIN', 'CHECKOUT');

-- CreateEnum
CREATE TYPE "CheckingStatus" AS ENUM ('APPROVED', 'PENDING', 'DECLINED');

-- CreateEnum
CREATE TYPE "LeaveType" AS ENUM ('PERSONAL', 'SICK', 'HOLIDAY');

-- CreateEnum
CREATE TYPE "LeaveStatus" AS ENUM ('APPROVED', 'PENDING', 'DENIED');

-- CreateEnum
CREATE TYPE "OrganizationSize" AS ENUM ('Small', 'Medium', 'Large');

-- CreateEnum
CREATE TYPE "Industry" AS ENUM ('Technology', 'HealthCare', 'Finance', 'Education', 'Retail', 'Manufactoring', 'Other');

-- CreateEnum
CREATE TYPE "OrganizationType" AS ENUM ('NonProfit', 'ForProfit', 'Government', 'Other');

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "org_id" UUID NOT NULL,
    "fullName" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL,
    "imageUrl" TEXT,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminRole" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "adminId" TEXT,
    "role" TEXT NOT NULL,

    CONSTRAINT "AdminRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeProfile" (
    "profile_id" UUID NOT NULL,
    "org_id" TEXT NOT NULL,
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
    "attendance_id" UUID NOT NULL,
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
    "base_salary" INTEGER NOT NULL,
    "overtime" INTEGER,
    "net_salary" INTEGER,
    "bonuses" INTEGER,
    "gross_amount" INTEGER,
    "labor_cost" INTEGER,

    CONSTRAINT "EmployeePayRoll_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PayrollSetting" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "org_id" TEXT NOT NULL,
    "housing" INTEGER,
    "transport" INTEGER,
    "INSS" INTEGER,
    "INSS_contribution" INTEGER,
    "INSS_payroll_risks" INTEGER,
    "medical_insurance" INTEGER,
    "IPR" INTEGER,
    "userId" UUID,

    CONSTRAINT "PayrollSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeLeaveForm" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "requested_leave_date" DATE NOT NULL,
    "leave_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "leave_type" "LeaveType" NOT NULL,
    "leave_start" DATE NOT NULL,
    "leave_end" DATE NOT NULL,
    "leave_days" INTEGER,
    "leave_status" "LeaveStatus" NOT NULL,

    CONSTRAINT "EmployeeLeaveForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "OrganizationId" TEXT NOT NULL,
    "OrganizationName" TEXT NOT NULL,
    "organizationType" "OrganizationType" NOT NULL,
    "addressStreet" TEXT NOT NULL,
    "addressCity" TEXT NOT NULL,
    "addressState" TEXT NOT NULL,
    "addressCountry" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "websiteUrl" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "organizationSize" "OrganizationSize" NOT NULL,
    "Industry" "Industry" NOT NULL,
    "adminId" TEXT,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("OrganizationId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_email_key" ON "Admin"("id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "AdminRole_id_role_adminId_key" ON "AdminRole"("id", "role", "adminId");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeePayRoll_id_key" ON "EmployeePayRoll"("id");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeLeaveForm_id_key" ON "EmployeeLeaveForm"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_OrganizationId_OrganizationName_Email_key" ON "Organization"("OrganizationId", "OrganizationName", "Email");

-- AddForeignKey
ALTER TABLE "AdminRole" ADD CONSTRAINT "AdminRole_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeProfile" ADD CONSTRAINT "EmployeeProfile_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("OrganizationId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeAttendance" ADD CONSTRAINT "EmployeeAttendance_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "EmployeeProfile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CheckingRequestQueue" ADD CONSTRAINT "CheckingRequestQueue_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "EmployeeProfile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeePayRoll" ADD CONSTRAINT "EmployeePayRoll_id_fkey" FOREIGN KEY ("id") REFERENCES "EmployeeProfile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayrollSetting" ADD CONSTRAINT "PayrollSetting_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("OrganizationId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeLeaveForm" ADD CONSTRAINT "EmployeeLeaveForm_leave_id_fkey" FOREIGN KEY ("leave_id") REFERENCES "EmployeeProfile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
