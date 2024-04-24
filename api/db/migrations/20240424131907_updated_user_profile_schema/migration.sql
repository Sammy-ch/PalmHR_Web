/*
  Warnings:

  - The primary key for the `UserProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `user_id` on the `UserProfile` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `user_ref_id` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserProfile" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_ref_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_UserProfile" ("email", "first_name", "last_name", "password", "user_id") SELECT "email", "first_name", "last_name", "password", "user_id" FROM "UserProfile";
DROP TABLE "UserProfile";
ALTER TABLE "new_UserProfile" RENAME TO "UserProfile";
CREATE UNIQUE INDEX "UserProfile_user_id_email_user_ref_id_key" ON "UserProfile"("user_id", "email", "user_ref_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
