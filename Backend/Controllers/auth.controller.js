import User from '../Models/user.model.js';
import bcrypt from "bcrypt"
import {generateTokenAndSetCookie} from "../Utils/generateTokens.js"

export const signup = async (req,res)=>{
try {
  const { fullName, username, email, password }= req.body;
  console.log(fullName );
  
  //      check if email is in write formate

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)){
    return res.status(400).json({ error: "Invalid email format" });
  }
  
  //      checks if the username is already taken
  const existingUser = await User.findOne({username})
  if(existingUser){
    return res.status(400).json({ error: "Username is already taken" });
  }

 //     checks if the email is already taken
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    return res.status(400).json({ error: "Email is already taken" });
  }

  //      Pasword length check
  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters long" });
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password,salt);
  
  //    NEW USER CREATED
  const newUser = new User({
    fullName,
    username,
    email,
    password:hashedPassword,
  })
  
  //      generateCookies for the user
  if(newUser){
    //Token created and cookies set
    generateTokenAndSetCookie(newUser._id,res);
    await newUser.save();

   res.status(201).json({
    _id: newUser._id,
    fullName: newUser.fullName,
    username: newUser.username,
    email: newUser.email,
    profileImg: newUser.profileImg,
    role: newUser.role,
    mobileNum : newUser.mobileNum
    });
  }else {
    res.status(400).json({ error: "Invalid user data" });
  }


} catch (error) {
  console.log("Error in signup controller", error.message);
  res.status(500).json({ error: "Internal Server Error" });
}
} 


export const login = async (req, res)=>{
  try {
    const {username,password}= req.body;

    //  Check if user with username existes in db
    const user = await User.findOne({username})
    //  Check if Password is correct
    const isPassCorrect = await bcrypt.compare(password,user?.password||"");
    //    If either username  or password  to the User is false
    if (!user || !isPassCorrect) {
      return res.status(400).json({ error: "Invalid Credientaial" });
    }

    //generates a new token and cookie for a new seasion
    generateTokenAndSetCookie(user._id,res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      profileImg: user.profileImg,
      role: user.role,
      mobileNum : user.mobileNum
    })
    
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export const logout =async (req, res)=>{
  try {
    //    The cookie being cleared
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "logged out sucessfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}