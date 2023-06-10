import React, { useState } from "react";
import axios from "axios";

const UploadVideoToYT = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/upload", {
        title,
        status,
        description,
      });
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

//   console.log(title+" - " +description+" - " +status)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectStatus = (status) => {
    setStatus(status);
    setShowDropdown(false);
  };

  const getButtonName = () => {
    if (status === "unlisted") {
      return "Unlisted";
    } else if (status === "private") {
      return "Private";
    } else if (status === "public") {
      return "Public";
    }
    return "-- Select --";
  };

  return (
    <div className="translate">
      <h1 className="title">Upload Video to YouTube</h1>
      <div className="translate_container">
        <div className="input">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="translate_url_input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="textarea">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="translate_url_input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={7}
          ></textarea>
        </div>
        <div className="dropdown_container">
          <div className="drop">
          <label htmlFor="">Status</label>
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              {getButtonName()}
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <button
                  className="dropdown-item"
                  onClick={() => selectStatus("public")}
                >
                  Public
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => selectStatus("private")}
                >
                  Private
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => selectStatus("unlisted")}
                >
                  Unlisted
                </button>
              </div>
            )}
          </div>
          </div>
          <button className="translate_btn" onClick={handleSubmit}>Upload</button>
        </div>
        
        {isLoading && <p>Loading...</p>}
        {response && <p>{response.message}</p>}
      </div>
    </div>
  );
};

export default UploadVideoToYT;
