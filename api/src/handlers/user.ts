import prisma from "../db"
import { createJWT, hashPassword, comparePasswords } from "../modules/auth"

export const createNewUser = async (req, res) => {
    const paciente = await prisma.paciente.create({
        data: {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            fechaNacimiento: new Date(req.body.fechaNacimiento),
            correo: req.body.correo,
            telefono: req.body.telefono,
            contrasenia: await hashPassword(req.body.contrasenia)
        }
    })

    const token = createJWT(paciente)
    res.json({ token })
}

export const signinUser = async (req, res) => {
    const paciente = await prisma.paciente.findUnique({
        where: {
            correo: req.body.correo
        }
    })

    const isValid = await comparePasswords(req.body.contrasenia, paciente.contrasenia)

    if (!isValid) {
        res.status(401)
        res.json({
            message: "Usuario o contraseña no válidos"
        })
        return
    }

    const token = createJWT(paciente)
    res.json({ token })
}

export const updateUser = async (req, res) => {
    const paciente = await prisma.paciente.update({
        where: {
            idPaciente: req.paciente.idPaciente
            
        },
        data: {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            fechaNacimiento: new Date(req.body.fechaNacimiento),
            correo: req.body.correo,
            telefono: req.body.telefono,
            contrasenia: await hashPassword(req.body.contrasenia)
        }
    })

    res.json({
        data: paciente
    })
}

export const deleteUser = async (req, res) => {
    const paciente = await prisma.paciente.delete({
        where: {
            idPaciente: req.paciente.idPaciente
        }
    })


    res.json({
        data: paciente
    })
}