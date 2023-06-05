import express from 'express'
import router from './router'
import { protect } from './modules/auth'
import { createNewMedic, signinMedic } from './handlers/user'

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

app.post('/usermedic', createNewMedic)
app.post('/signinmedic', signinMedic)

export default app