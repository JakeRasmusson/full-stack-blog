const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/connection.js');

const bcrypt = require('bcrypt')
const saltRounds = 10

class BlogUsers extends Model {
    isCorrectPassword(inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    }
}


BlogUsers.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [12]
            }
        }
    },{
        sequelize,
        timestamps: false,
        modelName: 'bloguser',
        freezeTableName: true,
        hooks: {
            beforeCreate(user) {
                user.password = bcrypt.hashSync(user.password, saltRounds)
            },
            beforeUpdate(user) {
                user.password = bcrypt.hashSync(user.password, saltRounds)
            }
        }
    }
)



module.exports = BlogUsers