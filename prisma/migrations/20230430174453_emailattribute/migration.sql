/*
  Warnings:

  - A unique constraint covering the columns `[Email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Email` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "Email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_Email_key" ON "user"("Email");
