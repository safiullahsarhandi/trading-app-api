'use strict';

module.exports = (sequelize,DataTypes)=> {
    const PasswordReset = sequelize.define('PasswordReset',{
        id : {
            primaryKey : true,
            autoIncrement : true,
            type : DataTypes.BIGINT
          },
          email : {
            type : DataTypes.STRING,
            allowNull : false,        
          },
          code : DataTypes.STRING,
          updated_at: DataTypes.DATE,
          created_at: DataTypes.DATE
    },{
        updatedAt: 'updated_at',
        createdAt: 'created_at',
        tableName : 'password_resets'
    });
    return PasswordReset;
}
