'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('password_resets',{
      id : {
        type : Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement : true,
      },
      email : {
        type : Sequelize.STRING,
        allowNull : false,        
      },
      code : Sequelize.STRING,
      created_at : {
        type : Sequelize.DATE,
      },
      updated_at : {
        type : Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('password_resets');
  }
};
