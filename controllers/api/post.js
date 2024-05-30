const router = require('express').Router();
const { BlogUsers, Post, Comments } = require('../../models')


router.get('/', async (req,res) => {
    const postsData = await Post.findAll({
        include: [{model: BlogUsers, attributes: [['username', 'author']]}],
        attributes: ['title', 'id', 'owner_id',]
    })
    const posts = postsData.map((post => post.get({plain: true})))
    console.log(posts)
    res.render('allPosts', {
        posts
    })
})

router.get('/:id', async (req,res) => {
    const id = req.params.id
    const postData = await Post.findByPk(id,
        {   
            include: BlogUsers,
            attributes: ['title', 'owner_id', 'content']
        })
        const post = postData.get({plain: true})
        console.log(post.get({plain: true}))
    res.render('post', post)
})

module.exports = router