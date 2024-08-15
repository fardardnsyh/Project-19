/*
  Warnings:

  - The primary key for the `Application` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" DROP CONSTRAINT "Application_pkey",
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "status" DROP DEFAULT,
ADD CONSTRAINT "Application_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Application_id_seq";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "banner" TEXT;

-- CreateIndex
CREATE INDEX "Application_userId_idx" ON "Application"("userId");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
