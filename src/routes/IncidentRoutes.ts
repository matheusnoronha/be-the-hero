import { Router } from 'express'

import IncidentController from '../controllers/IncidentController'

const router = Router()

router.post('/', IncidentController.store)
router.get('/', IncidentController.index)
router.delete('/:id', IncidentController.delete)

export default router
