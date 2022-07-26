const router = require('express').Router();
const { login, createUser, logout } = require('../controllers/users');
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const auth = require('../middlewares/auth');
const { signupValidate, signinValidate } = require('../middlewares/joi-schemas');

router.use('/users', auth, usersRoutes);
router.use('/movie', auth, moviesRoutes);
router.post('/signup', signupValidate, createUser);
router.post('/signin', signinValidate, login);
router.post('/logout', logout);

module.exports = router;
