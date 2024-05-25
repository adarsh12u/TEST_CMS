const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');
const seminarRoutes = require('./routes/seminarRoutes');
const blogRoutes = require('./routes/blogRoutes');
const path = require('path');
const cors = require('cors');
require('dotenv').config();


const MONGO_URI= process.env.MONGO_URI;


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use(authRoutes)
app.use(courseRoutes)
app.use(seminarRoutes)
app.use(blogRoutes)
console.log(process.env.TYPE)

mongoose.connect(MONGO_URI)
.then(response=>{
    app.listen(process.env.PORT || 3000, () => {
      console.log("app is running...");
    });
})
.catch(error =>{
    console.log(error);
})


