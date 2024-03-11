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
            <h2>
              I'm <span className="Shahid">Shahid Chaudhary</span>!
            </h2>
            <p>Passionate Front-End Developer</p>
            <div className="hero__introduction--name-socials">
              <a
                className="linkedin"
                target="_"
                href="https://www.linkedin.com/in/shahid-chaudhary19/"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a
                className="github"
                target="_"
                href="https://github.com/chshahid119"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a
                className="twitter"
                target="_"
                href="https://twitter.com/chshahid119"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a
                className="instagram"
                target="_"
                href="https://www.instagram.com/shahid_chaudhary19/"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a
                className="facebook"
                target="_"
                href="https://www.facebook.com/shahid.rasool.58511276/"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </div>
            <div className="hero__introduction--name-contact">
              <div className="hero__introduction--name-contact-email">
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:recipient@shahidchaudhary0729@gmail.com?subject=Subject%20of%20the%20email&body=Body%20of%20the%20email">
                  shahidchaudhary0729@gmail.com
                </a>
              </div>
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
