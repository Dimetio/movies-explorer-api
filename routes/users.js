const router = require('express').Router();
const { updateUserValidate } = require('../middlewares/joi-schemas');
const { updateUser, getUser } = require('../controllers/users');

router.get('/me', getUser);
router.patch('/me', updateUserValidate, updateUser);

module.exports = router;
