import React from 'react';

const Header = () => {
  return (
    <nav className="modif-navbar navbar navbar-expand-lg navbar-dark position-fixed w-100">
      <div className="container-fluid">
        <a className="navbar-brand ms-2" href="#">
          <img
            src="/images/icons/logo.svg"
            alt="logo"
            className="img-fluid"
            width="85"
          />
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between me-2"
          id="collapsibleNavId"
        >
          <div></div>
          <div>
            <ul className="navbar justify-content-center list-unstyled d-flex">
              <li className="ms-4 fs-5">
                <a className="soci text-light" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="ms-4 fs-5">
                <a className="soci text-light" href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="ms-4 fs-5">
                <a className="soci text-light" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
