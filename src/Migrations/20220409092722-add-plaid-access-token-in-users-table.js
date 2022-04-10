'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    Promise.all([
      queryInterface.addColumn('users','plaid_access_token',{
        type : Sequelize.STRING,
        allowNull : true,
        after : 'status'
      }),
      queryInterface.addColumn('users','plaid_item_id',{
        type : Sequelize.STRING,
        allowNull : true,
        after : 'plaid_access_token',
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    
    Promise.all([
      queryInterface.removeColumn('users','plaid_access_token'),
      queryInterface.removeColumn('users','plaid_access_token'),
    ]);
  }
};
