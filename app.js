const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

let dev_db_url = "mongodb://everymundo:imbernal123@ds117711.mlab.com:17711/node_everymundo";

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const product = require('./routes/product.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/products' , product );


app.listen('9203'  , () => {
  console.log("Running...")
});
