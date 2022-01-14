import React from 'react';
import Job from './Job';

const Home = () => {
  return (
    <main>
      <div className="slider-area">
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <div className="hero__caption">
                    <h1>Trouver l'emploi de votre rêve en un clic</h1>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-8">
                  <form action="#" className="search-box">
                    <div className="input-form">
                      <input
                        type="text"
                        placeholder="Nom de l'emploi à chercher"
                      />
                    </div>
                    <div className="select-form">
                      <div className="select-itms">
                        <select name="select" id="select1">
                          <option value="">Zone de recherche</option>
                          <option value="">Tunis</option>
                          <option value="">Sousse</option>
                          <option value="">Sfax</option>
                        </select>
                      </div>
                    </div>
                    <div className="search-form">
                      <a href="#test" className="text-decoration-none">
                        Recherche
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-services section-pad-t30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle text-center">
                <span>Tous les emplois en Tunisie</span>
                <h2>Parcourir les offres par categories</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-contnet-center">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="flaticon-tour"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a href="job_listing.html" className="text-decoration-none">
                      Design & Creative
                    </a>
                  </h5>
                  <span>(653)</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="flaticon-cms"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a href="job_listing.html" className="text-decoration-none">
                      Design & Development
                    </a>
                  </h5>
                  <span>(658)</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="flaticon-report"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a href="job_listing.html" className="text-decoration-none">
                      Sales & Marketing
                    </a>
                  </h5>
                  <span>(658)</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="flaticon-app"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a href="job_listing.html" className="text-decoration-none">
                      Mobile Application
                    </a>
                  </h5>
                  <span>(658)</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="flaticon-helmet"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a href="job_listing.html" className="text-decoration-none">
                      Construction
                    </a>
                  </h5>
                  <span>(658)</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="flaticon-high-tech"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a href="job_listing.html" className="text-decoration-none">
                      Information Technology
                    </a>
                  </h5>
                  <span>(658)</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="flaticon-real-estate"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a href="job_listing.html" className="text-decoration-none">
                      Real Estate
                    </a>
                  </h5>
                  <span>(658)</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className="flaticon-content"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a href="job_listing.html" className="text-decoration-none">
                      Content Writer
                    </a>
                  </h5>
                  <span>(658)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="browse-btn2 text-center mt-50">
                <a
                  href="job_listing.html"
                  className="border-btn2 text-decoration-none"
                >
                  Voir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="online-cv cv-bg section-overly pt-90 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="cv-caption text-center">
                <p className="pera1">
                  Laissez-vous trouver par des recruteurs en Tunisie
                </p>
                <p className="pera2">
                  Partagez votre cv pour attirer des recruteurs vers vous.
                </p>
                <a
                  href="#test"
                  className="border-btn2 border-btn4 text-decoration-none"
                >
                  Telecharger votre cv
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="featured-job-area feature-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle text-center">
                <span>Job recent</span>
                <h2>Dernières publications</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <Job />
              <Job />
              <Job />
              <Job />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
