const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/connection.js');
const Post = require('./post')
const BlogUser = require('./blogUser')

class Comments extends Model {}


Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_id : {
            type: DataTypes.INTEGER,
            references: {
                model: Post,
                key: 'id'
            }
        },
        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: BlogUser,
                key: 'id'
            }
        }
    },{
        sequelize,
        timestamps: false,
        modelName: 'comments'
    }
)


module.exports = Comments