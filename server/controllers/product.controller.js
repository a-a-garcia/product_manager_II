// controller -> route

//crud functionality 1
const Product = require('../models/product.model')

module.exports.index = (request, response) => {
    Product.find()
        .then(allProducts => response.json(allProducts))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
}

//we're exporting a key:val pair of index : function
//We're then setting the API's response to the requesting client

//crud functionality 2

//Mongoose's "create" method is run using our person model, to add a NEW person to our db's person collection.
// request.body will contain something like {firstName: "Billy", lastName:"Washington"} from the client.
module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

// another way to write this:
// module.exports = {
//     allMyHouses: (req, res) => {
//         House.find({})
//             .then((houses) => {
//                 res.json(houses);
//             })
//             .catch(err => {
//                 res.json({ message: "Error", error: err });
//             })
//     }
// }
