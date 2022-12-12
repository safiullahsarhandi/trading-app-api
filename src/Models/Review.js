module.exports = (sequelize,DataTypes)=>{
    const Review = sequelize.define('Review',{
        id : {
          type : DataTypes.BIGINT,
          autoIncrement : true,
          primaryKey : true,        
        },
        rating : {
          type : DataTypes.FLOAT,
        },
        review : DataTypes.TEXT,
        status : {
            type : DataTypes.BOOLEAN,
            defaultValue : true,  
        },
        user_id : {
            type : DataTypes.BIGINT,
            allowNull : true,
        },
        reviewed_by : {
            type : DataTypes.BIGINT,
            allowNull : true,
        },    
      },{
          tableName : 'reviews',
          createdAt : 'created_at',
          updatedAt : 'updated_at'
          
      });
    return Review;
};