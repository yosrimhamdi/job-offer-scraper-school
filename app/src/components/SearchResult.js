import React from 'react';
import Job from './Job';

const SearchResult = () => {
  return (
    <main>
      <div className="job-listing-area pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="row">
                <div className="col-12">
                  <div className="small-section-tittle2 mb-45">
                    <div className="ion">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="12px"
                      >
                        <path
                          fillRule="evenodd"
                          fill="rgb(27, 207, 107)"
                          d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                        />
                      </svg>
                    </div>
                    <h4>Filtre Travail</h4>
                  </div>
                </div>
              </div>

              <div className="job-category-listing mb-50">
                <div className="single-listing">
                  <div className="small-section-tittle2">
                    <h4>Categorie Travail</h4>
                  </div>

                  <div className="select-job-items2">
                    <select name="select">
                      <option value="">All Category</option>
                      <option value="">Category 1</option>
                      <option value="">Category 2</option>
                      <option value="">Category 3</option>
                      <option value="">Category 4</option>
                    </select>
                  </div>

                  <div className="select-Categories pt-80 pb-50">
                    <div className="small-section-tittle2">
                      <h4>Job Type</h4>
                    </div>
                    <label className="container">
                      Temps Plein
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Temps Partiel
                      <input
                        type="checkbox"
                        defaultChecked="defaultChecked active"
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      À distance
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Freelance
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div className="single-listing">
                  <div className="small-section-tittle2">
                    <h4>Localisation Travail</h4>
                  </div>

                  <div className="select-job-items2">
                    <select name="select">
                      <option value="">Anywhere</option>
                      <option value="">Category 1</option>
                      <option value="">Category 2</option>
                      <option value="">Category 3</option>
                      <option value="">Category 4</option>
                    </select>
                  </div>

                  <div className="select-Categories pt-80 pb-50">
                    <div className="small-section-tittle2">
                      <h4>Experience</h4>
                    </div>
                    <label className="container">
                      1-2 ans
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      2-3 ans
                      <input
                        type="checkbox"
                        defaultChecked="defaultChecked active"
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      3-6 ans
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      6-plus..
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div className="single-listing">
                  <div className="select-Categories pb-50">
                    <div className="small-section-tittle2">
                      <h4>Publication</h4>
                    </div>
                    <label className="container">
                      N'importe
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Aujourd'hui
                      <input
                        type="checkbox"
                        defaultChecked="defaultChecked active"
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Depuis 2 jours
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Depuis 3 jours
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Depuis 5 jours
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Depuis 10 jours
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-9 col-md-8">
              <section className="featured-job-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="count-job mb-35">
                        <span>39, 782 tavaux trouvés</span>

                        <div className="select-job-items">
                          <span>Trier par</span>
                          <select name="select">
                            <option value="">...</option>
                            <option value="">Nom</option>
                            <option value="">Date</option>
                            <option value="">Lieu</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Job />
                  <Job />
                  <Job />
                  <Job />
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="pagination-area pb-115 text-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="single-wrap d-flex justify-content-center">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-start">
                      <li className="page-item active">
                        <a className="page-link" href="#test">
                          01
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#test">
                          02
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#test">
                          03
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#test">
                          <span className="ti-angle-right"></span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchResult;
