require('dotenv').config();

const User = require('./models/user');
const { database, openConnection } = require('./database');

const { hashPassword } = require('./utils/password-utils');

/* ::::::::::::::: Database connection ::::::::::::::: */
openConnection(process.env.DATABASE);
/* ::::::::::::::: Database connection ::::::::::::::: */

const query = User.findOne({ 'role': 'SUPER ADMIN' });
query.select('role');

query.exec((err, res) => {
  if (err) handleError(err);
  else {
    if (res) {
      console.log('Super admin is already exist!');
      return process.exit();
    } else {
      hashPassword('123456').then((hashedPassword) => {
        const user = new User({
          firstName: "admin",
          lastName: "admin",
          email: "admin@symdrik.com",
          password: hashedPassword,
          startDate: Date(),
          endDate: '',
          role: 'SUPER ADMIN',
          avatar: '/avatars/default.png',
        });
        user.save((err, savedUser) => {
          if (err) return console.error(err);
          console.log('Super Admin has been created!');
        });
      }).catch((err) => console.log(err));
    }
  }
});
