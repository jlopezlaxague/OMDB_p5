const S = require('sequelize');
const db = require('./db');
const bcrypt = require('bcrypt')

class User extends S.Model {}

User.init({
  email: {
    type: S.STRING,
    allowNull: false,
    validate:{
      notEmpty:true
    }
  },
  password: {
    type: S.STRING,
    allowNull: false
  },
  salt: {
      type: S.STRING
  },
  
}, { sequelize : db, modelName: 'user' });

User.prototype.hash = function(userPassword, userSalt){
    return bcrypt.hash(userPassword, userSalt)
}

User.beforeCreate((user) => {
    return bcrypt
      .genSalt(16)
      .then((salt) => {
        user.salt = salt;
        return user.hash(user.password, user.salt);
      })
      .then((hash) => {
        user.password = hash;
      });
  });

module.exports = User;