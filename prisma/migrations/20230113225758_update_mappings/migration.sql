/*
  Warnings:

  - You are about to drop the column `commentProvider` on the `comments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "comments" DROP COLUMN "commentProvider",
ADD COLUMN     "comment_provider" "CommentProvider" NOT NULL DEFAULT 'ASKMEANYTHING';
