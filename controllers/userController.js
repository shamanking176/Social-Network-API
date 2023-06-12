const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');



module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
        .then(users=>res.json(users))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Get a single user
    getSingleStudent(req, res) {
      User.findOne({ _id: req.params.studentId })
        .select('-__v')
        .then(async (user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json({
                user,
                grade: await grade(req.params.userId),
              })
        )
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // create a new student
    // createStudent(req, res) {
    //     User.create(req.body)
    //     .then((student) => res.json(user))
    //     .catch((err) => res.status(500).json(err));
    // },
    // Delete a student and remove them from the course
    // deleteStudent(req, res) {
    //     User.findOneAndRemove({ _id: req.params.userId })
    //     .then((user) =>
    //       !user
    //         ? res.status(404).json({ message: 'No such user exists' })
    //         : Thought.findOneAndUpdate(
    //             { users: req.params.userId },
    //             { $pull: { users: req.params.userId } },
    //             { new: true }
    //           )
    //     )
    //     .then((thought) =>
    //       !thought
    //         ? res.status(404).json({
    //             message: 'Student deleted, but no courses found',
    //           })
    //         : res.json({ message: 'Student successfully deleted' })
    //     )
    //     .catch((err) => {
    //       console.log(err);
    //       res.status(500).json(err);
    //     });
    // },
  
    // Add an assignment to a student
    // addAssignment(req, res) {
    //   console.log('You are adding an assignment');
    //   console.log(req.body);
    //   User.findOneAndUpdate(
    //     { _id: req.params.userId },
    //     { $addToSet: { assignments: req.body } },
    //     { runValidators: true, new: true }
    //   )
    //     .then((user) =>
    //       !student
    //         ? res
    //             .status(404)
    //             .json({ message: 'No student found with that ID :(' })
    //         : res.json(student)
    //     )
    //     .catch((err) => res.status(500).json(err));
    // },
    // Remove assignment from a student
    // removeAssignment(req, res) {
    //     User.findOneAndUpdate(
    //     { _id: req.params.userId },
    //     { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
    //     { runValidators: true, new: true }
    //   )
    //     .then((user) =>
    //       !student
    //         ? res
    //             .status(404)
    //             .json({ message: 'No student found with that ID :(' })
    //         : res.json(user)
    //     )
    //     .catch((err) => res.status(500).json(err));
    // },
  };
  