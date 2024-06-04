const router = require('express').Router()
const { BlogUsers, Post, Comments } = require('../../models')


router.post('/', async (req,res) => {
    if (req.session.loggedIn) {
        try {
            const { title, content } = req.body
            const owner_id = req.session.userId
            console.log(title, content, owner_id)
            const post = await Post.create({title, content, owner_id})
            
            res.status(200).send('Post created Succesfully')
        } catch (err) {
            console.log(err)
            res.status(500).send('Internal Server Error')
        }
        
    } else {
        res.status(401).send('Not authorized')
    }
})

router.put('/:id', async (req,res) => {
    try {
        const { id } = req.params
        const post = await Post.update(req.body, {
            where: {
                id
            }
        })
        res.status(200).send('Post Update Succesful')
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const { id } = req.params
        const deletePost = await Post.destroy({
            where: {
                id
            }
        })
        console.log(deletePost)
        res.status(200).send('Post delete successful')
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router