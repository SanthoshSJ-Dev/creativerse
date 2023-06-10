import React from "react";
import {auth} from '../config/firebase';
import LoginBtn from "../components/Navbar/LoginBtn";
import TextTest from "../components/TextTest";

const Products = () => {
  return (
    <div>
      <h1 className="padding">Products</h1>
      {/* <LoginBtn auth={auth} /> */}

      <TextTest/>
    </div>
  );
};

export default Products;
