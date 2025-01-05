import React from "react";
import Logo from "../assets/img/bithook.webp";

const Header = () => {
  return (
    <header className="Header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid justify-content-between">
          <a className="navbar-brand" href="#">
            <img
              src={Logo}
              alt="Bithook Technology Pvt Ltd Logo"
              className="navbar-logo"
              width="50px"
            />
          </a>

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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {["Home", "About", "Team", "FAQ"].map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link active"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <button id="toggle-dark-mode" className="btn">
              <i className="bi bi-moon-fill" id="darkIcon"></i>
            </button>

            <form role="search" className="d-flex gap-2">
              <button type="button" className="btn buttons_Navbar">
                <i className="fa-sharp fa-solid fa-right-to-bracket"></i> Sign
                in
              </button>
              <button type="button" className="btn buttons_Navbar2">
                <i className="fa-solid fa-link"></i> Sign up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
