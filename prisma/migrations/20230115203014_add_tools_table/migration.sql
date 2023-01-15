-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "tools_id" TEXT;

-- CreateTable
CREATE TABLE "tools" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "tools_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tools_id_key" ON "tools"("id");

-- AddForeignKey
ALTER TABLE "tools" ADD CONSTRAINT "tools_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_tools_id_fkey" FOREIGN KEY ("tools_id") REFERENCES "tools"("id") ON DELETE CASCADE ON UPDATE CASCADE;
