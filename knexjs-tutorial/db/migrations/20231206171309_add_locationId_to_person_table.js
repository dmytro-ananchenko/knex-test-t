
exports.up = function(knex) {
    return knex.schema.alterTable('person', (table) => {
        table.integer('location_id').notNullable();
        table.foreign('location_id').references('location.id');
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('person', (table) => {
        table.dropForeign('location_id')
        table.dropColumn('location_id')
      })
};
