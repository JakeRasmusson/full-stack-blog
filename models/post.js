const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/connection.js');
const bloguser = require('./user')

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'bloguser',
                key: 'id'
            }
        }

        },{
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'post'
    }
)


module.exports = Post