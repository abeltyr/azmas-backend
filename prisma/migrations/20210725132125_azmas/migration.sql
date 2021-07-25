CREATE EXTENSION IF NOT EXISTS pgcrypto;
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');
-- CreateEnum
CREATE TYPE "Category" AS ENUM (
    'Education',
    'Friends',
    'Community',
    'Business',
    'Entertainment'
);
-- CreateEnum
CREATE TYPE "TablesName" AS ENUM ('User', 'Group', 'Event');
-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "fullName" VARCHAR(255),
    "phoneNumber" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "userName" VARCHAR(255) NOT NULL,
    "bio" TEXT,
    "gender" "Gender" NOT NULL DEFAULT E 'Male',
    "instagram" VARCHAR(255),
    "twitter" VARCHAR(255),
    "telegram" VARCHAR(255),
    "facebook" VARCHAR(255),
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "activated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleteDate" TIMESTAMP(3),
    PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "Group" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "groupName" VARCHAR(255) NOT NULL,
    "ownerId" UUID NOT NULL,
    "title" VARCHAR(255),
    "description" TEXT,
    "public" BOOLEAN NOT NULL DEFAULT true,
    "activated" BOOLEAN NOT NULL DEFAULT false,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "influncer" BOOLEAN NOT NULL DEFAULT false,
    "category" "Category" NOT NULL DEFAULT E 'Community',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleteDate" TIMESTAMP(3),
    PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "GroupMember" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "groupId" UUID NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT true,
    "banned" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleteDate" TIMESTAMP(3),
    PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "Event" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "creatorId" UUID NOT NULL,
    "groupId" UUID NOT NULL,
    "title" VARCHAR(255),
    "description" TEXT,
    "eventStartDate" TIMESTAMP(3) NOT NULL,
    "eventEndDate" TIMESTAMP(3) NOT NULL,
    "category" "Category" NOT NULL DEFAULT E 'Community',
    "location" VARCHAR(255),
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleteDate" TIMESTAMP(3),
    PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "Ticket" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "groupId" UUID NOT NULL,
    "eventId" UUID NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleteDate" TIMESTAMP(3),
    PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "Image" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "url" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleteDate" TIMESTAMP(3),
    PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "ImageRelation" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "tableId" UUID NOT NULL,
    "type" "TablesName" NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleteDate" TIMESTAMP(3),
    PRIMARY KEY ("id")
);
-- CreateIndex
CREATE UNIQUE INDEX "User.phoneNumber_unique" ON "User"("phoneNumber");
-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
-- CreateIndex
CREATE UNIQUE INDEX "User.userName_unique" ON "User"("userName");
-- CreateIndex
CREATE UNIQUE INDEX "Group.groupName_unique" ON "Group"("groupName");
-- AddForeignKey
ALTER TABLE "Group"
ADD FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "GroupMember"
ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "GroupMember"
ADD FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "Event"
ADD FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "Event"
ADD FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "Ticket"
ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "Ticket"
ADD FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "Ticket"
ADD FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;