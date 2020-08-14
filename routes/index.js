const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
    // res.send('<h1>Hello</h1>');
})
 module.exports = router;