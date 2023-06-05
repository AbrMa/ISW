/*
  Warnings:

  - Added the required column `idMedico` to the `Dieta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idMedico` to the `Ejercicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idMedico` to the `Medicamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contrasenia` to the `Medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contrasenia` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idMedico` to the `Recordatorio` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Dieta" DROP CONSTRAINT "Dieta_idPaciente_fkey";

-- DropForeignKey
ALTER TABLE "Ejercicio" DROP CONSTRAINT "Ejercicio_idPaciente_fkey";

-- DropForeignKey
ALTER TABLE "Medicamento" DROP CONSTRAINT "Medicamento_idPaciente_fkey";

-- DropForeignKey
ALTER TABLE "Recordatorio" DROP CONSTRAINT "Recordatorio_idPaciente_fkey";

-- AlterTable
ALTER TABLE "Dieta" ADD COLUMN     "idMedico" TEXT NOT NULL,
ALTER COLUMN "idPaciente" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Ejercicio" ADD COLUMN     "idMedico" TEXT NOT NULL,
ALTER COLUMN "idPaciente" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Medicamento" ADD COLUMN     "idMedico" TEXT NOT NULL,
ALTER COLUMN "idPaciente" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Medico" ADD COLUMN     "contrasenia" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN     "contrasenia" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Recordatorio" ADD COLUMN     "idMedico" TEXT NOT NULL,
ALTER COLUMN "idPaciente" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Medicamento" ADD CONSTRAINT "Medicamento_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("idPaciente") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicamento" ADD CONSTRAINT "Medicamento_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico"("idMedico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dieta" ADD CONSTRAINT "Dieta_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("idPaciente") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dieta" ADD CONSTRAINT "Dieta_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico"("idMedico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ejercicio" ADD CONSTRAINT "Ejercicio_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("idPaciente") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ejercicio" ADD CONSTRAINT "Ejercicio_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico"("idMedico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recordatorio" ADD CONSTRAINT "Recordatorio_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("idPaciente") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recordatorio" ADD CONSTRAINT "Recordatorio_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico"("idMedico") ON DELETE RESTRICT ON UPDATE CASCADE;
