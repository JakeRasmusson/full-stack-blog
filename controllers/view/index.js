const router = require('express').Router();
const postRoutes = require('./post')
const userRoutes = require('./user')
const dashboardRoutes = require('./dashboard')


router.use('/posts', postRoutes)
router.use('/user', userRoutes)
router.use('/dashboard', dashboardRoutes)

router.get('/', async(req, res) => {
    res.render('home', {loggedIn: req.session.loggedIn})
})





module.exports = router;