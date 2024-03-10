const Homework = require("../models/homework");

class HomeworkController {
    async create(req, res) {
        try {
            const newHomework = await Homework.create(req.body);
            res.json(newHomework);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const allHomework = await Homework.find();
            res.json(allHomework);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const homework = await Homework.findById(req.params.id);
            res.json(homework);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllByStudentId(req, res) {
        try {
            const homework = await Homework.find({ studentId: req.params.id });
            res.json(homework);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updatedHomework = await Homework.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedHomework);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            const deletedHomework = await Homework.findByIdAndDelete(req.params.id);
            res.json(deletedHomework);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

 module.exports = new HomeworkController();

