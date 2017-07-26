'use strict';

const knex = require('../knex.js');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.get('/', (req, res, next) => {
  return knex('users').select('first_name', 'last_name', 'email', 'zip', 'profile_pic').then((users) => res.json(users)).catch((err) => next(err));
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  return knex('users').select('first_name', 'last_name', 'email', 'about', 'zip', 'profile_pic').where('id', id).first().then((user) => res.json(user)).catch((err) => next(err));
});

router.get('/:id/events', (req, res, next) => {
  const id = req.params.id;
  return knex('events_users').select('*').where('user_id', id).join('events', 'events_users.event_id', 'events.id').join('categories', 'events.cat_id', 'categories.id').select("events_users.id as eu_id").select('categories.id as category_id').then((events) => {
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

router.get('/:id/owned', (req,res,next) =>{
  const id = req.params.id;
  return knex('events').select('*').where('owner_id', id).join('categories', 'events.cat_id', 'categories.id').select('categories.id as category_id')
  .then(data => {
    res.json(data);
  })
})

router.post('/', (req, res, next) => {
  const newUser = {
    first_name : req.body.firstName,
    last_name : req.body.lastName,
    email : req.body.email,
    password : req.body.password,
    zip : req.body.zip,
    profile_pic : req.body.profilePicUrl
  }

  console.log('newUser', newUser)
  let saltRounds = 8;
  bcrypt.hash(newUser.password, saltRounds).then((hash) => {
    newUser.hashed_password = hash;
    delete newUser.password
    knex('users').returning('*').insert(newUser).then((data) => {
      console.log(data[0])
      delete data.hashed_password;
      let token = jwt.sign(data[0], process.env.token)
      res.send({token: token, currentUser: data[0]});
    })
  })
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
