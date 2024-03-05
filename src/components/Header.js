function Header() {
  return (
    <div className="side-header">
      <div className="side-header__sidebar">
        <nav className="side-header__sidebar-nav">
          <ul className="side-header__sidebar-nav-links">
            <li>
              <ion-icon name="home-outline"></ion-icon>
              <a href="#">Home</a>
            </li>
            <li>
              <ion-icon name="hand-right-outline"></ion-icon>
              <a href="#">About</a>
            </li>
            <li>
              <ion-icon name="code-outline"></ion-icon>
              <a href="#">Projects</a>
            </li>

            <li>
              <ion-icon name="storefront-outline"></ion-icon>
              <a href="#">Services</a>
            </li>
            <li>
              <ion-icon name="clipboard-outline"></ion-icon>
              <a href="#">Blogs</a>
            </li>
            <li>
              <ion-icon name="call-outline"></ion-icon>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
