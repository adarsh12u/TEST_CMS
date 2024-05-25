const express = require('express');

const router = express.Router();

const blogController = require('../controller/blogController');
const authController = require('../controller/authController');
const Blog = require('../model/blog')
const upload = require('../multerconfig')




router.get('/blogs', blogController.getBlogs);
router.post('/blogs',authController.authenticateUser,upload, blogController.addBlog);
router.delete('/blogs/:blogId',authController.authenticateUser, blogController.deleteBlog);
router.put('/blogs/:blogId',authController.authenticateUser,upload, blogController.updateBlog);
router.post('/blogs/:blogId', blogController.addComment);
router.delete('/blogs/:blogId/:commentId',authController.authenticateUser, blogController.deleteComment)


module.exports = router;