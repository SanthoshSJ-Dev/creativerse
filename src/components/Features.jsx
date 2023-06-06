import React from "react";
import {
  MdSettingsVoice,
  MdTranslate,
  MdMessage,
  MdFormatListBulleted,
  MdAssignment,
} from "react-icons/md";

import "../styles/Features.css";

const Features = () => {
  return (
    <div className="container">
      <div className="features">
        <h1 className="features_title">Features</h1>
        <h4 className="features_desc">
          Create Video at scale faster. Made for teams of all sizes.
        </h4>
        <div className="feature_boxes">
          <div className="feature_box">
            <h1 className="feature_head">Multi-lingual Voice Cloning</h1>
            <p className="feature_desc">
              Experience the power of multi-lingual voice cloning, enabling you
              to replicate your own voice in eight different languages.
            </p>
            <span className="feature_icon">
              <MdSettingsVoice />
            </span>
          </div>
          <div className="feature_box">
            <h1 className="feature_head">Multi-lingual Voice Cloning</h1>
            <p className="feature_desc">
              Experience the power of multi-lingual voice cloning, enabling you
              to replicate your own voice in eight different languages.
            </p>
            <span className="feature_icon">
              <MdTranslate />
            </span>
          </div>
          <div className="feature_box">
            <h1 className="feature_head">Multi-lingual Voice Cloning</h1>
            <p className="feature_desc">
              Experience the power of multi-lingual voice cloning, enabling you
              to replicate your own voice in eight different languages.
            </p>
            <span className="feature_icon">
              <MdMessage />
            </span>
          </div>
          <div className="feature_box">
            <h1 className="feature_head">Multi-lingual Voice Cloning</h1>
            <p className="feature_desc">
              Experience the power of multi-lingual voice cloning, enabling you
              to replicate your own voice in eight different languages.
            </p>
            <span className="feature_icon">
              <MdMessage />
            </span>
          </div>
          <div className="feature_box">
            <h1 className="feature_head">Multi-lingual Voice Cloning</h1>
            <p className="feature_desc">
              Experience the power of multi-lingual voice cloning, enabling you
              to replicate your own voice in eight different languages.
            </p>
            <span className="feature_icon">
              <MdMessage />
            </span>
          </div>
          <div className="feature_box">
            <h1 className="feature_head">Multi-lingual Voice Cloning</h1>
            <p className="feature_desc">
              Experience the power of multi-lingual voice cloning, enabling you
              to replicate your own voice in eight different languages.
            </p>
            <span className="feature_icon">
              <MdMessage />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
