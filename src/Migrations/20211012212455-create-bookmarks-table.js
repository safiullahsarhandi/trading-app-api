'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('bookmarks',{
      id : {
        autoIncrement : true,
        primaryKey : true,
        type : Sequelize.BIGINT
      },
      user_id : {
        type : Sequelize.BIGINT,
        allowNull : true,
      },
      bookmarked_id : {
        type : Sequelize.BIGINT,
        allowNull : true,
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
    await queryInterface.dropTable('bookmarks');
  }
};
