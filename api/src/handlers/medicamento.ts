import prisma from "../db"

export const getMedicamentos = async (req, res) => {
    const paciente = await prisma.paciente.findUnique({
        where: {
            idPaciente: req.paciente.idPaciente
        },
        include: {
            medicamentos: true
        }
    })

    res.json({
        data: paciente.medicamentos
    })
}

export const getOneMedicamento = async (req, res) => {
    const idMedicamento = req.params.idMedicamento

    const medicamento = await prisma.medicamento.findFirst({
        where: {
            idMedicamento,
            idPaciente: req.paciente.idPaciente,
        }
    })

    res.json({
        data: medicamento
    })
}