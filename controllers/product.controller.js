const Product = require('../models/product');

exports.test =  (req , res) => {

  res.send("ASASAS");

}


exports.product_create = (req , res) =>  {

    let product = new Product({
          name: req.body.name,
          pro n 
    });

};
