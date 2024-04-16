/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AdminId` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `First_Name` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `Last_Name` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `ProfileId` on the `Admin` table. All the data in the column will be lost.
  - The required column `adminId` was added to the `Admin` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `email` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_Name` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hashedPassword` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_Name` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salt` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Admin" (
    "adminId" TEXT NOT NULL PRIMARY KEY,
    "first_Name" TEXT NOT NULL,
    "last_Name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME
);
DROP TABLE "Admin";
ALTER TABLE "new_Admin" RENAME TO "Admin";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
