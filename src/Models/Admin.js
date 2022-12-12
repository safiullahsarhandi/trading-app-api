'use strict';

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING
    },
    is_sub_admin: {
      type: DataTypes.STRING
    },
    full_name : {
      type : DataTypes.VIRTUAL,
      get() {
      return `${this.first_name} ${this.last_name}`;
    },
    set(value) {
      throw new Error('Do not try to set the `fullName` value!');
    }
    }
  },{
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    tableName : 'admins',
  });

  return Admin;
};
