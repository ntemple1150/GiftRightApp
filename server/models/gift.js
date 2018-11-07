module.exports = function ( sequelize, DataTypes) {
    const Gift = sequelize.define('gift', {
        item: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    
    return Gift;
}

