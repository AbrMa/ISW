import jwt from "jsonwebtoken"

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id},
    process.env.JWT_SECRET
  );
  return token;
}

export const protect = (req, res, next) => {
    const bearer = req.headers.authorization

    if (!bearer) {
        res.status(401)
        res.json({
            message: "Acceso no autorizado"
        })
        return
    }

    const [, token] = bearer.split(" ")
    if (!token) {
        console.log("here")
        res.status(401)
        res.json({
            message: "Acceso no autorizado"
        })
        return;
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = payload
        console.log(payload)
        next()
        return
    } catch (e) {
        console.error(e);
        res.status(401);
        res.json({
            message: "Acceso no autorizado"
        })
        return
    }
}