import React from 'react';

const Search = () => {
  return (
    <section className="cc-intro d-flex justify-content-center align-items-center">
      <div className="container">
        <p className="h2 mb-4 text-white text-center">
          Trouvez l'emploi de vos rêves <br />
          parmi les emplois disponible en Tunisie.
        </p>
        <div className="card">
          <div className="card-body p-4">
            <div className="row">
              <div className="col-12 mb-4">
                <div className="input-group">
                  <select className="bbt btn btn-outline-secondary form-select">
                    <option selected>Gouvernorat</option>
                    <option value="1">Ariana</option>
                    <option value="2">Béja</option>
                    <option value="3">Ben Arous</option>
                    <option value="4">Bizerte</option>
                    <option value="5">Gabès</option>
                    <option value="6">Gafsa</option>
                    <option value="7">Jendouba</option>
                    <option value="8">Kasserine</option>
                  </select>
                  <div className="form-outline flex-fill">
                    <input
                      type="search"
                      id="form1"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label text-muted" for="form1">
                      Recherche des offres d'emploi gratuitement
                    </label>
                    <div className="form-helper pt-2">
                      <span className="font-weight-bold">Suggestion :</span>
                      <a href="#" className="text-decoration-none">
                        Acupuncteur
                      </a>
                      ,
                      <a href="#" className="text-decoration-none">
                        Acteur
                      </a>
                      ,
                      <a href="#" className="text-decoration-none">
                        Consultant IT
                      </a>
                      ,
                      <a href="#" className="text-decoration-none">
                        Contrôleur
                      </a>
                      ,
                      <a href="#" className="text-decoration-none">
                        Tailleur
                      </a>
                      ,
                      <a href="#" className="text-decoration-none">
                        Zoologiste
                      </a>
                      ,
                      <a href="#" className="text-decoration-none">
                        Testeur
                      </a>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary bbt">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
