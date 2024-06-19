/*
  Warnings:

  - You are about to drop the column `Address` on the `Organization` table. All the data in the column will be lost.
  - Added the required column `Industry` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressCity` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressCountry` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressState` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressStreet` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationSize` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationType` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `websiteUrl` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrganizationSize" AS ENUM ('Small', 'Medium', 'Large');

-- CreateEnum
CREATE TYPE "Industry" AS ENUM ('Technology', 'HealthCare', 'Finance', 'Education', 'Retail', 'Manufactoring', 'Other');

-- CreateEnum
CREATE TYPE "OrganizationType" AS ENUM ('NonProfit', 'ForProfit', 'Government', 'Other');

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "Address",
ADD COLUMN     "Industry" "Industry" NOT NULL,
ADD COLUMN     "addressCity" TEXT NOT NULL,
ADD COLUMN     "addressCountry" TEXT NOT NULL,
ADD COLUMN     "addressState" TEXT NOT NULL,
ADD COLUMN     "addressStreet" TEXT NOT NULL,
ADD COLUMN     "organizationSize" "OrganizationSize" NOT NULL,
ADD COLUMN     "organizationType" "OrganizationType" NOT NULL,
ADD COLUMN     "websiteUrl" TEXT NOT NULL;
