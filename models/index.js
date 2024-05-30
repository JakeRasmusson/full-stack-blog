//Import models
const BlogUsers = require('./blogUser')
const Post = require('./post')
const Comments = require('./comment')


//Relationships
BlogUsers.hasMany(Post, {
    foreignKey: 'id'
})
Post.belongsTo(BlogUsers, {
    foreignKey: 'owner_id'
})


//
Post.hasMany(Comments, {
    foreignKey: 'id'
})
Comments.belongsTo(Post, {
    foreignKey: 'post_id'
})


BlogUsers.hasMany(Comments, {
    foreignKey: 'owner_id'
})
Comments.belongsTo(BlogUsers, {
    foreignKey: 'owner_id'
})


module.exports = {
    Post,
    BlogUsers,
    Comments
}