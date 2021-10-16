'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('auth_access_tokens',{
      id : {
        type : Sequelize.BIGINT,
        primaryKey : true,
        autoIncrement : true
      },
      token : {
        type : Sequelize.TEXT,
        allowNull : false,
      },
      provider : {
        type : Sequelize.STRING,
        allowNull : false,
      },
      expired_at : {
        type : Sequelize.DATE,
      },
      is_revoked : {
        type : Sequelize.BOOLEAN,
        defaultValue : false,
      },
      user_id : {
        type : Sequelize.BIGINT,
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
    await queryInterface.dropTable('auth_access_tokens');
  }
};
