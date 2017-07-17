'use strict';

const index = require('./index');
const users = require('./users');
const categories = require('./categories');
const messages = require('./messages');
const events = require('./events')
const express = require('express');
const router = express.Router();    /* eslint-enable new-cap */
const signin = require('./signin');
const fbAuth = require('./fbAuth');


router.use('/', index);
router.use('/users', users);
router.use('/categories', categories);
router.use('/messages', messages);
router.use('/events', events);
router.use('/signin', signin);
router.use('/fbauth', fbAuth);


module.exports = router;
