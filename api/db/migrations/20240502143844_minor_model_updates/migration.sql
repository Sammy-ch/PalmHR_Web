/*
  Warnings:

  - You are about to drop the `CheckingRequests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CheckingRequests" DROP CONSTRAINT "CheckingRequests_employee_id_fkey";

-- DropTable
DROP TABLE "CheckingRequests";

-- CreateTable
CREATE TABLE "CheckingRequest" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "employee_id" UUID NOT NULL,
    "checking_date" DATE NOT NULL,
    "checking_time" TIME NOT NULL,
    "checking_type" "CheckingType" NOT NULL,
    "checking_status" "CheckingStatus" NOT NULL,

    CONSTRAINT "CheckingRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CheckingRequest" ADD CONSTRAINT "CheckingRequest_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "EmployeeProfile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;
