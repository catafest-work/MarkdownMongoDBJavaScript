const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('In articles') // send the output to the module exported area ...
});

module.exports = router;