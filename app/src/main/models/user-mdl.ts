function model(sequelize, dataTypes) {

    let User = sequelize.define('User', {
        username: dataTypes.STRING
    }, {
        classMethods: {
        associate: function(models) {
            // associations can be defined here
            User.hasMany(models.Task);
        }
        }
    });
    return User;
}

export = model;
