import { Request, Response } from 'express'
import crypto from 'crypto'
import connection from '../database/connection'

interface Ongs {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string
}

class OngsController {
  public async store (req: Request, res: Response): Promise <Response> {
    const { name, email, whatsapp, city, uf } = req.body

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return res.json({ id })
  }

  public async index (req: Request, res: Response): Promise <Response> {
    const ongs = await connection<Ongs>('ongs').select('*')

    return res.json(ongs)
  }
}

export default new OngsController()
