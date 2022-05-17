import * as api from "../api/index";
import { productActions } from "../reducers/products";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getAll();
    dispatch(productActions.getProducts(data));
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.getOne(id);
    dispatch(productActions.getProduct(data));
  } catch (error) {
    console.log(error);
  }
};

export const createProducts = (payload) => async (dispatch) => {
  try {
    const { data } = await api.addProduct({
      data: payload.productdata,
      token: payload.user,
    });
    dispatch(productActions.setProduct(data));
  } catch (error) {
    console.log(error);
  }
};
