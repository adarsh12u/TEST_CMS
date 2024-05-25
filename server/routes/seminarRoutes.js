const express = require('express');

const router = express.Router();

const seminarController = require('../controller/seminarController');
const authController = require('../controller/authController')
const Seminar = require('../model/seminar')
const upload = require('../multerconfig')

router.get('/seminars', seminarController.getSeminars);
router.post('/seminar',authController.authenticateUser ,upload, seminarController.addSeminars);
router.delete('/seminar/:seminarId',authController.authenticateUser, seminarController.deleteSeminars);
router.put('/seminar/:seminarId',authController.authenticateUser, upload, seminarController.updateSeminars)

module.exports = router;