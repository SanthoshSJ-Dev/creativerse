import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Banner from "../assets/Frame.webp";

import '../styles/Tryout.css';

const Tryout = () => {
  return (
    <div className="try_out">
      <h1 className="try_out_title">Try our advanced AI Products</h1>

      <div className="try_out_banner">
        <div className="try_btn">
          Start creating with Creativerse
          <MdOutlineKeyboardArrowRight className="try_out_icon"/>
        </div>
        <img className="try_out_banner_img" src={Banner} alt="" width="100%" />
      </div>
    </div>
  );
};

export default Tryout;
