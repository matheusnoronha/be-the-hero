import { Request, Response, request } from 'express'
import connection from '../database/connection'

interface Incident {
  id: number;
  title: string;
  description: string;
  value: number;
  ongId?: string;
}

class ProfileController {
  async index (req: Request, res: Response): Promise<Response> {
    const ongId = req.headers.authorization

    const incidents = await connection<Incident>('incidents')
      .where('ongId', ongId)
      .select('*')

    return res.json(incidents)
  }
}

export default new ProfileController()
