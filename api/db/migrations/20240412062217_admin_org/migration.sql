-- CreateTable
CREATE TABLE "AdminTier" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL
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
    "AttendanceId" TEXT NOT NULL PRIMARY KEY,
    "EmployeeId" TEXT NOT NULL,
    "Checkin_time" DATETIME,
    "Checkout_time" DATETIME,
    "Checking_Date" DATETIME,
    "Working_time" INTEGER,
    "ArrivalTag" TEXT,
    CONSTRAINT "Employee_attendance_EmployeeId_fkey" FOREIGN KEY ("EmployeeId") REFERENCES "Employee_profile" ("ProfileId") ON DELETE RESTRICT ON UPDATE CASCADE
);
