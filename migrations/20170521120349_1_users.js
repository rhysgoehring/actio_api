'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users' , (table) => {
    table.increments();
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.text('email').unique().notNullable();
    table.string('about', 255);
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.integer('zip').notNullable();
    table.string('profile_pic').defaultTo('https://www.universetoday.com/wp-content/uploads/2009/12/galileo-e1435358932718.jpg')
  });

};
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
