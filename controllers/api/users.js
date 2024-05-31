const router = require('express').Router()
const { BlogUsers, Post, Comments } = require('../../models')


router.post('/', async (req, res) => {
    try {
      const dbUserData = await BlogUsers.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// router.put('/:id', async (req,res) => {
//     try {
//         const { id } = req.params
//         const user = await BlogUsers.update(req.body, {
//             where: {
//                 id
//             }
//         })
//         res.status(200).send('Post Update Succesful')
//     } catch (err) {
//         console.log(err)
//         res.status(500).send('Internal Server Error')
//     }
// })

// router.delete('/:id', async (req,res) => {
//     try {
//         const { id } = req.params
//         const deleteUser = await BlogUsers.destroy({
//             where: {
//                 id
//             }
//         })
//         res.status(200).send('Post delete successful')
//     } catch (err) {
//         console.log(err)
//         res.status(500).send('Internal Server Error')
//     }
// })


// Login
router.post('/login', async (req, res) => {
    try {
      const dbUserData = await BlogUsers.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Logout
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;

module.exports = router