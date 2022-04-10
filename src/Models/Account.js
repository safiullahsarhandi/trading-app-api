'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Account.init({
    user_id: DataTypes.BIGINT,
    account_id: DataTypes.STRING,
    balances: {
      type :  DataTypes.TEXT,
      get: function () {
          return JSON.parse(this.getDataValue('balances'));
      },
      set: function (value) {
          this.setDataValue('balances', JSON.stringify(value));
      },
    },
    mask: DataTypes.STRING,
    name: DataTypes.STRING,
    official_name: DataTypes.STRING,
    subtype: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    tableName : 'accounts',
    modelName: 'Account',
    underscored: true,
  });
  return Account;
};