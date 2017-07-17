'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('messages', (table) => {
    table.increments();
    table.string('title', 255).notNullable();
    table.string('body', 255).notNullable();
    table.integer('event_id').references('id').inTable('events');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('messages')
};
