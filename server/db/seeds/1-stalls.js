
exports.seed = function(knex) {
  return knex('stalls')
    .then(function () {
      return knex('stalls').insert([
        {
          id: 1, 
          name: 'Devonport', 
          address: '32 Clarence Street, Devonport, Auckland 0624', 
          latitude: -36.829429, 
          longitude: 174.795785
        },
        {
          id: 2, 
          name: 'Waiheke', 
          address: '1 Mako Street, Oneroa, Auckland 1081', 
          latitude: -36.784032, 
          longitude: 175.007488
        },
        {
          id: 3, 
          name: 'Ellerslie', 
          address: '3 Tecoma Street, Ellerslie, Auckland 1051', 
          latitude: -36.894791, 
          longitude: 174.808072
        },
        {
          id: 4, 
          name: 'Warkworth', 
          address: '13 Albert Road, Warkworth 0910', 
          latitude: -36.397530, 
          longitude: 174.653228
        },        
        {
          id: 5, 
          name: 'Whangamata', 
          address: '101 Casement Road, Whangamata 3620', 
          latitude: -37.204447, 
          longitude: 175.872630
        }
      ])
    })
};
