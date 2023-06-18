import prisma from "../db"

export const getEjercicios = async (req, res) => {
    const paciente = await prisma.paciente.findUnique({
        where: {
            idPaciente: req.paciente.idPaciente
        },
        include: {
            ejercicios: true
        }
    })

    res.json({
        data: paciente.ejercicios
    })
}

export const getOneEjercicio = async (req, res) => {
    const idEjercicio = req.params.idEjercicio

    const ejercicio = await prisma.ejercicio.findFirst({
        where: {
            idEjercicio,
            idPaciente: req.paciente.idPaciente
        }
    })

    res.json({
        data: ejercicio
    })
}

export const createEjercicio = async (req, res) => {
    const ejercicio = await prisma.ejercicio.create({
        data: {
            nombre: req.body.nombre,
            duracion: req.body.duracion,
            fecha: new Date(req.body.fecha),
            idPaciente: req.paciente.idPaciente,
        }
    })

    res.json({
        data: ejercicio
    })
}

export const updateEjercicio = async (req, res) => {
    const ejercicio = await prisma.ejercicio.update({
        where: {
            idEjercicio_idPaciente: {
                idEjercicio: req.params.idEjercicio,
                idPaciente: req.paciente.idPaciente
            }
        },
        data: {
            nombre: req.body.nombre,
            duracion: req.body.duracion,
            fecha: new Date(req.body.fecha),
            idPaciente: req.paciente.idPaciente,
        }
    })

    res.json({
        data: ejercicio
    })
}

export const deleteEjercicio = async (req, res) => {
    const ejercicio = await prisma.ejercicio.delete({
        where: {
            idEjercicio_idPaciente: {
                idEjercicio: req.params.idEjercicio,
                idPaciente: req.paciente.idPaciente
            }
        }
    })


    res.json({
        data: ejercicio
    })
}