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