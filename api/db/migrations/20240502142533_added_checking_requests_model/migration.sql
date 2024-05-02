-- CreateEnum
CREATE TYPE "CheckingType" AS ENUM ('checkin', 'checkout');

-- CreateEnum
CREATE TYPE "CheckingStatus" AS ENUM ('approved', 'pending', 'declined');

-- CreateTable
CREATE TABLE "CheckingRequests" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "employee_id" UUID NOT NULL,
    "checking_date" DATE NOT NULL,
    "checking_time" TIME NOT NULL,
    "checking_type" "CheckingType" NOT NULL,
    "checking_status" "CheckingStatus" NOT NULL,

    CONSTRAINT "CheckingRequests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CheckingRequests" ADD CONSTRAINT "CheckingRequests_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "EmployeeProfile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;
