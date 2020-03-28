import { Request, Response } from 'express'
import connection from '../database/connection'

interface Incident {
  id: number;
  title: string;
  description: string;
  value: number;
  ongId: string;
}

class IncidentController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const incidents = await connection<Incident>('incidents').select('*')

      return res.json(incidents)
    } catch (err) {
      return res.json({ error: err.toString() })
    }
  }

  public async store (req: Request, res: Response): Promise <Response> {
    const { title, description, value } = req.body
    const ongId = req.headers.authorization

    const [id] = await connection<Incident>('incidents').returning('id').insert({
      title,
      description,
      value,
      ongId
    })

    return res.json({ id })
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const ongId = req.headers.authorization

    const incident = await connection<Incident>('incidents')
      .where('id', id)
      .select('ongId')
      .first()

    if (!incident) {
      return res.status(404).json({ error: 'Incident not exist' })
    }

    if (incident?.ongId !== ongId) {
      return res.status(401).json({ error: 'Operation not permitted.' })
    }

    await connection<Incident>('incidents').where('id', id).delete()

    return res.status(204).send()
  }
}

export default new IncidentController()
