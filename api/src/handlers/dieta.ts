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

export const getOneDieta = async (req, res) => {
    const idDieta = req.params.idDieta

    const dieta = await prisma.dieta.findFirst({
        where: {
            idDieta,
            idPaciente: req.paciente.idPaciente,
        }
    })

    res.json({
        data: dieta
    })
}

export const createDieta = async (req, res) => {
    const dieta = await prisma.dieta.create({
        data: {
            nombre: req.body.nombre,
            ingredientes: req.body.ingredientes,
            fecha: new Date(req.body.fecha),
            hora: req.body.hora,
            idPaciente: req.paciente.idPaciente,
            cantidad: req.body.cantidad,
            unidad: req.body.unidad
        }
    })

    res.json({
        data: dieta
    })
}

export const updateDieta = async (req, res) => {
    const dieta = await prisma.dieta.update({
        where: {
            idDieta_idPaciente: {
                idDieta: req.params.idDieta,
                idPaciente: req.paciente.idPaciente
            }
        },
        data: {
            nombre: req.body.nombre,
            ingredientes: req.body.ingredientes,
            fecha: new Date(req.body.fecha),
            hora: req.body.hora,
            idPaciente: req.paciente.idPaciente,
            cantidad: req.body.cantidad,
            unidad: req.body.unidad
        }
    })

    res.json({
        data: dieta
    })
}

export const deleteDieta = async (req, res) => {
    const dieta = await prisma.dieta.delete({
        where: {
            idDieta_idPaciente: {
                idDieta: req.params.idDieta,
                idPaciente: req.paciente.idPaciente
            }
        }
    })

    res.json({
        data: dieta
    })
}