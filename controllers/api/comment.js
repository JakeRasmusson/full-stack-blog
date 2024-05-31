const router = require('express').Router()
const { BlogUsers, Post, Comments } = require('../../models')


router.post('/', async (req,res) => {
    try {
        console.log(title, content, owner_id)
        const comment = await Comments.create(req.body)
        
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