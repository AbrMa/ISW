/*
  Warnings:

  - A unique constraint covering the columns `[idDieta,idPaciente]` on the table `Dieta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idEjercicio,idPaciente]` on the table `Ejercicio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idMedicamento,idPaciente]` on the table `Medicamento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idRecordatorio,idPaciente]` on the table `Recordatorio` will be added. If there are existing duplicate values, this will fail.
  - Made the column `idPaciente` on table `Dieta` required. This step will fail if there are existing NULL values in that column.
  - Made the column `idPaciente` on table `Ejercicio` required. This step will fail if there are existing NULL values in that column.
  - Made the column `idPaciente` on table `Medicamento` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Dieta" DROP CONSTRAINT "Dieta_idPaciente_fkey";

-- DropForeignKey
ALTER TABLE "Ejercicio" DROP CONSTRAINT "Ejercicio_idPaciente_fkey";

-- DropForeignKey
ALTER TABLE "Medicamento" DROP CONSTRAINT "Medicamento_idPaciente_fkey";

-- AlterTable
ALTER TABLE "Dieta" ALTER COLUMN "idPaciente" SET NOT NULL;

-- AlterTable
ALTER TABLE "Ejercicio" ALTER COLUMN "idPaciente" SET NOT NULL;

-- AlterTable
ALTER TABLE "Medicamento" ALTER COLUMN "idPaciente" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Dieta_idDieta_idPaciente_key" ON "Dieta"("idDieta", "idPaciente");

-- CreateIndex
CREATE UNIQUE INDEX "Ejercicio_idEjercicio_idPaciente_key" ON "Ejercicio"("idEjercicio", "idPaciente");

-- CreateIndex
CREATE UNIQUE INDEX "Medicamento_idMedicamento_idPaciente_key" ON "Medicamento"("idMedicamento", "idPaciente");

-- CreateIndex
CREATE UNIQUE INDEX "Recordatorio_idRecordatorio_idPaciente_key" ON "Recordatorio"("idRecordatorio", "idPaciente");

-- AddForeignKey
ALTER TABLE "Medicamento" ADD CONSTRAINT "Medicamento_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("idPaciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dieta" ADD CONSTRAINT "Dieta_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("idPaciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ejercicio" ADD CONSTRAINT "Ejercicio_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("idPaciente") ON DELETE RESTRICT ON UPDATE CASCADE;
