/*
  Warnings:

  - You are about to drop the column `account_id` on the `sessions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_account_id_fkey";

-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "account_id";
