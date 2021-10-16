'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('subscribers',{
      id : {
        type : Sequelize.BIGINT,
        primaryKey : true,
        autoIncrement : true,
      },
      user_id : {
        type : Sequelize.BIGINT,
        allowNull : true,
      },
      subscriber_id : {
        type : Sequelize.BIGINT,
      },
      created_at : Sequelize.DATE,
      updated_at : Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('subscribers');
  }
};
