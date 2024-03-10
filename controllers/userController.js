const User = require("../models/users");

class UserController {
    async create(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const allUsers = await User.find();
            res.json(allUsers);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const user = await User.findById(req.params.id);
            res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedUser);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            res.json(deletedUser);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

 module.exports = new UserController();
