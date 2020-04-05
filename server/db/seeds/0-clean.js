
exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).del()

  return empty('image_category')()
    .then(empty('categories'))
    .then(empty('images'))
    .then(empty('stalls'))
}