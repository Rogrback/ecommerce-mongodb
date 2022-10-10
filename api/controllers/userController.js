import { User } from '../models/index.js'
import bcrypt from 'bcrypt'

const createUser = async (req, res) => {
    try {
      const user = new User(req.body)
      await user.save()
      return res.status(201).json({
        msg: 'User created successfully',
        user
      })
    } catch (error) {
      return res.status(500).json({
        msg: 'Failed creating user',
        error: error.message
      })
    }
  }

const getAllUsers = async (_, res) => {
  try {
    const users = await User.find();
    return res.json({
      msg: 'Found all users',
      users,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error search users',
      error,
    });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { id } = req.params
    const encrypted = await bcrypt.hash(req.body.password, 10)
    req.body.password = encrypted

    const newPasswordOrEmail = await User.findByIdAndUpdate(id, req.body, {
      new: true
    })

    newPasswordOrEmail.password = undefined

    return res.json({
      msg: `User ${User.name} updated`,
      newPasswordOrEmail
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Failed to update password'
    })
  }
}

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
      const user = await User.findById(id);
      if (!user) {
          return res.status(404).json({
              msg: 'Not found user',
          });
      }
      return res.json({
          msg: 'Found user',
          user,
      });
  } catch (error) {
      res.status(500).json({
          msg: 'Error getting user by id',
          error,
      });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
      const user = await User.findByIdAndUpdate(id, req.body, {
          new: true,
      });
      return res.json({
          msg: `User ${user.name} updated successfully`,
          user,
      });
  } catch (error) {
      res.status(500).json({
          msg: 'Error updating user',
      });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
      await User.findByIdAndRemove(id);
      return res.json({
          msg: 'Delete user successfully',
      });
  } catch (error) {
      res.status(500).json({
          msg: 'Error deleting user',
          error,
      });
  }
};

export { createUser, getAllUsers, getUserById, updateUser, updatePassword, deleteUser }