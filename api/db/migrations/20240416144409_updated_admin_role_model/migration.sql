-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AdminRole" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "adminId" INTEGER,
    CONSTRAINT "AdminRole_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_AdminRole" ("adminId", "createdAt", "id", "name", "updatedAt") SELECT "adminId", "createdAt", "id", "name", "updatedAt" FROM "AdminRole";
DROP TABLE "AdminRole";
ALTER TABLE "new_AdminRole" RENAME TO "AdminRole";
CREATE UNIQUE INDEX "AdminRole_name_adminId_key" ON "AdminRole"("name", "adminId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
