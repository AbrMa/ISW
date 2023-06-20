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

export const createMedicamento = async (req, res) => {
    const medicamento = await prisma.medicamento.create({
        data: {
            nombre: req.body.nombre,
            repetir: req.body.repetir,
            hora: req.body.hora,
            idPaciente: req.paciente.idPaciente
        }
    })

    res.json({
        data: medicamento
    })
}

export const updateMedicamento = async (req, res) => {
    const medicamento = await prisma.medicamento.update({
        where: {
            idMedicamento_idPaciente: {
                idMedicamento: req.params.idMedicamento,
                idPaciente: req.paciente.idPaciente
            }
        },
        data: {
            nombre: req.body.nombre,
            repetir: req.body.repetir,
            hora: req.body.hora,
            idPaciente: req.paciente.idPaciente
        }
    })

    res.json({
        data: medicamento
    })
}

export const deleteMedicamento = async (req, res) => {
    const medicamento = await prisma.medicamento.delete({
        where: {
            idMedicamento_idPaciente: {
                idMedicamento: req.params.idMedicamento,
                idPaciente: req.paciente.idPaciente
            }
        }
    })


    res.json({
        data: medicamento
    })
}