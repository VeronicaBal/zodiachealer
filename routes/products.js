var express = require('express');
var router = express.Router();

const db = require("../model/helper");

router.get("/products", function(req, res) {
    db("SELECT * FROM products;")
        .then(result => {
            res.send(result.data);
        })
        .catch(err => res.status(500).send({error: err.message}));
});

router.get("/products/:name", function(req, res) {
    db(`SELECT * FROM products WHERE name = '${req.params.name}';`)
        .then(result => {
            if(!result.data.length) {
                res.status(404).send({error: 'Product not found'})
            } else {
            res.send(result.data)};
        })
        .catch(err => res.status(500).send({error: err.message}));
});

module.exports = router;
