const express = require('express');
const knex = require('../knex.js');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');



router.post('/', (req, res, next) =>{
  const testUser = req.body
  console.log('got a request')
  console.log(req.body);

  knex('users')
    .where('email', testUser.email)
    .select('*')
    .then((data)=>{
      console.log(data);
      if(!data.length){
        res.send(false);
      }
      else{
        bcrypt.compare(testUser.password,data[0].hashed_password)
        .then((valid) =>{
          if(valid){
            let token = jwt.sign(data[0], process.env.token)
            res.send({token: token, currentUser: data[0]});
          }
          else{
            res.send(false);
          }
        })
        .catch((err)=> console.log(err))
      }
    })
})

module.exports = router
