const express = require("express");
const userController = require("./controllers/userController.js");
const homeworkController = require("./controllers/homeworkController.js");

const router =  new express.Router();

router.get('/api/user', userController.getAll);
router.post('/api/user', userController.create);
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.delete);

router.get('/api/homework', homeworkController.getAll);
router.get('/api/homework/student/:id', homeworkController.getAllByStudentId);
router.post('/api/homework', homeworkController.create);
router.put('/api/homework/:id', homeworkController.update);
router.delete('/api/homework/:id', homeworkController.delete);

module.exports =  router;

