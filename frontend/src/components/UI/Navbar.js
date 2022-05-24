import { Link, useNavigate } from "react-router-dom";
import React from "react";
import classes from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { logout } from "../../actions/user";

const NavbarC = () => {
  const numberOfItems = useSelector((state) => state.cart.number);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const navigate = useNavigate();

  const cartOpener = () => {
    console.log("snj");
    navigate("/cart");
  };

  return (
    <div className={classes.nav}>
      <div className={classes.links}>
        <Link to="/">Veggie Store</Link>
        <Link to="/products">Products</Link>
        <Link to="/farms">Farms</Link>
        <Link to="/products/new">Add product</Link>
        <Link to="/farms/new">Add farm</Link>
      </div>
      <div>
        {!user && <Link to="/auth">Signup/Login</Link>}
        {user && <Button onClick={logoutHandler}> Logout</Button>}
      </div>
      <div className={classes.button}>
        <Button variant="outlined" onClick={cartOpener}>
          Cart {numberOfItems}
        </Button>
      </div>
    </div>
  );
};

export default NavbarC;
