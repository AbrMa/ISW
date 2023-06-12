import { Router } from 'express'
import { body } from 'express-validator'
import { handleInputErrors } from './modules/middleware'
import { createMedicamento, deleteMedicamento, getMedicamentos, getOneMedicamento, updateMedicamento } from './handlers/medicamento'
import { createDieta, deleteDieta, getDietas, getOneDieta, updateDieta } from './handlers/dieta'

const router = Router()

/*
* Medicamento
*/

router.get('/medicamento', getMedicamentos)
router.get('/medicamento/:idMedicamento', getOneMedicamento)
router.put('/medicamento/:idMedicamento',
    body('nombre').optional().isString(),
    body('dosis').optional().isString(),
    body('frecuencia').optional().isNumeric(),
    body('fechaInicio').optional().isString().matches(/^\d{2}-\d{2}-\d{4}$/), 
    body('fechaFin').optional().isString().matches(/^\d{2}-\d{2}-\d{4}$/), 
    handleInputErrors,
    updateMedicamento
)
router.post('/medicamento',
    body('nombre').exists().isString(),
    body('dosis').exists().isString(),
    body('frecuencia').exists().isNumeric(),
    body('fechaInicio').exists().isString().matches(/^\d{2}-\d{2}-\d{4}$/), 
    body('fechaFin').exists().isString().matches(/^\d{2}-\d{2}-\d{4}$/), 
    handleInputErrors, 
    createMedicamento
)
router.delete('/medicamento/:idMedicamento', deleteMedicamento)

/*
* Dieta
*/

router.get('/dieta', getDietas)
router.get('/dieta/:idDieta', getOneDieta)
router.put('/dieta/:idDieta', 
    body('nombre').optional().isString(),
    body('ingredientes').optional().isString(),
    body('fecha').optional().matches(/^\d{2}-\d{2}-\d{4}$/), 
    body('hora').optional(),
    handleInputErrors,
    updateDieta
)
router.post('/dieta', 
    body('nombre').exists().isString(),
    body('ingredientes').exists().isString(),
    body('fecha').exists().isString().matches(/^\d{2}-\d{2}-\d{4}$/), 
    body('hora').exists().isString(),
    handleInputErrors,
    createDieta
)
router.delete('/dieta/:idDieta', deleteDieta)

/*
* Ejercicio
*/

router.get('/ejercicio', () => {})
router.get('/ejercicio/:id', () => {})
router.put('/ejercicio/:id',
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
router.get('/recordatorio/:id', () => {})
router.put('/recordatorio/:id', 
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
router.delete('/recordatorio/:id', () => {})

export default router