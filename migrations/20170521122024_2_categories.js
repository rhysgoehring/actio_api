'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('categories' , (table) => {
    table.increments();
    table.string('title', 255).notNullable();
    table.string('icon', 255).notNullable();
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable('categories')
};
