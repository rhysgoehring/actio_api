'use strict';

const express = require('express');         /* eslint-disable new-cap */
const router = express.Router();
const knex = require('../knex');

/* CREATE */
router.post('/', (req, res, next) => {
  console.log('here');
  console.log('request:', req.body)
  const newEvent =
    {
      name: req.body.name,
      cat_id: Number.parseInt(req.body.cat_id),
      location: req.body.location,
      lat: req.body.lat,
      lng: req.body.lng,
      description: req.body.description,
      event_date: req.body.event_date,
      owner_id: req.body.owner_id,
      skill_level: req.body.skill_level,
      event_pic: req.body.event_pic
  }
  // newEvent.cat_id = Number.parseInt(newEvent.cat_id);
  return knex('events')
  .returning('*')
  .insert(newEvent)
  .then(ev => {
    return knex('categories')
      .where('id', ev[0].cat_id)
      .returning('*')
      .then((cat) =>{
        ev[0]['title'] = cat[0].title;
        ev[0]['icon'] = cat[0].icon;
        ev[0]['c_id'] = cat[0].id;
        return ev[0];
      })
      .then((data) => {
        console.log(data);
        return knex('events_users').insert({'event_id':data.id,'user_id':data.owner_id})
        .then((resp) => data)
      })
      .then((data) => res.json(data));
  })
  .catch((err)=> {
    console.log(err)
    next(err);
    });
});
// Join Event
router.post('/:id',(req,res,next) =>{
  const userId = req.body.userId;
  const id = req.params.id;
  console.log('adding', userId, "to", id);
  knex('events_users')
    .insert({event_id:id,user_id:userId})
    .then((data)=> res.json(data))
    .catch((err)=> next(err));
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

// Gets all users attending event
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
  knex.raw('select "events".*, "categories"."id" as "c_id", "categories".title as "title", "categories".icon as "icon" from "events" join "categories" on "events"."cat_id" = "categories"."id"')
    .then((events) => res.json(events.rows))
    .catch((err) => next(err));
  });

module.exports = router;
