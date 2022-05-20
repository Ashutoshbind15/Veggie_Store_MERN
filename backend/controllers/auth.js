import jwt from "jsonwebtoken";
import catchAsync from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const signUp = catchAsync(async (req, res) => {
  try {
    const { name, password, email, contact } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      name,
      password: hashedPassword,
      email,
      contact,
    });

    const finalUser = await user.save();
    const roles = Object.values(finalUser.roles);
    const token = jwt.sign(
      { email: finalUser.email, id: finalUser._id, roles },
      process.env.SECRET
    );

    const userData = { name, email, contact };

    res.status(201).json({ userData, token });
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
        const roles = Object.values(user.roles);
        const token = jwt.sign(
          { email, id: user._id, roles },
          process.env.SECRET
        );

        const userData = {
          name: user.name,
          email: user.email,
          contact: user.contact,
        };
        res.status(201).json({
          userData,
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
