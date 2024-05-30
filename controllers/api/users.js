const router = require('express').Router()
const { BlogUsers, Post, Comments } = require('../../models')


router.post('/', async (req,res) => {
    try {
        const user = await BlogUsers.create(req.body)
        
        res.status(200).send('User created Succesfully')
    } catch (err) {
        console.log(err)
        res.status(400).send('Internal Server Error')
    }
})

router.put('/:id', async (req,res) => {
    try {
        const { id } = req.params
        const user = await BlogUsers.update(req.body, {
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
        const deleteUser = await BlogUsers.destroy({
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