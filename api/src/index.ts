import app from './server'

const PORT = 3001

app.listen(PORT, () => {
    console.log(`[Servidor iniciado en el puerto ${PORT}]`)
    console.log(`[http://localhost:${PORT}]`)
})