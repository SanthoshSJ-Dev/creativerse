import React, { useEffect, useState } from "react";
import { MdOutlineBolt } from "react-icons/md";

import video from "../assets/sample_video.mp4";
import "../styles/Banner.css";

const TypingEffect = ({ textArray, period }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer = null;
    const i = loopNum % textArray.length;
    const fullTxt = textArray[i];

    const tick = () => {
      const shouldDelete = isDeleting && text.length > 0;
      const shouldType = !isDeleting && text.length < fullTxt.length;

      if (shouldDelete) {
        setText((prevText) => prevText.slice(0, -1));
      } else if (shouldType) {
        setText((prevText) => fullTxt.substring(0, prevText.length + 1));
      } else {
        setIsDeleting(!isDeleting);
        setLoopNum((prevLoopNum) => prevLoopNum + (isDeleting ? 1 : 0));
      }

      const delta = shouldDelete ? period / 2 : period;
      timer = setTimeout(tick, delta);
    };

    timer = setTimeout(tick, period);
    return () => clearTimeout(timer);
  }, [isDeleting, loopNum, text, textArray, period]);

  return (
    <h1 className="type">
      Level up your YouTube with <br />
      AI tools:
      <span> </span>
      <span className="typewrite violet-gradient">{text}</span>
    </h1>
  );
};

const Banner = () => {
  return (
    <div>
      <div className="banner"></div>
      <div className="container">
        <div className="type">
          <TypingEffect
            textArray={["Create.", "Capativate.", "Conquer!"]}
            period={200}
          />
        </div>
        <a href="/" className="banner_btn primary_btn">
          Get Started <MdOutlineBolt />
        </a>
        <div className="video">
          <video
            src={video}
            width="100%"
            loop
            autoPlay
            playsInline
            muted
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Banner;
