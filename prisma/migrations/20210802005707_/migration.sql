-- AlterTable
ALTER TABLE "CommunityMembers" ADD COLUMN     "acceptInvite" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "accepted" SET DEFAULT true;
