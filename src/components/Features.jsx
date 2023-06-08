import React from "react";
import {
  MdSettingsVoice,
  MdTranslate,
  MdMessage,
  MdVideoFile,
  MdSecurity,
  MdFormatListBulleted,
  MdPerson4,
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
            <h1 className="feature_head">Automated Translations</h1>
            <p className="feature_desc">
              One-click video translation will help you reach a global audience.
              Translate your videos in available 75 languages.
            </p>
            <span className="feature_icon">
              <MdTranslate />
            </span>
          </div>
          <div className="feature_box">
            <h1 className="feature_head">Generate a video from a prompt</h1>
            <p className="feature_desc">
              Text-to-video. GPT-3 + Creativerse.io Integration allows you to create a
              script from scratch and generate a video based on it.
            </p>
            <span className="feature_icon">
              <MdMessage />
            </span>
          </div>
          <div className="feature_box">
            <h1 className="feature_head">Article-to-Video Converter</h1>
            <p className="feature_desc">
              For Marketing and SEO teams. Turn your blog posts into narrated
              videos from URL. 
            </p>
            <span className="feature_icon">
              <MdVideoFile />
            </span>
          </div>
          <div className="feature_box">
            <h1 className="feature_head">Single-Sign On (SSO)</h1>
            <p className="feature_desc">
              Single Sign-On feature allows our users to access multiple
              applications with just one set of login credentials.
            </p>
            <span className="feature_icon">
              <MdSecurity />
            </span>
          </div>
          <div className="feature_box">
            <h1 className="feature_head">Brand Identity Kit</h1>
            <p className="feature_desc">
              Create custom templates with the company’s band colors and styles.
            </p>
            <span className="feature_icon">
              <MdMessage />
            </span>
          </div>
          <div className="feature_box">
            <h1 className="feature_head">Personalization at Scale</h1>
            <p className="feature_desc">
              Create a personalized experience at scale that allows to deliver a
              more targeted message.
            </p>
            <span className="feature_icon">
              <MdFormatListBulleted />
            </span>
          </div>
          <div className="feature_box">
            <h1 className="feature_head">Create your avatar</h1>
            <p className="feature_desc">
              Create a digital avatar of your company representative and clone
              their voice with Creativerse.
            </p>
            <span className="feature_icon">
              <MdPerson4 />
            </span>
          </div>
          <div className="feature_box">
            <h1 className="feature_head">PPT/PDF to Video</h1>
            <p className="feature_desc">
              You can easily convert a PPT into a video using the Creativerse platform.
              Simply import your PowerPoint file as a PDF and generate a video.
            </p>
            <span className="feature_icon">
              <MdAssignment />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
