/*
  Warnings:

  - You are about to drop the column `imageLink` on the `Blog` table. All the data in the column will be lost.
  - The `content` column on the `Blog` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "imageLink",
DROP COLUMN "content",
ADD COLUMN     "content" TEXT[];
