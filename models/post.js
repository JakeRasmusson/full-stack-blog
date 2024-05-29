const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/connection.js');
const User = require('./user.js')

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }
    }
)
