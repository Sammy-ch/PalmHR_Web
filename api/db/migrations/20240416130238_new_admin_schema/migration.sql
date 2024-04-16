/*
  Warnings:

  - You are about to drop the column `first_Name` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `last_Name` on the `Admin` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME
);
INSERT INTO "new_Admin" ("email", "hashedPassword", "id", "resetToken", "resetTokenExpiresAt", "salt") SELECT "email", "hashedPassword", "id", "resetToken", "resetTokenExpiresAt", "salt" FROM "Admin";
DROP TABLE "Admin";
ALTER TABLE "new_Admin" RENAME TO "Admin";
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
