-- AlterTable
ALTER TABLE "Community" ADD COLUMN     "artist" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "activated" SET DEFAULT true;
