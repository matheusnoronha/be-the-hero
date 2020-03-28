import { Router } from 'express'
import OngsController from '../controllers/OngsController'

const router = Router()

router.post('/', OngsController.store)
router.get('/', OngsController.index)

export default router
