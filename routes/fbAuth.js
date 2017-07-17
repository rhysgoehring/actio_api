const express = require('express');
const knex = require('../knex.js');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/', (req,res,next) =>{
  const fbUser = req.body;

  knex('users')
    .where('email',fbUser.userInfo.email)
    .select('*')
    .then((data) =>{
      console.log(data);
      if(data.length === 0){
        console.log('no user create one');
        hashPass(req.body.resonse.authResponse.accessToken)
        .then((hash) =>{
          const newUser = makeUser(fbUser,hash)
          knex('users')
          .insert(newUser)
          .returning('*')
          .then((data) =>{

            res.json(data)
          })
        })
      }
      else{
        console.log('found user');
        res.cookie('userId',data[0].id);
        res.cookie('zip', data[0].zip);
        res.cookie('loggedIn',true);
        res.json(data);
      }
    })

  //check if user exsists

  //if so login

  //if not create user



})

function hashPass(pass){
  return bcrypt.hash(pass,8)
}
function makeUser(reqBody,hash){
  const nameArray = reqBody.userInfo.name.split(' ');
  const user = {}
  user.hashed_password = hash;
  user.first_name  = nameArray[0];
  user.last_name = nameArray[1];
  user.zip = 80304;
  user.email = reqBody.userInfo.email;
  user.profile_pic = reqBody.userInfo.picture.data.url
  return user;
}

module.exports = router
