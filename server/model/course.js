const mongoose = require("mongoose");

const schema = mongoose.Schema;


const courseSchema = new schema({
  title: { type: String, required: true },
  fee : {type : String , required : true},
  duration: { type: String, required: true },
  description : {type : Object, required : true},
  previewImage: {
    type: String, // Assuming storing image path as string
    required: true
  }
});


const Course = mongoose.model("Course", courseSchema);

module.exports = Course;


