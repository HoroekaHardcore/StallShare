
exports.seed = function(knex) {
  return knex('categories').insert([
    {id: 1, name: 'Donate fresh products (perishables'},
    {id: 2, name: 'Donate non-perishable items'},
    {id: 3, name: 'Take fresh products (perishables)'},
    {id: 4, name: 'Take non-perishable items'}
  ])
}
