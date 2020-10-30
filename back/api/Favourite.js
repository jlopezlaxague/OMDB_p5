const S = require('sequelize');
const db = require('./db');
const User = require ('./User')

class Favourite extends S.Model {}

Favourite.init({
  title: {
    type: S.STRING,
    allowNull: false,
  },
  imdbid: {
    type: S.STRING,
    allowNull: false
  },  
}, { sequelize : db, modelName: 'favourite' });

Favourite.belongsTo(User)

module.exports = Favourite;