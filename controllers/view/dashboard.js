const router = require('express').Router();
const { BlogUsers, Post, Comments } = require('../../models')




router.get('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const postsData = await Post.findAll({
            where: {
                owner_id: id,
            }
        })
        const posts = postsData.map((post => post.get({plain: true})))
        res.render('dashboard', {posts})
        
    } catch (err) {
        console.log(err)
        res.status(400).send('Internal Error')
    }
})





module.exports = router