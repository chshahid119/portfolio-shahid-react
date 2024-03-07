import logo from "../img/logoOfficial.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header__navbar">
        <div className="header__navbar-logo">
          <img src={logo} alt="logo of site" />
        </div>
      </div>
      <div className="header__navbar-list">
        <nav className="header__navbar-list-nav">
          <ul className="header__navbar-list-nav-ul">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__navbar-icons"></div>
    </div>
  );
}
