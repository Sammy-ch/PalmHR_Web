/*
  Warnings:

  - You are about to drop the column `first_name` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Admin` table. All the data in the column will be lost.
  - Added the required column `hashedPassword` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salt` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "hashedPassword" TEXT NOT NULL,
ADD COLUMN     "resetTokenExpiresAt" TIMESTAMP(3),
ADD COLUMN     "salt" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;
