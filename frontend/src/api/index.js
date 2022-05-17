import axios from "axios";
const url = "http://localhost:5000/products/";

export const getAll = () => axios.get(url);

export const getOne = (id) => axios.get(url + id);

export const addProduct = ({ data, token }) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  return axios.post(url, data, config);
};

export const singIn = (userData) =>
  axios.post("http://localhost:5000/users/signIn", userData);

export const signUp = (userData) =>
  axios.post("http://localhost:5000/users/signup", userData);
