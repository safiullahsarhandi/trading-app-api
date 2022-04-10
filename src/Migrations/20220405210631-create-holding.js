'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('holdings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.BIGINT
      },
      account_id: {
        type: Sequelize.STRING
      },
      cost_basis: {
        type: Sequelize.BIGINT
      },
      institution_price: {
        type: Sequelize.BIGINT
      },
      institution_price_as_of: {
        type: Sequelize.BIGINT
      },
      institution_value: {
        type: Sequelize.BIGINT
      },
      iso_currency_code: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.BIGINT
      },
      security_id: {
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
    await queryInterface.dropTable('holdings');
  }
};