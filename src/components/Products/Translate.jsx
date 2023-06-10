import React, { useState } from "react";
import axios from "axios";
import "../../styles/Translate.css";

const Translate = ({ onTranslateComplete }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);

  const linkToTranslate = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/download", {
        video_url: videoUrl,
        language: selectedLanguage,
      });
      setResponseStatus(response.status);
      onTranslateComplete(); // Call the provided callback on successful translation
    } catch (error) {
      console.error(error);
      setResponseStatus(500);
    } finally {
      setIsLoading(false);
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
    if (selectedLanguage === "zh-cn") {
      return "Chinese";
    } else if (selectedLanguage === "te") {
      return "Telugu";
    } else if (selectedLanguage === "ta") {
      return "Tamil";
    }
    return "-- Select --";
  };

  return (
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
          <button className="translate_btn" onClick={linkToTranslate}>
            Translate
          </button>
        </div>
      </div>
      {isLoading && <p>Loading...</p>}
      {responseStatus === 500 && (
        <p>Error occurred while translating. Please try again.</p>
      )}
    </div>
  );
};

export default Translate;
