import * as Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  return knex.schema.createTable('incidents', (table: Knex.TableBuilder) => {
    table.increments()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()

    table.string('ongId').notNullable()
    table.foreign('ongId').references('id').inTable('ongs')
  })
}

export async function down (knex: Knex): Promise<any> {
  return knex.schema.dropTable('incidents')
}
