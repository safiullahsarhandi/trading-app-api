'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('securities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      security_id: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      iso_currency_code: {
        type: Sequelize.STRING
      },
      isin: {
        type: Sequelize.STRING
      },
      is_cash_equivalent: {
        type: Sequelize.BOOLEAN
      },
      proxy_security_id: {
        type: Sequelize.STRING
      },
      institution_security_id: {
        type: Sequelize.STRING
      },
      institution_id: {
        type: Sequelize.STRING
      },
      cusip: {
        type: Sequelize.STRING
      },
      close_price: {
        type: Sequelize.INTEGER
      },
      close_price_as_of: {
        type: Sequelize.STRING
      },
      sedol: {
        type: Sequelize.STRING
      },
      ticker_symbol: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      unofficial_currency_code: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('securities');
  }
};