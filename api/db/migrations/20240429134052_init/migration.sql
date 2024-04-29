-- CreateEnum
CREATE TYPE "PresenceTag" AS ENUM ('PRESENT', 'LATE', 'JUSTIFIED_ABSENCE', 'UNJUSTIFIED_ABSENCE', 'UNNOTIFIED_ABSENCE');

-- CreateTable
CREATE TABLE "Admin" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin_Role" (
    "id" SERIAL NOT NULL,
    "adminId" UUID,
    "role" TEXT NOT NULL,

    CONSTRAINT "Admin_Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee_profile" (
    "profile_id" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "profile_image" TEXT,
    "position" TEXT NOT NULL,
    "email" TEXT,
    "allowed_leaves" INTEGER,

    CONSTRAINT "Employee_profile_pkey" PRIMARY KEY ("profile_id")
);

-- CreateTable
CREATE TABLE "Employee_attendance" (
    "attendance_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "employee_id" UUID NOT NULL,
    "checkin_time" TIME,
    "checkout_time" TIME,
    "checking_date" DATE,
    "working_time" TIME,
    "presence_tag" "PresenceTag" NOT NULL,

    CONSTRAINT "Employee_attendance_pkey" PRIMARY KEY ("attendance_id")
);

-- CreateTable
CREATE TABLE "Leave_Custom" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "requested_leave_date" DATE NOT NULL,
    "leave_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "leave_type" TEXT NOT NULL,
    "leave_days" INTEGER NOT NULL,
    "leave_approval" BOOLEAN,

    CONSTRAINT "Leave_Custom_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "Admin_Role_id_role_adminId_key" ON "Admin_Role"("id", "role", "adminId");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_OrganizationId_OrganizationName_Email_key" ON "Organization"("OrganizationId", "OrganizationName", "Email");

-- AddForeignKey
ALTER TABLE "Admin_Role" ADD CONSTRAINT "Admin_Role_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee_attendance" ADD CONSTRAINT "Employee_attendance_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee_profile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leave_Custom" ADD CONSTRAINT "Leave_Custom_leave_id_fkey" FOREIGN KEY ("leave_id") REFERENCES "Employee_profile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;
