'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('users', { 
       id: {
         type : Sequelize.BIGINT,
         autoIncrement : true,
         primaryKey : true,
       },
       name : {
        type : Sequelize.STRING,
      },
      username : {
        type : Sequelize.STRING,
      },
      email : {
        type : Sequelize.STRING,
        unique : true,
        allowNull : false,
      },
      password : {
        type : Sequelize.STRING,
        allowNull : false,
      },
      status : {
        type : Sequelize.STRING,
        allowNull : false,
        defaultValue : 'active',
      },
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
     await queryInterface.dropTable('users');
  }
};
