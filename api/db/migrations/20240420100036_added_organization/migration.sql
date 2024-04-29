-- CreateTable
CREATE TABLE "Organization" (
    "OrganizationId" BIGINT NOT NULL PRIMARY KEY,
    "OrganizationName" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "ContactName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Phone" BIGINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Organization_OrganizationId_OrganizationName_Email_key" ON "Organization"("OrganizationId", "OrganizationName", "Email");
