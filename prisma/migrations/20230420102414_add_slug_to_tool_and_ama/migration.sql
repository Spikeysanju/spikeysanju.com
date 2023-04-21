/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `amas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `tools` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `amas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `tools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "amas" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tools" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "amas_slug_key" ON "amas"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "tools_slug_key" ON "tools"("slug");
