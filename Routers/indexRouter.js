const express = require('express');
const { homepage } = require('../Controllers/indexController');
const router = express();

router.get('/', homepage);

module.exports = router;