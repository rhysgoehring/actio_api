const express = require('express');
const knex = require('../knex.js');
const bcrypt = require('bcryptjs');
const router = express.Router();



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
            res.cookie('userId',data[0].id);
            res.cookie('zip', data[0].zip);
            res.cookie('loggedIn',true);
            res.json({id:data[0].id})
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
