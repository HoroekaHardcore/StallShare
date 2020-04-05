
exports.seed = function(knex) {
  return knex('image_category').insert([
    {image_id: 1, category_id: 2},
    {image_id: 1, category_id: 3},
    {image_id: 2, category_id: 1},
    {image_id: 2, category_id: 3},
    {image_id: 3, category_id: 3},
    {image_id: 3, category_id: 4}
  ])
}
