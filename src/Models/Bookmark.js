'use strict';

module.exports = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('Bookmark',{
        id : {
            primaryKey : true,
            type : DataTypes.BIGINT
        },
        user_id : {
            type : DataTypes.BIGINT
        },
        bookmarked_id : {
            type : DataTypes.BIGINT
        },
    },{
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        tableName : 'bookmarks'
    });
    return Bookmark;
}