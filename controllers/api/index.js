const router = require('express').Router();
const postRoutes = require('./post')
const commentRoutes = require('./comment')
const userroutes = require('./users')

router.use('/user', userroutes)
router.use('/comments', commentRoutes)
router.use('/posts', postRoutes)


router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });







module.exports = router;