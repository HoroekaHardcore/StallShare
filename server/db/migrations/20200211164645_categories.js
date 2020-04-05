exports.up = (knex, Promise) => {
  return knex.schema.createTable('categories', table => {
    table.increments('id')
    table.string('name')
  })
}

exports.down = (knex, Promise) => {
  return knex.scheme.dropTable('categories')
}