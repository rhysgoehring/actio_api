
'use strict';

// const knex = require('../knex.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send("In index")
});
//
// router.get('/:id', (req, res, next) => {
//   const id = req.params.id;
//   return knex('1_users')
//     .select('*')
//     .where('id', id)
//     .first()
//     .then((user) => res.json(user))
//       .catch((err) => next(err));
// });
//
// router.post('/', (req, res, next) => {
//   const newUser = req.body;
//   return knex('1_users')
//     .returning('*')
//     .insert(newUsers);
//     .then(() => res.sendStatus(200))
//     .catch((err) => next(err));
// });
//
// router.put('/:id', (req, res, next) => {
//   const id = req.params.id;
//   const editUser = req.body;
//   return knex('1_users')
//     .returning('*')
//     .where('id', id).update(changes)
//     .then(() => res.sendStatus(200))
//     .catch((err) => next(err));
// });
//
// router.delete('/:id', (req, res, next) => {
//   const id = req.params.id;
//   return knex('1_users')
//   .where('id', id).del()
//   .then(() => res.sendStatus(200))
//   .catch((err) => next(err));
// });

module.exports = router;
