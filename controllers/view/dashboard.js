const router = require('express').Router();
const { BlogUsers, Post, Comments } = require('../../models')




router.get('/', async (req,res) => {
    if (!req.session.loggedIn) {
        res.redirect('/')
        return
    } 
    try {
        const id = req.session.userId
        const postsData = await Post.findAll({
            where: {
                owner_id: id,
            }
        })
        const posts = postsData.map((post => post.get({plain: true})))
        res.render('dashboard', {posts, loggedIn: req.session.loggedIn})
        
    } catch (err) {
        console.log(err)
        res.status(400).send('Internal Error')
    }
})





module.exports = router