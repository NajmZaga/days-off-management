require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const {database, openConnection} = require('./database');

const callRoutes = require('./routes');

/* ::::::::::::::: Use Middlewares ::::::::::::::: */
app.use(express.json());
app.use(cors());
/* ::::::::::::::: Use Middlewares ::::::::::::::: */

/* ::::::::::::::: Getting routes ::::::::::::::: */
callRoutes(app);
/* ::::::::::::::: Getting routes ::::::::::::::: */

/* ::::::::::::::: Database connection ::::::::::::::: */
openConnection(process.env.DATABASE);
database.on('connected', () => console.log('Connected to the database'));

database.on('error', (err) => {
  console.log('Connexion failed!: ' + err);
});
/* ::::::::::::::: Database connection ::::::::::::::: */

app.listen(process.env.PORT, () => console.log(`App is running on PORT ${ process.env.PORT }`));