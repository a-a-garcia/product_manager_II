//step 1 to starting a full stack crud app

const mongoose = require('mongoose');

//this will create a database named person if one doesn't exist already
mongoose.connect("mongodb://127.0.0.1:27017/product_manager", {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err))