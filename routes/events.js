'use strict';

const express = require('express');         /* eslint-disable new-cap */
const router = express.Router();
const knex = require('../knex');

/* CREATE */
router.post('/', (req, res, next) => {
  const newEvent = req.body;
  newEvent.cat_id = Number.parseInt(newEvent.cat_id);
  return knex('events')
  .returning('*')
  .insert(newEvent)
  .then((data) => res.json(data))
  .catch((err)=> next(err));
});

router.post('/:id',(req,res,next) =>{
  const userId = req.body.userId;
  const id = req.params.id;
  console.log('adding', userId, "to", id);
  knex('events_users')
    .insert({event_id:id,user_id:userId})
    .then((data) => res.json(data))
    .catch((err) => next(err));
})

/* READ */
router.get('/:id', (req, res, next) => {
  console.log('here');
  const id = req.params.id;
  return knex('events')
  .select('*')
  .where('id', id)
  .first()
  .then((event)=> res.json(event))
  .catch((err)=> next(err));
});

/* READ */
router.get('/:id/messages', (req, res, next) => {
  const id = req.params.id;
  return knex('messages')
  .select('*')
  .where('event_id', id)
  .then((event)=> res.json(event))
  .catch((err)=> next(err));
});

router.get('/:id/users', (req, res, next) => {
  const id = req.params.id;
  return knex('events_users')
  .select('*')
  .where('event_id', id)
  .innerJoin('users','events_users.user_id','users.id')
  .then((event)=> res.json(event))
  .catch((err)=> next(err));
});

/* UPDATE */
router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;
return knex('events')
.where('id', id)
.update(changes)
.returning('id')
.then(()=> res.json(changes))
.catch((err)=> next (err));

});

/* DELETE */
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  knex('events_users')
    .where('event_id',id)
    .del()
    .then(()=>{
      knex('messages')
      .where('event_id',id)
      .del()
      .then(()=>{
        knex('events')
        .where('id', id).del()
        .then((data)=> res.json(data))
      })
    }).catch((err)=> next(err))
return
});

/* LIST */
router.get('/', (req, res, next) => {

  return knex('events')
  .returning('*')
  .orderBy('created_at', 'asc')
  .then((events) => res.json(events))
  .catch((err) => next(err));
});

module.exports = router;
