const router = require('express').Router();
const postRoutes = require('./post')

router.use('/posts', postRoutes)


router.get('/', async(req, res) => {
    res.render('home')
})





module.exports = router;