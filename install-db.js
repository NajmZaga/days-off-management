require('dotenv').config();

const {database, openConnection} = require('./database');

/* ::::::::::::::: Database connection ::::::::::::::: */
openConnection(process.env.DATABASE);
database.on('connected', () => console.log('Connected to the database'));

database.on('error', (err) => {
  console.log('Connexion failed!: ' + err);
});
/* ::::::::::::::: Database connection ::::::::::::::: */

console.log("installing db");