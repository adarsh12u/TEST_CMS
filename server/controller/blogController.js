const Blog = require("../model/blog");
const bucket = require("../bucket");
const path = require("path");


exports.getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length < 1 || !blogs) {
      return res.status(404).json({ message: "No blog found." });
    }
    res.status(200).json({ message: "blog found.", blogs: blogs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.addBlog = async (req, res) => {
  console.log("reached here in addBlog");
  console.log("reached here in addBlog");
  const { title, points } = req.body;
  console.log("reached here in addBlog");

  console.log("----------------",req.body)
  const files = req.files;
  console.log("  - ",files)
  console.log(JSON.parse(points))
  // const parsedPoints = JSON.parse(points);
  // for (const key in parsedPoints) {
  //      console.log(parsedPoints[key].image)
  //     }
  // const previewImageFile = files.previewImage ? files.previewImage[0] : null;
  // const pointImagesFiles = files.pointImages || [];

  
  // try {
  //   console.log('reached in try blog');
  // console.log( points );
  //   const imageUrls = {};

  //   // Handle previewImage upload
  //   if (previewImageFile) {
  //     console.log(previewImageFile)
  //     console.log('reached here in if block');
  //     const blob = bucket.file(previewImageFile.originalname);
  //     console.log('reached after the bucket');
  //     const blobStream = blob.createWriteStream({
  //       metadata: {
  //         contentType: previewImageFile.mimetype
  //       }
  //     });

  //     await new Promise((resolve, reject) => {
  //       blobStream.on('finish', () => {
  //         const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
  //         imageUrls.previewImage = publicUrl;
  //         resolve();
  //       }).on('error', (err) => {
  //         reject(err);
  //       }).end(previewImageFile.buffer);
  //     });
  //   }

  //   // Handle pointImages upload
  //   for (const file of pointImagesFiles) {
  //     const blob = bucket.file(file.originalname);
  //     const blobStream = blob.createWriteStream({
  //       metadata: {
  //         contentType: file.mimetype
  //       }
  //     });

  //     await new Promise((resolve, reject) => {
  //       blobStream.on('finish', () => {
  //         const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
  //         imageUrls[file.originalname] = publicUrl;
  //         resolve();
  //       }).on('error', (err) => {
  //         reject(err);
  //       }).end(file.buffer);
  //     });
  //   }

  //   // Replace image paths in points with URLs
  //   const parsedPoints = JSON.parse(points);
  //   for (const key in parsedPoints) {
  //     if (parsedPoints[key].image && imageUrls[parsedPoints[key].image]) {
  //       parsedPoints[key].image = imageUrls[parsedPoints[key].image];
  //     }
  //   }

  //   const newBlog = new Blog({
  //     title,
  //     previewImage: imageUrls.previewImage || '',
  //     points: parsedPoints
  //   });

  //   await newBlog.save();
  //   res.status(201).send('Blog added successfully!');
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).send(`Error adding blog: ${err.message}`);
  // }
}


exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, points } = req.body;
  const files = req.files;
  const previewImageFile = files.previewImage ? files.previewImage[0] : null;
  const pointImagesFiles = files.pointImages || [];

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).send('Blog not found');
    }

    const imageUrls = {};

    // Handle previewImage upload
    if (previewImageFile) {
      // Delete old preview image from Firebase if it exists
      if (blog.previewImage) {
        const oldPreviewImageName = blog.previewImage.split('/').pop();
        await bucket.file(oldPreviewImageName).delete();
      }

      // Upload new preview image
      const blob = bucket.file(previewImageFile.originalname);
      const blobStream = blob.createWriteStream({
        metadata: {
          contentType: previewImageFile.mimetype
        }
      });

      await new Promise((resolve, reject) => {
        blobStream.on('finish', () => {
          const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
          imageUrls.previewImage = publicUrl;
          resolve();
        }).on('error', (err) => {
          reject(err);
        }).end(previewImageFile.buffer);
      });

      blog.previewImage = imageUrls.previewImage;
    }

    // Handle pointImages upload
    for (const file of pointImagesFiles) {
      // Delete old point image from Firebase if it exists
      for (const key in blog.points) {
        if (blog.points[key].image) {
          const oldPointImageName = blog.points[key].image.split('/').pop();
          await bucket.file(oldPointImageName).delete();
        }
      }

      // Upload new point image
      const blob = bucket.file(file.originalname);
      const blobStream = blob.createWriteStream({
        metadata: {
          contentType: file.mimetype
        }
      });

      await new Promise((resolve, reject) => {
        blobStream.on('finish', () => {
          const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
          imageUrls[file.originalname] = publicUrl;
          resolve();
        }).on('error', (err) => {
          reject(err);
        }).end(file.buffer);
      });
    }

    // Replace image paths in points with URLs
    const parsedPoints = JSON.parse(points);
    for (const key in parsedPoints) {
      if (parsedPoints[key].image && imageUrls[parsedPoints[key].image]) {
        parsedPoints[key].image = imageUrls[parsedPoints[key].image];
      }
    }

    blog.title = title;
    blog.points = parsedPoints;

    await blog.save();
    res.status(200).send('Blog updated successfully!');
  } catch (err) {
    res.status(500).send(`Error updating blog: ${err.message}`);
  }
}

exports.deleteBlog =async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).send('Blog not found');
    }

    // Delete the preview image from Firebase if it exists
    if (blog.previewImage) {
      const oldPreviewImageName = blog.previewImage.split('/').pop();
      await bucket.file(oldPreviewImageName).delete();
    }

    // Delete point images from Firebase if they exist
    for (const key in blog.points) {
      if (blog.points[key].image) {
        const oldPointImageName = blog.points[key].image.split('/').pop();
        await bucket.file(oldPointImageName).delete();
      }
    }

    // Delete the blog document from MongoDB
    await Blog.findByIdAndDelete(id);

    res.status(200).send('Blog deleted successfully!');
  } catch (err) {
    res.status(500).send(`Error deleting blog: ${err.message}`);
  }
}

exports.addComment = async (req, res)=>{
  const blogId = req.params.blogId;
  const {text, author} = req.body;
  try{
    const blog = await Blog.findById(blogId);
    if(!blog){
      res.status(404).json({message : 'blog not found'})
    }
    const newComment = {
      text,
      author
    }

    blog.comments.push(newComment)

    await blog.save();

    res.status(201).json({message : 'comment uploaded'})
  }catch(error){
    res.status(500).json({error : error.message});
  }
}

exports.deleteComment = async (req, res) => {
  const { blogId, commentId } = req.params;

  try {
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).send('Blog not found');
    }

    const commentIndex = blog.comments.findIndex(comment => comment._id.toString() === commentId);
    if (commentIndex === -1) {
      return res.status(404).send('Comment not found');
    }

    blog.comments.splice(commentIndex, 1);
    await blog.save();

    res.status(200).json({message :'Comment deleted successfully!'});
  } catch (err) {
   res.status(500).json({error : error.message});
  }
};
