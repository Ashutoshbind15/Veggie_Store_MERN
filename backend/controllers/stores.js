import catchAsync from "express-async-handler";
import Store from "../models/Store.js";

export const getAll = catchAsync(async (req, res) => {
  try {
    const stores = await Store.find({});
    res.status(200).json(stores);
  } catch (error) {
    console.log(error);
  }
});

export const getStore = catchAsync(async (req, res) => {
  try {
    const sotre = await Store.findById(req.params.id);
    res.status(200).json(sotre);
  } catch (error) {
    console.log(error);
  }
});

export const createStore = catchAsync(async (req, res) => {
  try {
    const store = await Store.create(req.body);
    res.status(200).json(store);
  } catch (error) {
    console.log(error);
  }
});

export const deleteStore = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    await Store.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
});

export const updateStore = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const store = await Store.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(store);
  } catch (error) {
    console.log(error);
  }
});
