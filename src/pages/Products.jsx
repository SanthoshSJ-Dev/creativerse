import React from "react";
import {auth} from '../config/firebase';
import LoginBtn from "../components/Navbar/LoginBtn";

const Products = () => {
  return (
    <div>
      <h1 className="padding">Products</h1>
      <LoginBtn auth={auth} />
    </div>
  );
};

export default Products;
