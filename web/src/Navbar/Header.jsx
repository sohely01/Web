import React from 'react';
import Logo from '../assets/img/logo.svg'

const Header = () => {
  return (
    <header className="Header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid justify-content-between">
          {/* Logo Section */}
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" />
          </a>

          {/* Navbar Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links and Buttons */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {['Home', 'About', 'Team', 'FAQ'].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link active" href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Dark Mode Toggle Button */}
            <button id="toggle-dark-mode" className="btn">
              <i className="bi bi-moon-fill" id="darkIcon"></i>
            </button>

            {/* Navbar Action Buttons */}
            <form role="search" className="d-flex gap-2">
              <button type="button" className="btn buttons_Navbar">
                <i className="fa-sharp fa-solid fa-right-to-bracket"></i> Join
              </button>
              <button type="button" className="btn buttons_Navbar2">
                <i className="fa-solid fa-link"></i> Connect
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
