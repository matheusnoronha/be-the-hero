import { Router } from 'express'
import ProfileController from '../controllers/ProfileController'

const router = Router()

router.get('/', ProfileController.index)

export default router
