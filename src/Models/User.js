'use strict';
const sequelizePaginate = require('sequelize-paginate');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull : false,
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    is_trader: {
      type: DataTypes.BOOLEAN
    },
    subscription_price : {
      type : DataTypes.BIGINT,
      defaultValue : 0,
    }
  },{
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
    scopes: {
      withPassword: {
        attributes: { include: ['password'] },
      }
    },
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    tableName : 'users',
  });
  let Review = sequelize.model('Review');
  let Subscriber = sequelize.model('Subscriber');
  User.belongsToMany(User,{through : 'bookmarks',foreignKey : 'user_id', otherKey : 'bookmarked_id',as : 'Bookmarks' });
  User.hasMany(Review,{foreignKey : 'user_id',as : 'reviews', otherKey : 'reviewed_by' });
  User.belongsToMany(User,{through : 'subscribers',foreignKey : 'user_id',as : 'Subscribers', otherKey : 'subscriber_id' });
  
  sequelizePaginate.paginate(User);
  
  return User;
};
