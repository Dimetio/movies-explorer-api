const router = require('express').Router();
const { signin, createUser, signout } = require('../controllers/users');
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const auth = require('../middlewares/auth');
const { signupValidate, signinValidate } = require('../middlewares/joi-schemas');

router.use('/users', auth, usersRoutes);
router.use('/movies', auth, moviesRoutes);
router.post('/signup', signupValidate, createUser);
router.post('/signin', signinValidate, signin);
router.post('/signout', signout);

router.all('*', auth);

module.exports = router;
