import {Router} from 'express'

const router = Router()

/*
* Médico
*/

router.get('/medico', () => {})
router.get('/medico:id', () => {})
router.put('/medico:id', () => {})
router.post('/medico', () => {})
router.delete('/medico:id', () => {})

/*
* Paciente
*/

router.get('/paciente', () => {})
router.get('/paciente:id', () => {})
router.put('/paciente:id', () => {})
router.post('/paciente', () => {})
router.delete('/paciente:id', () => {})

/*
* Medicamento
*/

router.get('/medicamento', () => {})
router.get('/medicamento:id', () => {})
router.put('/medicamento:id', () => {})
router.post('/medicamento', () => {})
router.delete('/medicamento:id', () => {})

/*
* Dieta
*/

router.get('/dieta', () => {})
router.get('/dieta:id', () => {})
router.put('/dieta:id', () => {})
router.post('/dieta', () => {})
router.delete('/dieta:id', () => {})

/*
* Ejercicio
*/

router.get('/ejercicio', () => {})
router.get('/ejercicio:id', () => {})
router.put('/ejercicio:id', () => {})
router.post('/ejercicio', () => {})
router.delete('/ejercicio:id', () => {})

/*
* Recordatorio
*/

router.get('/recordatorio', () => {})
router.get('/recordatorio:id', () => {})
router.put('/recordatorio:id', () => {})
router.post('/recordatorio', () => {})
router.delete('/recordatorio:id', () => {})

export default router