//

const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors') //needed as we are running our server and our client on two different servers

//app.use has to do with middleware, which can configure how express should process incoming requests.
app.use(cors())
app.use(express.json()) // allows JSON objects to be POSTed
app.use(express.urlencoded({extended: true})) // allows JSON objects with strings and arrays


require('./config/mongoose.config')
//import the routes export
require('./routes/product.routes')(app)

// These two lines are the long-hand notation of the code above. They better show what's going on.

// const personRoutes = require("./routes/person.routes");  <-- assign the exported function to a const
// personRoutes(app);     <-- invoke the function and pass in the express "app" server
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );