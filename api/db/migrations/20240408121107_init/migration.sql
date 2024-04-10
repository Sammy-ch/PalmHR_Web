-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "auth";

-- CreateTable
CREATE TABLE "public"."Admin" (
    "AdminId" UUID NOT NULL,
    "ProfileId" UUID NOT NULL,
    "First_Name" TEXT NOT NULL,
    "Last_Name" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("AdminId")
);

-- CreateTable
CREATE TABLE "public"."AdminTier" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AdminTier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Employee_profile" (
    "ProfileId" UUID NOT NULL,
    "First_Name" TEXT NOT NULL,
    "Last_Name" TEXT NOT NULL,
    "ProfileImage" TEXT NOT NULL,

    CONSTRAINT "Employee_profile_pkey" PRIMARY KEY ("ProfileId")
);

-- CreateTable
CREATE TABLE "public"."Employee_attendance" (
    "AttendanceId" UUID NOT NULL,
    "EmployeeId" UUID NOT NULL,
    "Checkin_time" TIMESTAMP(3),
    "Checkout_time" TIMESTAMP(3),
    "Checking_Date" TIMESTAMP(3),

    CONSTRAINT "Employee_attendance_pkey" PRIMARY KEY ("AttendanceId")
);

-- AddForeignKey
ALTER TABLE "public"."Employee_attendance" ADD CONSTRAINT "Employee_attendance_EmployeeId_fkey" FOREIGN KEY ("EmployeeId") REFERENCES "public"."Employee_profile"("ProfileId") ON DELETE RESTRICT ON UPDATE CASCADE;
