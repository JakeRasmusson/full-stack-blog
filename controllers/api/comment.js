const router = require('express').Router()
const { BlogUsers, Post, Comments } = require('../../models')


router.post('/', async (req,res) => {
    try {
        const {content, post_id} = req.body
        const owner_id = req.session.userId
        console.log(content, post_id, owner_id)
        const comment = await Comments.create({content, post_id, owner_id})
        
        res.status(200).send('Comment created Succesfully')
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
})

router.put('/:id', async (req,res) => {
    try {
        const { id } = req.params
        const comment = await Comments.update(req.body, {
            where: {
                id
            }
        })
        res.status(200).send('Comment Update Succesful')
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const { id } = req.params
        const deleteComment = await Comments.destroy({
            where: {
                id
            }
        })
        res.status(200).send('Comment delete successful')
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router