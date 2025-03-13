const express = require('express');
const { homepage, createUser, login, logout } = require('../Controllers/indexController');
const router = express();

router.get('/', homepage);
router.post('/signup', createUser);
router.post('/signin', login);
router.post('/signin', logout);

module.exports = router;