
module.exports = (sequelize,DataTypes)=>{
    const Subscriber = sequelize.define('Subscriber',{
        id : {
          type : DataTypes.BIGINT,
          primaryKey : true,
          autoIncrement : true,
        },
        user_id : {
          type : DataTypes.BIGINT,
          allowNull : true,
        },
        subscriber_id : {
          type : DataTypes.BIGINT,
        }
      },{
        createdAt : 'created_at',
        updatedAt : 'updated_at',
      });
    return Subscriber;
};