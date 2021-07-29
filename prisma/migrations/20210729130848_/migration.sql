/*
  Warnings:

  - Added the required column `device` to the `UserPassword` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserPassword" ADD COLUMN     "device" TEXT NOT NULL,
ALTER COLUMN "order" SET DEFAULT 0,
ALTER COLUMN "changeReason" DROP NOT NULL;
