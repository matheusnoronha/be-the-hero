import { Request, Response } from 'express'

import connection from '../database/connection'

class SessionController {
  async store (req: Request, res: Response): Promise <Response> {
    const { id } = req.body
    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first()

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found with this id' })
    }

    return res.json(ong)
  }
}

export default new SessionController()
