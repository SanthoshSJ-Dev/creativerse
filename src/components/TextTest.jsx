import React, { useState } from "react";
import axios from "axios";

const TextTest = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const convertVideoToAudio = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/download", {
        "video_url": videoUrl,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Download</h1>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button onClick={convertVideoToAudio}>Convert</button>
    </>
  );
};

export default TextTest;
