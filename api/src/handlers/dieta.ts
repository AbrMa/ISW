import prisma from "../db"

export const getDietas = async (req, res) => {
    const paciente = await prisma.paciente.findUnique({
        where: {
            idPaciente: req.paciente.idPaciente
        },
        include: {
            dietas: true
        }
    })

    res.json({
        data: paciente.dietas
    })
}