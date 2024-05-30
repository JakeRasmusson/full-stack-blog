const router = require('express').Router();
const { BlogUsers, Post, Comments } = require('../../models')


router.get('/', async (req,res) => {
    try {
        const postsData = await Post.findAll({
            include: [{model: BlogUsers, attributes: [['username', 'author']]}],
            attributes: ['title', 'id', 'owner_id', 'content']
        })
        const posts = postsData.map((post => post.get({plain: true})))
        console.log(posts)
        res.render('allPosts', {
            posts
        })
        
    } catch (err) {
        console.log(err)
        res.status(400).send('Internal Error')
    }
})

router.get('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const postData = await Post.findByPk(id,
            {   
                include: [BlogUsers, Comments],
                attributes: ['title', 'owner_id', 'content']
            })
            const post = postData.get({plain: true})
            console.log(post)
        res.render('post', post)
        
    } catch (err) {
        console.log(err)
        res.status(400).send('Internal Error')
    }
})

module.exports = router