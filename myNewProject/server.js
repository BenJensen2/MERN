const express = require('express');
const cors = require('cors')  // Ability to make Cross-origin requests
const app = express();
require('./server/config/mongoose.config');
app.use(cors())
app.use(express.urlencoded({ extended: true}));
const port = 8000;

require('./server/routes/person.routes')(app);    
app.listen(port, () => console.log(`Listening on port: ${port}`) );