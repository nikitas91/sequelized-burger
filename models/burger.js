module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("Burger", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            default: 0
        }
    });

    return Burger;
};