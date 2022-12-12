const express =  require("express");
const mongoose  = require("mongoose");
const router = express.Router();
const jwtHelper = require('../../config/jwtHelper');
const taskData = require('../../controller/task.controller');

router.post('/add-task',taskData.addTask);
router.get('/get-task', taskData.getTask);
router.delete('/delete-task/:id', taskData.deleteTask);
router.get('/getTaskById/:id', taskData.gettaskById);
router.put('/update-task/:id',taskData.updateTask);
module.exports = router;