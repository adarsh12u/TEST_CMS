const Course = require('../model/course')
const bucket = require('../bucket');
const path = require('path')

exports.getCourses = async (req, res, next)=>{
    try{
        const courses = await Course.find();
        if(!courses || courses.length < 1){
            return res.status(404).json({message : 'no courses found'});
        }

        res.status(200).json({message : 'courses found', courses : courses});
    }
    catch(error){
        console.log(error)
        res.status(500).json({ error: error.message });
    }
}

 

exports.addCourse = async (req, res, next) => {
  try {
    const { title, description, duration, fee } = req.body;

    const files = req.files;
    const previewImageFile = files.previewImage ? files.previewImage[0] : null;

    if(!previewImageFile){
      res.status(404).json({message : "Preview Image required."});
    }
    
    const blob = bucket.file(Date.now() + "-" + previewImage.originalname);
    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: previewImageFile.mimetype,
      },
    });

    blobStream.on("error", (err) => {
      return res.status(500).json({ message: err.message });
    });

    blobStream.on("finish", async () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

      const newCourse = new Course({
        title: title,
        description: description,
        duration: duration,
        fee: fee,
        previewImage: publicUrl,
      });

      try {
        await newCourse.save();
        res.status(201).json({ message: 'Course created successfully', course: newCourse });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
      }
    });

    blobStream.end(previewImage.buffer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};




exports.updateCourse = async (req, res, next) => {
  try {   
    const { title, description, duration, fee } = req.body;
    const courseId = req.params.courseId;
    let updateFields = { title, description, duration, fee };

    const files = req.files;
    const previewImageFile = files.previewImage ? files.previewImage[0] : null;

    const existingCourse = await Course.findById(courseId);

    if (!existingCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    if (previewImageFile) {
      // Delete the old image from Firebase
      if (existingCourse.previewImage) {
        const oldImagePath = path.basename(existingCourse.previewImage);
        const oldImageBlob = bucket.file(oldImagePath);
        await oldImageBlob.delete();
      }

      // Upload the new image to Firebase
      const newBlob = bucket.file(Date.now() + "-" + previewImageFile.originalname);
      const newBlobStream = newBlob.createWriteStream({
        metadata: {
          contentType: req.file.mimetype,
        },
      });

      newBlobStream.on("error", (err) => {
        return res.status(500).json({ message: err.message });
      });

      newBlobStream.on("finish", async () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${newBlob.name}`;
        updateFields.previewImage = publicUrl;

        const updatedCourse = await Course.findByIdAndUpdate(courseId, updateFields, { new: true });

        if (!updatedCourse) {
          return res.status(404).json({ message: 'Course not found!' });
        }

        res.status(200).json({ message: 'Course updated successfully', course: updatedCourse });
      });

      newBlobStream.end(req.file.buffer);
    } else {
      const updatedCourse = await Course.findByIdAndUpdate(courseId, updateFields, { new: true });

      if (!updatedCourse) {
        return res.status(404).json({ message: 'Course not found!' });
      }

      res.status(200).json({ message: 'Course updated successfully', course: updatedCourse });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};


exports.deleteCourse = async (req, res, next) => {
    try {
      const courseId = req.params.courseId;
  
      const existingCourse = await Course.findById(courseId);
  
      if (!existingCourse) {
        return res.status(404).json({ message: 'Course not found' });
      }
  
      if (existingCourse.previewImage) {
        const imagePath = path.basename(existingCourse.previewImage);
        const imageBlob = bucket.file(imagePath);
  
        try {
          await imageBlob.delete();
        } catch (err) {
          return res.status(500).json({ message: "Failed to delete image from storage", error: err.message });
        }
      }
  
      const deleteCourse = await Course.findByIdAndDelete(courseId);
      if (!deleteCourse) {
        return res.status(401).json({ message: 'Failed to delete course' });
      }
  
      res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };