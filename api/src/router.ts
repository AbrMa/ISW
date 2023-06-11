import { Router } from 'express'
import { body } from 'express-validator'
import { handleInputErrors } from './modules/middleware'
import { getMedicamentos } from './handlers/medicamento'

const router = Router()

/*
* Medicamento
*/

router.get('/medicamento', getMedicamentos)
router.get('/medicamento:id', (req, res) => {
    console.log('hello from medicamento')
})
router.put('/medicamento:id',
    body('nombre').optional().isString(),
    body('dosis').optional().isString(),
    body('frecuencia').optional().isNumeric(),
    body('fechaInicio').optional().isString().matches(/^\d{2}-\d{2}-\d{4}$/), 
    body('fechaFin').optional().isString().matches(/^\d{2}-\d{2}-\d{4}$/), 
    handleInputErrors,
    (req, res) => {}
)
router.post('/medicamento',
body('nombre').exists().isString(),
    body('dosis').exists().isString(),
    body('frecuencia').exists().isNumeric(),
    body('fechaInicio').exists().isString().matches(/^\d{2}-\d{2}-\d{4}$/), 
    body('fechaFin').exists().isString().matches(/^\d{2}-\d{2}-\d{4}$/), 
    handleInputErrors, 
    (req, res) => {}
)
router.delete('/medicamento:id', () => {})

/*
* Dieta
*/

router.get('/dieta', () => {})
router.get('/dieta:id', () => {})
router.put('/dieta:id', 
    body('nombre').optional().isString(),
    body('ingredientes').optional().isString(),
    body('fecha').optional().matches(/^\d{2}-\d{2}-\d{4}$/), 
    body('hora').optional(),
    handleInputErrors,
    (req, res) => {}
)
router.post('/dieta', 
    body('nombre').exists().isString(),
    body('ingredientes').exists().isString(),
    body('fecha').exists().isString().matches(/^\d{2}-\d{2}-\d{4}$/), 
    body('hora').exists().isString(),
    handleInputErrors,
    (req, res) =>{}
)
router.delete('/dieta:id', () => {})

/*
* Ejercicio
*/

router.get('/ejercicio', () => {})
router.get('/ejercicio:id', () => {})
router.put('/ejercicio:id',
    body('nombre').optional().isString(),
    body('duracion').optional().isNumeric(),
    body('fecha').optional().isString().matches(/^\d{2}-\d{2}-\d{4}$/),
    handleInputErrors,
    (req, res) => {}
)
router.post('/ejercicio',
    body('nombre').exists().isString(),
    body('duracion').exists().isNumeric(),
    body('fecha').exists().isString().matches(/^\d{2}-\d{2}-\d{4}$/),
    handleInputErrors, 
    () => {}
)
router.delete('/ejercicio:id', () => {})

/*
* Recordatorio
*/

router.get('/recordatorio', () => {})
router.get('/recordatorio:id', () => {})
router.put('/recordatorio:id', 
    body('hora').optional().isString(),
    body('repetir').optional().isNumeric(),
    handleInputErrors,
    (req, res) => {}
)
router.post('/recordatorio', 
    body('hora').exists().isString(),
    body('repetir').exists().isNumeric(),
    handleInputErrors,
    (req, res) => {}
)
router.delete('/recordatorio:id', () => {})

export default router