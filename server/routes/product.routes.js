const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api', ProductController.index)
    app.post('/api/product', ProductController.createProduct)
}

//import code from controller
//export an anonymous function that requires an "app" as its parameter (server.js)
//function will be the HTTP verb, name of route, and what to execute at that route.


// another way to write this 2
// const HouseController = require('../controllers/house.controller');

// module.exports = (app) => {
//     app.get('/api/getAll', HouseController.allMyHouses);
// }