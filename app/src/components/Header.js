import React from 'react';

import logo from '../images/logo.png';

const Header = () => {
  return (
    <header>
      <div className="header-area header-transparrent">
        <div className="headder-top header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo} alt="web site logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="menu-wrapper">
                  <div className="main-menu">
                    <nav className="d-none d-lg-block">
                      <ul id="navigation">
                        <li>
                          <a href="index.html" className="text-decoration-none">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#contact" className="text-decoration-none">
                            Nos partenaires
                          </a>
                        </li>
                        <li>
                          <a href="#contact" className="text-decoration-none">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a href="#apropos" className="text-decoration-none">
                            A propos
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className="header-btn d-none f-right d-lg-block">
                    <a href="#contact" className="btn head-btn1">
                      S'inscrire
                    </a>
                    <a href="#contact" className="btn head-btn2">
                      Connexion
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
