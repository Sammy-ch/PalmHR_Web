-- CreateTable
CREATE TABLE "Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AdminRole" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "adminId" INTEGER,
    CONSTRAINT "AdminRole_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Employee_profile" (
    "ProfileId" TEXT NOT NULL PRIMARY KEY,
    "First_Name" TEXT NOT NULL,
    "Last_Name" TEXT NOT NULL,
    "ProfileImage" TEXT,
    "Position" TEXT NOT NULL,
    "email" TEXT,
    "OffDays" INTEGER
);

-- CreateTable
CREATE TABLE "Employee_attendance" (
    "AttendanceId" BIGINT NOT NULL PRIMARY KEY,
    "EmployeeId" TEXT NOT NULL,
    "Checkin_time" DATETIME,
    "Checkout_time" DATETIME,
    "Checking_Date" DATETIME,
    "Working_time" INTEGER,
    "ArrivalTag" TEXT,
    CONSTRAINT "Employee_attendance_EmployeeId_fkey" FOREIGN KEY ("EmployeeId") REFERENCES "Employee_profile" ("ProfileId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_email_key" ON "Admin"("id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "AdminRole_name_adminId_key" ON "AdminRole"("name", "adminId");
