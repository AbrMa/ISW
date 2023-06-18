import prisma from "../db"

export const getRecordatorios = async (req, res) => {
    const paciente = await prisma.paciente.findUnique({
        where: {
            idPaciente: req.paciente.idPaciente
        },
        include: {
            Recordatorio: true
        }
    })

    res.json({
        data: paciente.Recordatorio
    })
}

export const getOneRecordatorio = async (req, res) => {
    const idRecordatorio = req.params.idRecordatorio

    const recordatorio = await prisma.recordatorio.findFirst({
        where: {
            idRecordatorio,
            idPaciente: req.paciente.idPaciente,
        }
    })

    res.json({
        data: recordatorio
    })
}

export const createRecordatorio = async (req, res) => {
    const recordatorio = await prisma.recordatorio.create({
        data: {
            hora: new Date(req.body.hora),
            repetir: req.body.repetir,
            idMedicamento: req.body.idMedicamento,
            idPaciente: req.paciente.idPaciente
        }
    })

    res.json({
        data: recordatorio
    })
}

export const updateRecordatorio = async (req, res) => {
    const recordatorio = await prisma.recordatorio.update({
        where: {
            idRecordatorio_idPaciente: {
                idRecordatorio: req.params.idRecordatorio,
                idPaciente: req.paciente.idPaciente
            }
        },
        data: {
            hora: new Date(req.body.hora),
            repetir: req.body.repetir,
            idMedicamento: req.body.idMedicamento,
            idPaciente: req.paciente.idPaciente
        }
    })

    res.json({
        data: recordatorio
    })
}

export const deleteRecordatorio = async (req, res) => {
    const recordatorio = await prisma.recordatorio.delete({
        where: {
            idRecordatorio_idPaciente: {
                idRecordatorio: req.params.idRecordatorio,
                idPaciente: req.paciente.idPaciente
            }
        }
    })


    res.json({
        data: recordatorio
    })
}