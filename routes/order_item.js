var express = require('express');
var router = express.Router();

const db = require("../model/helper");

router.get("/items", function(req, res) {
    let sql= `SELECT * FROM order_item`;
    
    db(sql)
        .then(result => {
            res.send(result.data);
        })
        .catch(err => res.status(500).send({error: err.message}));
});

module.exports = router;