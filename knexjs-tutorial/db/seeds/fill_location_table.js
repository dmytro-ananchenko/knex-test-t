
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('location').del()
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([
        {city: 'Kyiv'},
        {city: 'Tampa'},
        {city: 'Barcelona'},
        {city: 'Los Angeles'},
        {city: 'Denver'}
      ]);
    });
};
