exports.up = (knex, Promise) => {
  return knex.schema.createTable('images', table => {
    table.increments('id')
    table.integer('stall_id').references('stalls.id')
    table.datetime('posted_at', { precision: 6 })
    table.text('notes')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('images')
}