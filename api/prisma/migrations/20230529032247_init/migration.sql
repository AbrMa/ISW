-- CreateTable
CREATE TABLE "Medico" (
    "idMedico" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidoPaterno" TEXT NOT NULL,
    "apellidoMaterno" TEXT,
    "telefono" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,

    CONSTRAINT "Medico_pkey" PRIMARY KEY ("idMedico")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "idPaciente" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidoPaterno" TEXT NOT NULL,
    "apellidoMaterno" TEXT,
    "telefono" TEXT NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "genero" BOOLEAN NOT NULL,
    "tipoDiabetes" TEXT NOT NULL,
    "nivelAzucar" INTEGER NOT NULL,
    "idMedico" TEXT NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("idPaciente")
);

-- CreateTable
CREATE TABLE "Medicamento" (
    "idMedicamento" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "dosis" TEXT NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3) NOT NULL,
    "idPaciente" TEXT NOT NULL,

    CONSTRAINT "Medicamento_pkey" PRIMARY KEY ("idMedicamento")
);

-- CreateTable
CREATE TABLE "Dieta" (
    "idDieta" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "tipoAlimentos" TEXT NOT NULL,
    "carbohidratos" INTEGER NOT NULL,
    "calorias" INTEGER NOT NULL,
    "restricciones" TEXT NOT NULL,
    "idPaciente" TEXT NOT NULL,

    CONSTRAINT "Dieta_pkey" PRIMARY KEY ("idDieta")
);

-- CreateTable
CREATE TABLE "Ejercicio" (
    "idEjercicio" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "duracion" INTEGER NOT NULL,
    "intensidad" TEXT NOT NULL,
    "idPaciente" TEXT NOT NULL,

    CONSTRAINT "Ejercicio_pkey" PRIMARY KEY ("idEjercicio")
);

-- CreateTable
CREATE TABLE "Recordatorio" (
    "idRecordatorio" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "tipo" TEXT NOT NULL,
    "idPaciente" TEXT NOT NULL,

    CONSTRAINT "Recordatorio_pkey" PRIMARY KEY ("idRecordatorio")
);

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico"("idMedico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicamento" ADD CONSTRAINT "Medicamento_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("idPaciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dieta" ADD CONSTRAINT "Dieta_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("idPaciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ejercicio" ADD CONSTRAINT "Ejercicio_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("idPaciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recordatorio" ADD CONSTRAINT "Recordatorio_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("idPaciente") ON DELETE RESTRICT ON UPDATE CASCADE;
