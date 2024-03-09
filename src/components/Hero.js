import HeroBgDots from "./sub-components/HeroBgDots";
import Image from "../img/shahid.png";
import Resume from "../img/ShahidResume.pdf";
import { useState, useEffect } from "react";

export default function Hero() {
  const [displayIntro, setDisplayIntro] = useState(false);

  useEffect(function () {
    setTimeout(function () {
      setDisplayIntro(true);
    }, 1000);
  }, []);
  return (
    <div className="hero">
      <HeroBgDots className="hero_bg-dots" />
      {displayIntro && (
        <div className="hero__introduction">
          <div className="hero__introduction--name">
            <p>
              Hi <span className="hi-hand">👋</span>
            </p>
            <h2>I'm Shahid Chaudhary!</h2>
            <p>Passionate Front-End Developer</p>
            <a
              href={Resume}
              download="Shahid.pdf"
              className="hero__introduction--name-btn"
            >
              Download Resume
            </a>
            <div className="hero__introduction--name-socials"></div>
          </div>

          <div className="hero__introduction--image">
            <img src={Image} alt="user" />
          </div>
        </div>
      )}
    </div>
  );
}
