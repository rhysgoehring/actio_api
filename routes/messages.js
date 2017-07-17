'use strict';

const express = require('express');
const knex = require('../knex.js');
const router = express.Router();


//create messages

router.post('/', (req, res, next) => {
  const newMessage = req.body;
  return knex('messages')
  .returning('*')
  .insert(newMessage)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
})


//read messages

router.get('/', function(req, res, next) {
    knex('messages')
        .select('id', 'title', 'body')
        .then(results => {
            res.send(results)
        })
});

router.get('/:id', (req, res, next) => {
    let id = +req.params.id;
    knex('messages')
        .select('id', 'title', 'body')
        .where('id', id)
        .then(results => {
            res.render('one-message', {
                message: results[0]
            })
        })
});


//delete messages

router.delete('/:id', (req, res, next) => {
  let id = +req.params.id
      knex('messages')
        .where('id', id)
        .returning('*')
        .del()
        .then(data => {
          let id = data[0].id
          let name = data[0].title
          let message = data[0].body
          res.json({
            id,
            title,
            body
          })
        })
})

module.exports = router;
