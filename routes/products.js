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
            res.send(result.data[0])};
        })
        .catch(err => res.status(500).send({error: err.message}));
});

router.post("/products", function(req, res){
    let {name, price, stock, image, description} = req.body;
    sql= (`INSERT INTO products (name, price, stock, image, description)
    VALUES ('${name}', ${price}, ${stock}, '${image}', '${description}');`
    );
   
    db(sql)
    .then(() => { 
        db(`SELECT * FROM products`)
            .then(result => 
            res.status(201).send(result.data)
            )})
      .catch(err => res.status(500).send({error: err.message}));
  });


router.delete("/products/:id", function(req, res) {
    let productID = Number(req.params.id);
    db(`SELECT * FROM products WHERE id = ${productID}`)
    .then((result => {
        if(!result.data.length){
        res.status(404).send({error: 'Product not found'});
        } else {
        db(`DELETE FROM products WHERE id = ${productID}`)
        .then(()=>{
            db('SELECT * FROM products')
            .then((result) => res.send(result.data))})
        }
    }))
    .catch(err => res.status(500).send({error: err.message}))
})

module.exports = router;
