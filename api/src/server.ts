import express from 'express'
import router from './router'
import { protect } from './modules/auth'
import {createNewUser, signinUser } from './handlers/user'
import { body } from "express-validator"
import { handleInputErrors } from './modules/middleware'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.status(200)
    res.json({
        message: 'Hello'
    })
})

app.use('/api', protect, router)

app.post('/user',
    body('nombre').isString(),
    body('apellidos').isString(),
    body('fechaNacimiento').isString(), 
    body('correo').isEmail(),
    body('telefono').isString().isNumeric(),
    body('contrasenia').isString(),
    handleInputErrors,
    createNewUser
)
app.post('/signin',
    body('correo').isEmail(),
    body('contrasenia').isString(),
    handleInputErrors,
    signinUser
)

export default app