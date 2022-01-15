import React from 'react';

import form from './form.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-area footer-bg footer-padding">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="single-footer-caption mb-30">
                  <div className="footer-tittle">
                    <h4 id="apropos">A propos</h4>
                    <div className="footer-pera">
                      <p>
                        JobsFind est une agence qui vous aide à trouver l'emploi
                        en Tunisie grace à son meilleur outil de recherche. Vous
                        trouvez l'emploi de votre rêve en un simple clic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4 id="contact">Contact</h4>
                  <ul>
                    <li>
                      <p className="my-0 py-0">Address : Tunis Tunisie</p>
                    </li>
                    <li>
                      <a href="#test" className="text-decoration-none">
                        Phone : +216 111111
                      </a>
                    </li>
                    <li>
                      <a href="#test" className="text-decoration-none">
                        Email : JobsFind@society.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Developpers Team</h4>
                  <ul>
                    <li>
                      <a href="#test" className="text-decoration-none">
                        Omari Omari Kayumba
                      </a>
                    </li>
                    <li>
                      <a href="#test" className="text-decoration-none">
                        Adama Kabore
                      </a>
                    </li>
                    <li>
                      <a href="#test" className="text-decoration-none">
                        Yosri Mhamdi
                      </a>
                    </li>
                    <li>
                      <a href="#test" className="text-decoration-none">
                        Banitongwa David
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Newsletter</h4>
                  <div className="footer-pera footer-pera2">
                    <p>
                      Recevez les dernières nouvelles en s'inscrivant à notre
                      newsletter.
                    </p>
                  </div>
                  <div className="footer-form">
                    <div id="mc_embed_signup">
                      <form
                        action="#"
                        method="post"
                        className="subscribe_form relative mail_part"
                      >
                        <input
                          type="email"
                          name="email"
                          id="newsletter-form-email"
                          placeholder="Votre adresse email"
                        />

                        <div className="form-icon">
                          <button
                            type="submit"
                            name="submit"
                            id="newsletter-submit"
                            className="email_icon newsletter-submit button-contactForm"
                          >
                            <img src={form} alt="" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-area footer-bg">
        <div className="container">
          <div className="footer-border">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-xl-10 col-lg-10 ">
                <div className="footer-copy-right">
                  <p>
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{' '}
                    Jobs Find Scraper - UIT
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="footer-social f-right">
                  <a href="#test">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#test">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#test">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
