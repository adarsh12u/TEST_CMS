const Seminar = require('../model/seminar')
const bucket = require('../bucket');
const path = require('path');


exports.getSeminars = async (req, res, next)=>{
    try{
        const seminars = await Seminar.find();
        if(seminars.length < 1 || !seminars){
            return res.status(404).json({message : 'No seminars found.'});
        }
        res.status(200).json({message : 'Seminars found.', seminars : seminars});
    }catch(error){
        res.status(500).json({message : error.message});
    }
}

exports.addSeminars =async (req, res) => {
    const { title, place } = req.body;
    // const previewImageFile = req.file;
    // console.log(req.file)
    // console.log(req.files)
    const files = req.files;
    console.log(files)
    const previewImageFile = files.previewImage ? files.previewImage[0] : null;
    try {
      if (!previewImageFile) {
        return res.status(400).send('Preview image is required');
      }
  
      // Upload preview image to Firebase
      const blob = bucket.file(previewImageFile.originalname);
      const blobStream = blob.createWriteStream({
        metadata: {
          contentType: previewImageFile.mimetype
        }
      });
  
      await new Promise((resolve, reject) => {
        blobStream.on('finish', () => {
          const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
          resolve(publicUrl);
        }).on('error', (err) => {
          reject(err);
        }).end(previewImageFile.buffer);
      });
  
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
  
      const newSeminar = new Seminar({
        title,
        previewImage: publicUrl,
        place
      });
  
      await newSeminar.save();
      res.status(201).send('Seminar added successfully!');
    } catch (err) {
      res.status(500).send(`Error adding seminar: ${err.message}`);
    }
  };

exports.updateSeminars = async (req, res) => {
    const { id } = req.params;
    const { title, place } = req.body;
    // const previewImageFile = req.file;
    const files = req.files;
    const previewImageFile = files.previewImage ? files.previewImage[0] : null;
  
    try {
      const seminar = await Seminar.findById(id);
      if (!seminar) {
        return res.status(404).send('Seminar not found');
      }
  
      if (previewImageFile) {
        // Delete old preview image from Firebase
        if (seminar.previewImage) {
          const oldPreviewImageName = seminar.previewImage.split('/').pop();
          await bucket.file(oldPreviewImageName).delete();
        }
  
        // Upload new preview image to Firebase
        const blob = bucket.file(previewImageFile.originalname);
        const blobStream = blob.createWriteStream({
          metadata: {
            contentType: previewImageFile.mimetype
          }
        });
  
        await new Promise((resolve, reject) => {
          blobStream.on('finish', () => {
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
            seminar.previewImage = publicUrl;
            resolve();
          }).on('error', (err) => {
            reject(err);
          }).end(previewImageFile.buffer);
        });
      }
  
      seminar.title = title;
      seminar.place = place;
  
      await seminar.save();
      res.status(200).send('Seminar updated successfully!');
    } catch (err) {
      res.status(500).send(`Error updating seminar: ${err.message}`);
    }
  };

exports.deleteSeminars = async (req, res) => {
    const { id } = req.params;
  
    try {
      const seminar = await Seminar.findById(id);
      if (!seminar) {
        return res.status(404).send('Seminar not found');
      }
  
      // Delete preview image from Firebase
      if (seminar.previewImage) {
        const oldPreviewImageName = seminar.previewImage.split('/').pop();
        await bucket.file(oldPreviewImageName).delete();
      }
  
      // Delete the seminar document from MongoDB
      await Seminar.findByIdAndDelete(id);
  
      res.status(200).send('Seminar deleted successfully!');
    } catch (err) {
      res.status(500).send(`Error deleting seminar: ${err.message}`);
    }
  }