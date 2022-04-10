'use strict';

module.exports = (sequelize, DataTypes) => {
  const AccessToken = sequelize.define('AccessToken', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    token: {
      type: DataTypes.TEXT
    },
    expired_at: {
      type: DataTypes.DATE
    },
    provider: {
      type: DataTypes.STRING
    },
    is_revoked: {
      type: DataTypes.BOOLEAN,
      defaultValue : false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    tableName : 'auth_access_tokens'
  });

  return AccessToken;
};