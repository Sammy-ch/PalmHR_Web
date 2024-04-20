/*
  Warnings:

  - The primary key for the `AdminRole` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `AdminRole` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AdminRole" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "adminId" INTEGER,
    CONSTRAINT "AdminRole_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_AdminRole" ("adminId", "createdAt", "id", "name", "updatedAt") SELECT "adminId", "createdAt", "id", "name", "updatedAt" FROM "AdminRole";
DROP TABLE "AdminRole";
ALTER TABLE "new_AdminRole" RENAME TO "AdminRole";
CREATE UNIQUE INDEX "AdminRole_id_name_adminId_key" ON "AdminRole"("id", "name", "adminId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
