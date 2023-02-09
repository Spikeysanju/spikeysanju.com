/*
  Warnings:

  - You are about to drop the column `description` on the `people_i_wanna_meet_irl` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Tags" AS ENUM ('BRAND', 'DESIGN', 'CRAFT', 'ENGINEERING', 'PRODUCT');

-- AlterTable
ALTER TABLE "people_i_wanna_meet_irl" DROP COLUMN "description",
ADD COLUMN     "tags" "Tags"[],
ALTER COLUMN "image" DROP NOT NULL;
