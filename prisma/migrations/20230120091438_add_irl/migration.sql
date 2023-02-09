-- CreateTable
CREATE TABLE "people_i_wanna_meet_irl" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "met" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT,

    CONSTRAINT "people_i_wanna_meet_irl_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "people_i_wanna_meet_irl_id_key" ON "people_i_wanna_meet_irl"("id");

-- AddForeignKey
ALTER TABLE "people_i_wanna_meet_irl" ADD CONSTRAINT "people_i_wanna_meet_irl_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
