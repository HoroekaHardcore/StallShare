
exports.seed = function(knex) {
  return knex('images').insert([
    {
      id: 1, 
      stall_id: 1, 
      posted_at: '2020-01-30T16:49:19.278Z', 
      notes: 'Left some canned good. Took a cauliflower.', 
      url: '/photos/1.jpg'
    },
    {
      id: 2, 
      stall_id: 2, 
      posted_at: '2020-02-30T18:30:19.278Z', 
      notes: 'Added homegrown tomatoes. I took a box of eggs.', 
      url: '/photos/2.jpg'
    },
    {
      id: 3, 
      stall_id: 3, 
      posted_at: '2020-03-30T11:00:19.278Z', 
      notes: 'I took a can of beans and a bundle of kale.', 
      url: '/photos/3.jpg'
    }
  ])
}
