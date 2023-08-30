const express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("Api works test endpoint reached");
    res.send('APIWORKS');
});

module.exports = router;