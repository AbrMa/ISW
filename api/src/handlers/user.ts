import prisma from "../db"
import { createJWT, hashPassword, comparePasswords } from "../modules/auth"

export const createNewUser = async (req, res) => {
    const user = await prisma.paciente.create({
        data: {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            fechaNacimiento: req.body.fechaNacimiento,
            correo: req.body.correo,
            telefono: req.body.telefono,
            contrasenia: req.body.contrasenia
        }
    })

    const token = createJWT(user)
    res.json({ token })
}

export const signinUser = async (req, res) => {
    const user = await prisma.paciente.findUnique({
        where: {
            correo: req.body.correo
        }
    })

    const isValid = await comparePasswords(req.body.contrasenia, user.contrasenia)

    if (!isValid) {
        res.status(401)
        res.json({
            message: "Usuario o contraseña no válidos"
        })
        return
    }

    const token = createJWT(user)
    res.json({ token })
}