/*
  Warnings:

  - You are about to drop the column `cardId` on the `Potential` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[potentialId]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cardDetailsId` to the `AwakeningRoute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardDetailsId` to the `CardLink` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardDetailsId` to the `OptimalAwakeningGrowth` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardDetailsId` to the `Special` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardDetailsId` to the `Transformation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AwakeningRoute" DROP CONSTRAINT "AwakeningRoute_card_id_fkey";

-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_id_fkey";

-- DropIndex
DROP INDEX "Potential_cardId_key";

-- AlterTable
ALTER TABLE "AwakeningRoute" ADD COLUMN     "cardDetailsId" INTEGER NOT NULL,
ADD COLUMN     "cardId" INTEGER;

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "potentialId" INTEGER;

-- AlterTable
ALTER TABLE "CardLink" ADD COLUMN     "cardDetailsId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "OptimalAwakeningGrowth" ADD COLUMN     "cardDetailsId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Potential" DROP COLUMN "cardId";

-- AlterTable
ALTER TABLE "Special" ADD COLUMN     "cardDetailsId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Transformation" ADD COLUMN     "cardDetailsId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "CardDetails" (
    "id" SERIAL NOT NULL,
    "cardId" INTEGER NOT NULL,
    "potentialId" INTEGER,

    CONSTRAINT "CardDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CardDetailsToCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CardDetailsToCategory_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CardDetailsToPartner" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CardDetailsToPartner_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CardDetailsToSaLevelCard" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CardDetailsToSaLevelCard_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "CardDetails_cardId_key" ON "CardDetails"("cardId");

-- CreateIndex
CREATE UNIQUE INDEX "CardDetails_potentialId_key" ON "CardDetails"("potentialId");

-- CreateIndex
CREATE INDEX "_CardDetailsToCategory_B_index" ON "_CardDetailsToCategory"("B");

-- CreateIndex
CREATE INDEX "_CardDetailsToPartner_B_index" ON "_CardDetailsToPartner"("B");

-- CreateIndex
CREATE INDEX "_CardDetailsToSaLevelCard_B_index" ON "_CardDetailsToSaLevelCard"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Card_potentialId_key" ON "Card"("potentialId");

-- AddForeignKey
ALTER TABLE "CardDetails" ADD CONSTRAINT "CardDetails_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardDetails" ADD CONSTRAINT "CardDetails_potentialId_fkey" FOREIGN KEY ("potentialId") REFERENCES "Potential"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_potentialId_fkey" FOREIGN KEY ("potentialId") REFERENCES "Potential"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Special" ADD CONSTRAINT "Special_cardDetailsId_fkey" FOREIGN KEY ("cardDetailsId") REFERENCES "CardDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwakeningRoute" ADD CONSTRAINT "AwakeningRoute_cardDetailsId_fkey" FOREIGN KEY ("cardDetailsId") REFERENCES "CardDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwakeningRoute" ADD CONSTRAINT "AwakeningRoute_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transformation" ADD CONSTRAINT "Transformation_cardDetailsId_fkey" FOREIGN KEY ("cardDetailsId") REFERENCES "CardDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptimalAwakeningGrowth" ADD CONSTRAINT "OptimalAwakeningGrowth_cardDetailsId_fkey" FOREIGN KEY ("cardDetailsId") REFERENCES "CardDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardLink" ADD CONSTRAINT "CardLink_cardDetailsId_fkey" FOREIGN KEY ("cardDetailsId") REFERENCES "CardDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardDetailsToCategory" ADD CONSTRAINT "_CardDetailsToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "CardDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardDetailsToCategory" ADD CONSTRAINT "_CardDetailsToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardDetailsToPartner" ADD CONSTRAINT "_CardDetailsToPartner_A_fkey" FOREIGN KEY ("A") REFERENCES "CardDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardDetailsToPartner" ADD CONSTRAINT "_CardDetailsToPartner_B_fkey" FOREIGN KEY ("B") REFERENCES "Partner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardDetailsToSaLevelCard" ADD CONSTRAINT "_CardDetailsToSaLevelCard_A_fkey" FOREIGN KEY ("A") REFERENCES "CardDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardDetailsToSaLevelCard" ADD CONSTRAINT "_CardDetailsToSaLevelCard_B_fkey" FOREIGN KEY ("B") REFERENCES "SaLevelCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
