import React from 'react';

const Job = () => {
  return (
    <div className="card my-3" style={{ width: '18rem' }}>
      <img src="/images/company-logo.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="btn-container">
        <a href="#" className="card-link">
          Card link
        </a>
      </div>
    </div>
  );
};

export default Job;
