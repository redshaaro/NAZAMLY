-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "UserName" TEXT NOT NULL,
    "PassWord" TEXT NOT NULL,
    "Role" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "venue" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Image" TEXT,
    "Capacity" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "Available" BOOLEAN NOT NULL DEFAULT true,
    "adminId" TEXT,

    CONSTRAINT "venue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_UserName_key" ON "user"("UserName");

-- CreateIndex
CREATE UNIQUE INDEX "user_PassWord_key" ON "user"("PassWord");

-- CreateIndex
CREATE UNIQUE INDEX "venue_Name_key" ON "venue"("Name");

-- CreateIndex
CREATE UNIQUE INDEX "venue_Description_key" ON "venue"("Description");

-- AddForeignKey
ALTER TABLE "venue" ADD CONSTRAINT "venue_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
