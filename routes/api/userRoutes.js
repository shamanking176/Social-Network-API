const router = require('express').Router();
const {getUsers, 
    createUser,
    getSingleUser,
    deleteUser,
    updateUser,
    addThought,
    removeThought,} = require('../../controllers/userController');
router.route('/').get(getUsers).post(createUser);

router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;