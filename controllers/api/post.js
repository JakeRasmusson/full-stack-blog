const router = require('express').Router();

const post = [{
    title: 'T1',
    author: 'jake',
    id: 0,
    content: ';lasdfjka;sldfkjas;ldfkja;sldfkj;alskjdfasdf'
    },
    {
    title: 't2',
    author: 'jim',
    id: 1,
    content: ';lasdfjka;sldfkjas;ldfkja;sldfkj;alskjdfasdf'
    }]

router.get('/', async (req,res) => {
    res.render('allPosts', {
        post
    })
})

router.get('/:id', async (req,res) => {
    const id = req.params.id
    const reqPost = post[id]
    res.render('post', reqPost)
})

module.exports = router