-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_uid_fkey";

-- AlterTable
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
