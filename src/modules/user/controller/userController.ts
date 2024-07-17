import { Request, Response } from "express";
import { User } from "../../../model/userModel";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const newuser = new User({
      username,
      email,
      password,
      role,
    });

    const token = Jwt.sign(
      { userId: newuser.id, role: newuser.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "24h" }
    );
    console.log(token)

    await newuser.save();
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    res.status(200).json({ Message: "succeccfully login" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const getProfile=async(req:Request,res:Response)=>{
try{
  res.status(200).json(await User.findById(req.userId).select('-password'))
}catch(err){
  res.status(500).json({ msg: "Server error" });
}

}
