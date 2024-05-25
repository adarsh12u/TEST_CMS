const mongoose = require('mongoose');
const schema = mongoose.Schema;


function getFormattedDateTime() {
    const today = new Date();
  
    // Get the date components
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(today.getDate()).padStart(2, "0");
  
    // Get the time components
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
  
    // Format the date and time
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    // Concatenate date and time
    const formattedDateTime = `${formattedDate} ${formattedTime}`;
  
    return formattedDateTime;
  }
  


const seminarSchema = new schema({
    title : {type : String, required : true},
    previewImage : {type : String, required : true},
    place : {type : String, required : true},
    createdAt: { type: Date, default: getFormattedDateTime() },
})


const Seminar = mongoose.model('Seminar', seminarSchema);

module.exports = Seminar;