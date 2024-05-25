const express = require('express');
const router = express.Router();
const Course = require('../model/course');
const authController  = require('../controller/authController')
const courseController = require('../controller/courseController')

const upload = require('../multerconfig')


router.get('/courses', courseController.getCourses);

router.post('/courses',authController.authenticateUser,upload, courseController.addCourse);


router.delete('/courses/:courseId',authController.authenticateUser, courseController.deleteCourse);

router.put('/courses/:courseId',authController.authenticateUser ,upload, courseController.updateCourse)

module.exports = router;