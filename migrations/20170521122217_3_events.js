'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.integer('cat_id').references('id').inTable('categories').notNullable().onDelete('CASCADE');
    table.string('location').notNullable();
    table.decimal('lat', 9,6);
    table.decimal('lng', 9,6);
    table.string('description').notNullable();
    table.string('event_date').notNullable();
    table.integer('owner_id').references('id').inTable('users').notNullable().onDelete('CASCADE');
    table.string('skill_level').notNullable();
    table.string('event_pic').notNullable().defaultTo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfnGldejfiWwPjbKTVU-2SErJE-3wMxh9WwIra5POJczBMpyj')
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('events')
};
