import { Router } from 'express'

import OngsRoutes from './routes/OngsRoutes'
import ProfileRoutes from './routes/ProfileRoutes'
import IncidentRoutes from './routes/IncidentRoutes'
import SessionRoutes from './routes/SessionRoutes'

class RouterBuilder {
  private readonly routes = Router()

  public getRoutes (): Router {
    this.routes.use('/incidents', IncidentRoutes)
    this.routes.use('/ongs', OngsRoutes)
    this.routes.use('/profile', ProfileRoutes)
    this.routes.use('/session', SessionRoutes)
    return this.routes
  }
}

export default new RouterBuilder().getRoutes()
