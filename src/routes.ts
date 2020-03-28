import { Router } from 'express'
import OngsRoutes from './routes/OngsRoutes'
import ProfileRoutes from './routes/ProfileRoutes'

import IncidentRoutes from './routes/IncidentRoutes'

class RouterBuilder {
  private readonly routes = Router()

  public getRoutes (): Router {
    this.routes.use('/incidents', IncidentRoutes)
    this.routes.use('/ongs', OngsRoutes)
    this.routes.use('/profile', ProfileRoutes)
    return this.routes
  }
}

export default new RouterBuilder().getRoutes()
