'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('reviews',{
      id : {
        type : Sequelize.BIGINT,
        autoIncrement : true,
        primaryKey : true,        
      },
      user_id : {
        type : Sequelize.BIGINT,
        allowNull : true,
      },
      reviewed_by : {
        type : Sequelize.BIGINT,
        allowNull : true,
      },
      review : Sequelize.TEXT,
      rating : {
        type : Sequelize.FLOAT,
      },
      status : {
          type : Sequelize.BOOLEAN,
          defaultValue : true,  
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
    await queryInterface.dropTable('reviews');
  }
};
