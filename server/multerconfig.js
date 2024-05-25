const multer = require('multer');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  console.log("h")
    if (file.mimetype.startsWith("image/")) {
      console.log("h")
      cb(null, true);
    } else {
      console.log("h")
      cb(new Error("Only image files are allowed!"), false);
    }
  };
  console.log("h")
const upload = multer({storage : storage, fileFilter : fileFilter}).fields([
    {name : 'previewImage', maxCount: 1},
    {name : 'pointImages', maxCount : 10}
])

module.exports = upload;