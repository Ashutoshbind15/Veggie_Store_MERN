import catchAsync from "express-async-handler";
import Product from "../models/Products.js";
import User from "../models/User.js";

export const getAll = catchAsync(async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
});

export const getProduct = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate({
      path: "farm",
    });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
});

export const createProduct = catchAsync(async (req, res) => {
  try {
    if (req.userId) {
      const product = new Product({ ...req.body, user: req.userId });
      const user = await User.findById(req.userId);
      user.products.push(product);
      await product.save();
      await user.save();
      res.status(200).json(product);
    } else {
      res.status(400).json({ msg: "Not Authorized" });
    }
  } catch (error) {
    console.log(error);
  }
});

export const deleteProduct = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});

export const updateProduct = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
});
