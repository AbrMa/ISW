/*
  Warnings:

  - You are about to drop the column `calorias` on the `Dieta` table. All the data in the column will be lost.
  - You are about to drop the column `carbohidratos` on the `Dieta` table. All the data in the column will be lost.
  - You are about to drop the column `descripcion` on the `Dieta` table. All the data in the column will be lost.
  - You are about to drop the column `idMedico` on the `Dieta` table. All the data in the column will be lost.
  - You are about to drop the column `restricciones` on the `Dieta` table. All the data in the column will be lost.
  - You are about to drop the column `tipoAlimentos` on the `Dieta` table. All the data in the column will be lost.
  - You are about to drop the column `descripcion` on the `Ejercicio` table. All the data in the column will be lost.
  - You are about to drop the column `idMedico` on the `Ejercicio` table. All the data in the column will be lost.
  - You are about to drop the column `intensidad` on the `Ejercicio` table. All the data in the column will be lost.
  - You are about to drop the column `descripcion` on the `Medicamento` table. All the data in the column will be lost.
  - You are about to drop the column `horario` on the `Medicamento` table. All the data in the column will be lost.
  - You are about to drop the column `idMedico` on the `Medicamento` table. All the data in the column will be lost.
  - You are about to drop the column `apellidoMaterno` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `apellidoPaterno` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `idMedico` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `nivelAzucar` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `Recordatorio` table. All the data in the column will be lost.
  - You are about to drop the column `idMedico` on the `Recordatorio` table. All the data in the column will be lost.
  - You are about to drop the column `mensaje` on the `Recordatorio` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Recordatorio` table. All the data in the column will be lost.
  - You are about to drop the `Medico` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fecha` to the `Dieta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora` to the `Dieta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingredientes` to the `Dieta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha` to the `Ejercicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frecuencia` to the `Medicamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apellidos` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora` to the `Recordatorio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idMedicamento` to the `Recordatorio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repetir` to the `Recordatorio` table without a default value. This is not possible if the table is not empty.
  - Made the column `idPaciente` on table `Recordatorio` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Dieta" DROP CONSTRAINT "Dieta_idMedico_fkey";

-- DropForeignKey
ALTER TABLE "Ejercicio" DROP CONSTRAINT "Ejercicio_idMedico_fkey";

-- DropForeignKey
ALTER TABLE "Medicamento" DROP CONSTRAINT "Medicamento_idMedico_fkey";

-- DropForeignKey
ALTER TABLE "Paciente" DROP CONSTRAINT "Paciente_idMedico_fkey";

-- DropForeignKey
ALTER TABLE "Recordatorio" DROP CONSTRAINT "Recordatorio_idMedico_fkey";

-- DropForeignKey
ALTER TABLE "Recordatorio" DROP CONSTRAINT "Recordatorio_idPaciente_fkey";

-- AlterTable
ALTER TABLE "Dieta" DROP COLUMN "calorias",
DROP COLUMN "carbohidratos",
DROP COLUMN "descripcion",
DROP COLUMN "idMedico",
DROP COLUMN "restricciones",
DROP COLUMN "tipoAlimentos",
ADD COLUMN     "fecha" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "hora" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "ingredientes" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Ejercicio" DROP COLUMN "descripcion",
DROP COLUMN "idMedico",
DROP COLUMN "intensidad",
ADD COLUMN     "fecha" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Medicamento" DROP COLUMN "descripcion",
DROP COLUMN "horario",
DROP COLUMN "idMedico",
ADD COLUMN     "frecuencia" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Paciente" DROP COLUMN "apellidoMaterno",
DROP COLUMN "apellidoPaterno",
DROP COLUMN "idMedico",
DROP COLUMN "nivelAzucar",
ADD COLUMN     "altura" INTEGER,
ADD COLUMN     "apellidos" TEXT NOT NULL,
ADD COLUMN     "peso" INTEGER,
ALTER COLUMN "genero" DROP NOT NULL,
ALTER COLUMN "tipoDiabetes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Recordatorio" DROP COLUMN "fecha",
DROP COLUMN "idMedico",
DROP COLUMN "mensaje",
DROP COLUMN "tipo",
ADD COLUMN     "hora" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "idMedicamento" TEXT NOT NULL,
ADD COLUMN     "repetir" INTEGER NOT NULL,
ALTER COLUMN "idPaciente" SET NOT NULL;

-- DropTable
DROP TABLE "Medico";

-- AddForeignKey
ALTER TABLE "Recordatorio" ADD CONSTRAINT "Recordatorio_idMedicamento_fkey" FOREIGN KEY ("idMedicamento") REFERENCES "Medicamento"("idMedicamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recordatorio" ADD CONSTRAINT "Recordatorio_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("idPaciente") ON DELETE RESTRICT ON UPDATE CASCADE;
