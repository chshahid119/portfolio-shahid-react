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
            <div className="hero__introduction--name-socials">
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/shahid-chaudhary19/"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a className="github" href="https://github.com/chshahid119">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a className="twitter" href="https://twitter.com/chshahid119">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a
                className="instagram"
                href="https://www.instagram.com/shahid_chaudhary19/"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a
                className="facebook"
                href="https://www.facebook.com/shahid.rasool.58511276/"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </div>
            <a
              href={Resume}
              download="Shahid.pdf"
              className="hero__introduction--name-btn"
            >
              Download Resume
            </a>
          </div>

          <div className="hero__introduction--image">
            <img src={Image} alt="user" />
          </div>
        </div>
      )}
    </div>
  );
}
