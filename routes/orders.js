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
        id: row0.order_id,
        customer_name: row0.customer_name,
        date: row0.date,
        email: row0.email,
        address: row0.address,
        products: [
                { name: row0.name,
                quantity: row0.quantity, 
                price: row0.price
                } ] 
        
    }

        for (let row of rows) {
            if(row.order_id === order_details.id){
                order_details.products.push(
                    { name: row.name,
                        quantity: row.quantity, 
                        price: row.price
                    } )
                
                //Object.assign(order_details.products, newProduct)

                } else {
                    orders.push(order_details);
                    order_details = {
                        id: row.order_id,
                        customer_name: row.customer_name,
                        date: row.date,
                        email: row.email,
                        address: row.address,
                        products: [
                              { name: row.name,
                                quantity: row.quantity, 
                                price: row.price
                            }    
                        ]
                    }

                }

            }
            orders.push(order_details);

    return orders

}



router.get("/orders", function(req, res) {
    let sql=`
        SELECT orders.*, order_item.order_id, order_item.quantity, products.name, products.price 
        FROM ORDERS
        JOIN order_item
        ON orders.id = order_item.order_id
        JOIN products
        ON products.id = order_item.product_id
    `;
    db(sql)
        .then(result => {
            res.send(joinToJson(result));
        })
        .catch(err => res.status(500).send({error: err.message}));
});

router.post("/orders", function(req, res){
    let {customer_name, email, address, productList} = req.body;
   
    db(`INSERT INTO orders (email, address, customer_name)
    VALUES ('${email}', '${address}', '${customer_name}');
    SELECT LAST_INSERT_ID();`)
    .then((result) => {
        let orderId = result.data[0].insertId;
         for(p of productList){
            let product = p;
            console.log("********", p)
            db(`INSERT INTO order_item (quantity, product_id, order_id)
            VALUES (${product.quantity}, ${product.product_id}, ${orderId})`)
            }
         })
         let sql= (`SELECT orders.*, order_item.order_id, order_item.quantity, products.name, products.price 
         FROM ORDERS
         JOIN order_item
         ON orders.id = order_item.order_id
         JOIN products
         ON products.id = order_item.product_id`)
            
         db(sql)
         .then(result => {
            res.send(joinToJson(result));
        })
        .catch(err => res.status(500).send({error: err.message}));            
  });


module.exports = router;