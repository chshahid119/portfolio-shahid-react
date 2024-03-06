import Image from "../img/shahid.png";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__introduction">
        <div className="profile__introduction-intro">
          <div className="profile__introduction-intro-headings">
            <p>
              Hi <span>S</span>
              <span>h</span> <span>a</span> <span>h</span> <span>i</span>{" "}
              <span>d</span> Here!
            </p>
            <h2>
              I am Front-end Developer <span className="blink-again"></span>
            </h2>
            <p>I make the complex Simple</p>
          </div>

          <div className="profile__introduction-intro-social">
            Follow me on:
            <a target="_" href="https://github.com/chshahid119">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              target="_"
              href="https://www.linkedin.com/in/shahid-chaudhary19/"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a target="_" href="https://www.instagram.com/shahid_chaudhary19/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a target="_" href="https://twitter.com/chshahid119">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a
              target="_"
              href="https://www.facebook.com/shahid.rasool.58511276/"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a target="_" href="https://www.instagram.com/shahid_chaudhary19/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>
        <div className="profile__introduction-img">
          <div className="profile__introduction-img-div">
            <img src={Image} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
