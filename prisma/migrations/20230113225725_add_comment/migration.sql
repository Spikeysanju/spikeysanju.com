/*
  Warnings:

  - You are about to drop the column `label` on the `amas` table. All the data in the column will be lost.
  - You are about to drop the column `provider` on the `comments` table. All the data in the column will be lost.
  - Added the required column `flair` to the `amas` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CommentProvider" AS ENUM ('ASKMEANYTHING', 'BLOG', 'TOOLSIUSE', 'BOOKS', 'GUESTBOOK');

-- AlterTable
ALTER TABLE "amas" DROP COLUMN "label",
ADD COLUMN     "flair" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "provider",
ADD COLUMN     "blog_id" TEXT,
ADD COLUMN     "commentProvider" "CommentProvider" NOT NULL DEFAULT 'ASKMEANYTHING';

-- CreateTable
CREATE TABLE "blogs" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "category" TEXT[],
    "user_id" TEXT,

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blogs_id_key" ON "blogs"("id");

-- AddForeignKey
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "blogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
