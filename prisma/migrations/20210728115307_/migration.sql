-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "horizontal" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "GroupMember" ALTER COLUMN "admin" SET DEFAULT false;
