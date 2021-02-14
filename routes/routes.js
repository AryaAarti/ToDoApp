const express = require('express');

const router = express.Router();
const homeController = require('../controllers/homecontrol.js');

console.log('router loaded');

router.get('/', homeController.viewTask); //Get request to get content of  db on browser
router.post('/add-task', homeController.addtask); //post request to add task
router.post('/delete-task', homeController.deleteTask); // post request to delete task
module.exports=router