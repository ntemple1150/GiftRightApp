module.exports = function ( sequelize, DataTypes) {
    return sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        groupID: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        }
    });
}