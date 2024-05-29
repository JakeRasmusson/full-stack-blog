//Import models
const BlogUsers = require('./user')
const Post = require('./post')
const Comments = require('./comment')


//Relationships
BlogUsers.hasMany(Post)
Post.belongsTo(BlogUsers)


//
Post.hasMany(Comments)
Comments.belongsTo(Post)



module.exports = {
    Post,
    BlogUsers
}