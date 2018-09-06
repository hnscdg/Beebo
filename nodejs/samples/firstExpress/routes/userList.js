var express = require('express');
var router = express.Router();

/* get user list router */
router.get('/', function(req, res, next){
    console.log("user list page");
    res.send("user list page");
});

module.exports = router;