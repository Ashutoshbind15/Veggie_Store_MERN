import * as api from "../api/index";
import { userActions } from "../reducers/user";

export const signIn = (userData) => async (dispatch) => {
  const { data } = await api.singIn(userData);
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(userActions.login(data));
  }
};

export const signUp = (userData) => async (dispatch) => {
  const { data } = await api.signUp(userData);
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(userActions.login(data));
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("user");
  dispatch(userActions.logout());
};
