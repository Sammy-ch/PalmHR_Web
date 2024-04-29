/*
  Warnings:

  - The primary key for the `Organization` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `OrganizationId` on the `Organization` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Organization" (
    "OrganizationId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "OrganizationName" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "ContactName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Phone" TEXT NOT NULL
);
INSERT INTO "new_Organization" ("Address", "ContactName", "Email", "OrganizationId", "OrganizationName", "Phone") SELECT "Address", "ContactName", "Email", "OrganizationId", "OrganizationName", "Phone" FROM "Organization";
DROP TABLE "Organization";
ALTER TABLE "new_Organization" RENAME TO "Organization";
CREATE UNIQUE INDEX "Organization_OrganizationId_OrganizationName_Email_key" ON "Organization"("OrganizationId", "OrganizationName", "Email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
