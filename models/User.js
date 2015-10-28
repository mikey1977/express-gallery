module.exports = function(sequelize, DataTypes) {

  //creating table called User, column is username
  var User = sequelize.define("User", {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Posts)
      }
    }
  });

  return User;
};