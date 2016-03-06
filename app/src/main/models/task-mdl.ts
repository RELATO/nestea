function model(sequelize, dataTypes) {

    let Task = sequelize.define('Task', {
        title: dataTypes.STRING
    }, {
        classMethods: {
        associate: function(models) {
            // associations can be defined here
            Task.belongsTo(models.User); 
        }
        }
    });
    return Task;
}

export = model;
