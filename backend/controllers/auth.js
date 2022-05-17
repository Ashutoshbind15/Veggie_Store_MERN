import jwt from "jsonwebtoken";
import catchAsync from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const signUp = catchAsync(async (req, res) => {
  try {
    const { name, password, email, contact } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      password: hashedPassword,
      email,
      contact,
    });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.SECRET
    );

    res.status(201).json({ name, email, contact, token });
  } catch (error) {
    console.log(error);
  }
});

export const signIn = catchAsync(async (req, res, next) => {
  try {
    const { password, email } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        const token = jwt.sign({ email, id: user._id }, process.env.SECRET);
        res
          .status(201)
          .json({
            name: user.name,
            email: user.email,
            contact: user.contact,
            token,
          });
      } else {
        res.status(400).json({ msg: "invalid credentials" });
      }
    } else {
      res.status(400).json({ msg: "User doesn't Exist" });
    }
  } catch (error) {
    console.log(error);
  }
});
