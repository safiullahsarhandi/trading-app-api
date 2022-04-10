'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Holding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Holding.init({
    user_id: DataTypes.BIGINT,
    account_id: DataTypes.STRING,
    cost_basis: DataTypes.BIGINT,    
    institution_price: DataTypes.BIGINT,
    institution_price_as_of: DataTypes.STRING,
    institution_value: DataTypes.BIGINT,
    iso_currency_code: DataTypes.STRING,
    quantity: DataTypes.BIGINT,
    security_id: DataTypes.STRING,
    unofficial_currency_code: DataTypes.STRING
  }, {
    sequelize,
    tableName : 'holdings',
    modelName: 'Holding',
    underscored: true,
  });
  return Holding;
};