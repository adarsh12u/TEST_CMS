const User = require("../model/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next)=>{
    try{

        const email = req.body.email;
        const password = req.body.password;

        console.log(email)

        const user = await User.findOne({email : email});
        if(!user){
            return res.status(404).json({message : 'User not found'});
        }

        const passMatched = await bcrypt.compare(password, user.password);
        if(!passMatched){
            return res.status(401).json({message : 'Invalid password or email'})
        }

        const token = jwt.sign({user: user}, 'secret');

        if(!token){
            return res.status(500).json({message : 'failed to generate login token'});
        }

        const response = {
            email : user.email,
            userName : user.name,
            token : token
        }

        res.status(200).json({message : 'user logged in succesfully', response : response});

    }catch(error){
        console.log(error)
        res.status(500).json({message : "Invalid credentials"})
    }
}

exports.signup = async (req, res, next)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;
        console.log(password)

        const hash = await bcrypt.genSalt(10);

        const hashedPass = await bcrypt.hash(password.toString(), hash);

        const user = new User({
            email : email,
            name : name,
            password : hashedPass
        })

        await user.save();

        res.status(201).json({message : 'User created succesfully.'});

    }catch(error){
        console.log(error)
        res.status(500).json({message : error.message})
    }
}

exports.authenticateUser = async function authenticateUser(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or invalid' });
  }


  const token = authHeader.split(' ')[1];
  console.log(token)

  try {
    const decoded = jwt.verify(token, 'secret'); 
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
