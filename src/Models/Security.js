'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Security extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Security.init({
    user_id: DataTypes.BIGINT,
    security_id: DataTypes.STRING,
    name: DataTypes.STRING,
    iso_currency_code: DataTypes.STRING,
    isin: DataTypes.STRING,
    is_cash_equivalent: DataTypes.BOOLEAN,
    proxy_security_id: DataTypes.STRING,
    institution_security_id: DataTypes.STRING,
    institution_id: DataTypes.STRING,
    cusip: DataTypes.STRING,
    close_price: DataTypes.INTEGER,
    close_price_as_of: DataTypes.STRING,
    sedol: DataTypes.STRING,
    ticker_symbol: DataTypes.STRING,
    type: DataTypes.STRING,
    unofficial_currency_code: DataTypes.STRING
  }, {
    sequelize,
    tableName : 'securities',
    modelName: 'Security',
    createdAt : 'created_at',
    updatedAt : 'updated_at'
  });
  return Security;
};