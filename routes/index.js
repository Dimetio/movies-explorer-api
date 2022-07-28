const router = require('express').Router();
const { signin, createUser, signout } = require('../controllers/users');
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const auth = require('../middlewares/auth');
const { signupValidate, signinValidate } = require('../middlewares/joi-schemas');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signup', signupValidate, createUser);
router.post('/signin', signinValidate, signin);
router.use('/users', auth, usersRoutes);
router.use('/movies', auth, moviesRoutes);
router.post('/signout', signout);

router.use('*', auth);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Неправильный путь. Error 404'));
});

module.exports = router;
