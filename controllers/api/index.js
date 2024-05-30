const router = require('express').Router();
const postRoutes = require('./post')

router.use('/posts', postRoutes)


router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });







module.exports = router;