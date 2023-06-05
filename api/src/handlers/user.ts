import prisma from "../db"
import { createJWT, hashPassword, comparePasswords } from "../modules/auth"

export const createNewMedic = async (req, res) => {
    const user = await prisma.medico.create({
        data: {
            correo: req.body.correo,
            nombre: req.body.nombre,
            apellidoPaterno: req.body.apellidoPaterno,
            apellidoMaterno: req.body.apellidoMaterno,
            telefono: req.body.telefono,
            especialidad: req.body.especialidad,
            contrasenia: await hashPassword(req.body.contrasenia)
        }
    })

    const token = createJWT(user)
    res.json({ token })
}

export const signinMedic = async (req, res) => {
    const user = await prisma.medico.findUnique({
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