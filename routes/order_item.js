var express = require('express');
var router = express.Router();

const db = require("../model/helper");

function joinToJson(result) {
    let rows = result.data;

    // for each row, if the order_id is the same, store it in the same row
    //each row will contain a products array with one object for each product, containing quantity, name, price

    let orders = [];

    let row0 = rows.shift();

    let order_details = {
        order_id: row0.order_id,
        products: {
            [row0.name]: {
                quantity: row0.quantity, 
                price: row0.price
            }    
        }
    }
        for (let row of rows) {
            if(row.order_id === order_details.order_id){
                let newProduct = {
                    [row.name]: {
                        quantity: row.quantity, 
                        price: row.price
                    } 
                }
                Object.assign(order_details.products, newProduct)

                } else {
                    orders.push(order_details);
                    order_details = {
                        order_id: row.order_id,
                        products: {
                            [row.name]: {
                                quantity: row.quantity, 
                                price: row.price
                            }    
                        }
                    }
                }
            }
            orders.push(order_details);

    return orders
}

router.get("/items", function(req, res) {
    let sql= `SELECT * FROM order_item
    JOIN products 
    ON order_item.product_id = products.id`;
    
    db(sql)
        .then(result => {
            res.send(joinToJson(result));
        })
        .catch(err => res.status(500).send({error: err.message}));
});

router.post("/items", function(req, res){
    let {quantity, product_id, order_id} = req.body;
   
    db(`INSERT INTO order_item (quantity, product_id, order_id)
    VALUES (${quantity}, ${product_id}, ${order_id})`)
    .then(() => { 
        db(`SELECT * FROM order_item
        JOIN products 
        ON order_item.product_id = products.id`)
            .then(result => 
            res.status(201).send(joinToJson(result))
            )})
      .catch(err => res.status(500).send({error: err.message}));
  });

module.exports = router;