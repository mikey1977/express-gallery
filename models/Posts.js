module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define( 'Posts', {
    author : DataTypes.STRING,
    link : DataTypes.STRING,
    description : DataTypes.STRING
  }, {
    classMethods : {
      associate : function(models) {
        Posts.belongsTo(models.User);
      }
    }
  });

  return Posts;
};