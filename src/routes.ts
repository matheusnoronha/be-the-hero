import { Router } from 'express'
import OngsController from './controllers/OngsController'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ message: 'hello' })
})

router.post('/ongs', OngsController.store)
router.get('/ongs', OngsController.index)

export default router
