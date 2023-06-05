import prisma from "../db"
import { createJWT, hashPassword } from "../modules/auth"

export const createNewMedic = async (req, res) => {
    const user = await prisma.medico.create({
        data: {
            correo: req.body.correo,
            nombre: req.body.nombre,
            apellidoPaterno: req.body.apellidoPaterno,
            apellidoMaterno: req.body.apellidoMaterno,
            telefono: req.body.telefono,
            especialidad: req.body.especialidad,
            contrasenia: req.body.contrasenia
        }
    })

    const token = createJWT(user)
    res.json({ token })
}