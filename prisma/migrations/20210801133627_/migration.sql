/*
  Warnings:

  - You are about to drop the column `groupName` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `groupId` on the `CommunityMembers` table. All the data in the column will be lost.
  - You are about to drop the column `groupId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `groupId` on the `Ticket` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[communityName]` on the table `Community` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `communityName` to the `Community` table without a default value. This is not possible if the table is not empty.
  - Added the required column `communityId` to the `CommunityMembers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `communityId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `communityId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CommunityMembers" DROP CONSTRAINT "CommunityMembers_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_groupId_fkey";

-- DropIndex
DROP INDEX "Community.groupName_unique";

-- AlterTable
ALTER TABLE "Community" DROP COLUMN "groupName",
ADD COLUMN     "communityName" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "CommunityMembers" DROP COLUMN "groupId",
ADD COLUMN     "communityId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "groupId",
ADD COLUMN     "communityId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "groupId",
ADD COLUMN     "communityId" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Community.communityName_unique" ON "Community"("communityName");

-- AddForeignKey
ALTER TABLE "CommunityMembers" ADD FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;
