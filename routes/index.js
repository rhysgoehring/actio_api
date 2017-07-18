
'use strict';

// const knex = require('../knex.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send("In index")
});


module.exports = router;
