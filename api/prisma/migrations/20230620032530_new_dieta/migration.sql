-- AlterTable
ALTER TABLE "Dieta" ADD COLUMN     "cantidad" TEXT,
ADD COLUMN     "unidad" TEXT,
ALTER COLUMN "ingredientes" DROP NOT NULL;
