import Knex from 'knex'
import knexConfig from '../../knexfile'

const connection = Knex(knexConfig.development)

export default connection
