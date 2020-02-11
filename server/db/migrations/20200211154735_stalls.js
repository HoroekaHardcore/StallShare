exports.up = (knex, Promise) => {
  return knex.schema.createTable('stalls', table => {
    table.increments('id')
    table.string('name')
    table.text('address')
    table.integer('latitude')
    table.integer('longitude')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('stalls')
}