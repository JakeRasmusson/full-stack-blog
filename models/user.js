const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/connection.js');


class BlogUsers extends Model {}


BlogUsers.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }
    },{
        sequelize,
        timestamps: false,
        modelName: 'bloguser',
        freezeTableName: true
    }
)



module.exports = BlogUsers