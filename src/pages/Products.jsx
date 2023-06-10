import React, { useState } from "react";
import Translate from "../components/Products/Translate";
import UploadVideoToYT from "../components/Products/UploadVideoToYT";

const Products = () => {
  const [showTranslate, setShowTranslate] = useState(true);

  const handleTranslateComplete = () => {
    setShowTranslate(false);
  };

  return (
    <div className="padding">
      {showTranslate ? (
        <Translate onTranslateComplete={handleTranslateComplete} />
      ) : (
        <UploadVideoToYT />
      )}
    </div>
  );
};

export default Products;
