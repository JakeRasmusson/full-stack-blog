const router = require('express').Router()
const { BlogUsers, Post, Comments } = require('../../models')


router.post('/', async (req,res) => {
    try {
        const { title, content, owner_id } = req.body
        console.log(title, content, owner_id)
        const post = await Post.create({id: 6 ,title, content, owner_id})
        
        res.status(200).send('Post created Succesfully')
    } catch (err) {
        console.log(err)
        res.status(400).send('Internal Server Error')
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
        res.status(400).send('Internal Server Error')
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
        res.status(200).send('Post delete successful')
    } catch (err) {
        console.log(err)
        res.status(400).send('Internal Server Error')
    }
})

module.exports = router