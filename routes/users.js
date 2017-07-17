'use strict';

const knex = require('../knex.js');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', (req, res, next) => {
  return knex('users').select('first_name', 'last_name', 'email', 'zip', 'profile_pic').then((users) => res.json(users)).catch((err) => next(err));
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  return knex('users').select('first_name', 'last_name', 'email', 'zip', 'profile_pic').where('id', id).first().then((user) => res.json(user)).catch((err) => next(err));
});

router.get('/:id/events', (req, res, next) => {
  const id = req.params.id;
  return knex('events_users').select('*').where('user_id', id).innerJoin('events', 'events_users.event_id', 'events.id').then((events) => {
    knex('messages').then((messages) => {
      events.sort(function(a, b) {
        return a.id - b.id
      })
      for (let i = 0; i < messages.length; i++) {
        let index = messages[i].event_id;
        for(let j = 0; j < events.length; j++){
          if(events[j].event_id == index){
            if (events[j].messages == undefined) {
              events[j].messages = [];
            }
            events[j].messages.push({title: messages[i].title, body: messages[i].body})
          }
        }
      }
      res.json(events);
    })
  }).catch((err) => next(err));
});

router.post('/', (req, res, next) => {
  const newUser = req.body;

  let saltRounds = 8;
  bcrypt.hash(newUser.password, saltRounds).then((hash) => {
    newUser.hashed_password = hash;
    delete newUser.password
    knex('users').returning('*').insert(newUser).then((data) => {
      console.log(data)
      delete data.hashed_password;
      res.cookie('userId',data[0].id);
      res.cookie('zip', data[0].zip);
      res.cookie('loggedIn',true);
      res.json(data);
    })
  })

  // return knex('users')
  //   .returning(['first_name', 'last_name', 'email', 'zip', 'profile_pic'])
  //   .insert(newUser)
  //   .then((data) => {
  //     console.log(data)
  //     res.json(data);
  //   })
  //   .catch((err) => next(err));
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const editUser = req.body;
  return knex('users').returning(['first_name', 'last_name', 'email', 'zip', 'profile_pic']).where('id', id).update(changes).then(() => res.sendStatus(200)).catch((err) => next(err));
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  return knex('users').where('id', id).del().then(() => res.sendStatus(200)).catch((err) => next(err));
});

module.exports = router;
