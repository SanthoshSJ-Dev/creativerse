import React, { useState } from "react";
import axios from "axios";
import "../styles/TextTest.css";

const TextTest = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const linkToTranslate = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/download", {
        video_url: videoUrl,
        language: selectedLanguage,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  const getButtonName = () => {
    if (selectedLanguage === "ta") {
      return "Tamil";
    } else if (selectedLanguage === "te") {
      return "Telugu";
    } else selectedLanguage === "zh-cn";
    return "Chinese";
  };

  return (
    <>
      <div className="translate">
        <h1 className="title">Translate</h1>
        <div className="translate_container">
          <div className="input">
            <label htmlFor="url">Enter URL</label>
            <input
              id="url"
              className="translate_url_input"
              type="url"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>

          <div className="dropdown_container">
            <label htmlFor="">Select Language</label>
            <div className="dropdown">
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                {getButtonName()}
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <button
                    className="dropdown-item"
                    onClick={() => selectLanguage("ta")}
                  >
                    Tamil
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => selectLanguage("te")}
                  >
                    Telugu
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => selectLanguage("zh-cn")}
                  >
                    Chinese
                  </button>
                </div>
              )}
            </div>
          </div>
          <button className="translate_btn" onClick={linkToTranslate}>
            Translate
          </button>
        </div>
      </div>
    </>
  );
};

export default TextTest;
