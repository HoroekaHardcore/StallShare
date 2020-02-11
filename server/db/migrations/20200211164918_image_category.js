exports.up = (knex, Promise) => {
  return knex.schema.createTable('image_category', table => {
    table.integer('image_id').references('images.id')
    table.integer('category_id').references('categories.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.scheme.dropTable('image_category')
}
