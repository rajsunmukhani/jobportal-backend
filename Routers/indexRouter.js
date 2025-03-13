const express = require('express');
const { homepage, createUser } = require('../Controllers/indexController');
const router = express();

router.get('/', homepage);
router.get('/signup', createUser);

module.exports = router;