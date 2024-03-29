import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const comparePasswords = (password, hash) => {
    return bcrypt.compare(password, hash)
}

export const hashPassword = (password) => {
    return bcrypt.hash(password, 8)
}

export const createJWT = (paciente) => {
  const token = jwt.sign(
    { idPaciente: paciente.idPaciente, correo: paciente.correo },
    process.env.JWT_SECRET
  );
  return token;
}

export const protect = (req, res, next) => {
    const bearer = req.headers.authorization

    if (!bearer) {
        res.status(401)
        res.json({
            message: "No se ha enviado token"
        })
        return
    }

    const [, token] = bearer.split(" ")
    if (!token) {
        res.status(401)
        res.json({
            message: "No se ha enviado token"
        })
        return;
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.paciente = payload
        console.log(payload)
        next()
        return
    } catch (e) {
        console.error(e);
        res.status(401);
        res.json({
            message: "Token mal formado"
        })
        return
    }
}