
exports.up = function(knex) {
    return knex.schema.createTable('location', (table) => {
        table.increments('id');
        table.string('city').notNullable().unique();
        table.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('location');
};
