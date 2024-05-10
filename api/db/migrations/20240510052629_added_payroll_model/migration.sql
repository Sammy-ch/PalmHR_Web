-- CreateTable
CREATE TABLE "PayRoll" (
    "id" UUID NOT NULL,
    "pay_period_start" DATE NOT NULL,
    "pay_period_end" DATE NOT NULL,
    "hours_Worked" TIME NOT NULL,
    "overtime" TIME,
    "base_salary" INTEGER NOT NULL,
    "netpay" INTEGER NOT NULL,

    CONSTRAINT "PayRoll_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PayRoll_id_key" ON "PayRoll"("id");

-- AddForeignKey
ALTER TABLE "PayRoll" ADD CONSTRAINT "PayRoll_id_fkey" FOREIGN KEY ("id") REFERENCES "EmployeeProfile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;
