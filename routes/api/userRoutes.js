const router = require('express').Router();
const {getUsers} = require('../../controllers/userController');
router.route('/').get(getUsers);
module.exports = router;