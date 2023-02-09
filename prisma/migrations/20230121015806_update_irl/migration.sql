/*
  Warnings:

  - The `tags` column on the `people_i_wanna_meet_irl` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "people_i_wanna_meet_irl" DROP COLUMN "tags",
ADD COLUMN     "tags" VARCHAR(255)[];

-- DropEnum
DROP TYPE "Tags";
