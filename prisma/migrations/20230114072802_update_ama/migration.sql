/*
  Warnings:

  - You are about to drop the column `provider` on the `amas` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `amas` table. All the data in the column will be lost.
  - Added the required column `question` to the `amas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "amas" DROP COLUMN "provider",
DROP COLUMN "title",
ADD COLUMN     "question" VARCHAR(255) NOT NULL;
