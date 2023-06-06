import React, { useEffect, useState } from "react";
import {MdOutlineBolt} from 'react-icons/md'
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
      let delta = 200 - Math.random() * 100;

      if (isDeleting) {
        setText((prevText) => prevText.slice(0, -1));
      } else {
        setText((prevText) => fullTxt.substring(0, prevText.length + 1));
      }

      if (!isDeleting && text === fullTxt) {
        delta = period;
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
        delta = 500;
      }

      timer = setTimeout(tick, delta);
    };

    timer = setTimeout(tick, period);
    return () => clearTimeout(timer);
  }, [isDeleting, loopNum, text, textArray, period]);

  return (
    <h1 className="type">
      Streamline Your YouTube Journey
      <br />
      AI-enhanced <span className="typewrite violet-gradient">{text}</span>
    </h1>
  );
};

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="type">
            <TypingEffect
              textArray={[
                "Video Creator.",
                "Content Writer.",
                "Video Editor.",
                "Audio Generator.",
                "Video Uploader.",
              ]}
              period={200}
            />
          </div>
          <a href="/" className="banner_btn primary_btn">Get Started <MdOutlineBolt/></a>
          <div className="video"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
