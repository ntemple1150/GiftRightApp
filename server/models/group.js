module.exports = function ( sequelize, DataTypes) {
    return sequelize.define('groupID', {
        groupID: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
}