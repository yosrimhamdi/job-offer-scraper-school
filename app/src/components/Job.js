import React from 'react';

import i1 from './job-list1.png';
import i2 from './job-list2.png';
import i3 from './job-list3.png';
import i4 from './job-list4.png';

const images = [i1, i2, i3, i4];

const Job = () => {
  return (
    <div className="single-job-items mb-30">
      <div className="job-items">
        <div className="company-img">
          <a href="#test">
            <img
              src={images[Math.floor(Math.random() * (3 - 0 + 1)) + 0]}
              alt=""
            />
          </a>
        </div>
        <div className="job-tittle job-tittle2">
          <a href="#test">
            <h4>Digital Marketer</h4>
          </a>
          <ul>
            <li>Creative Agency</li>
            <li>
              <i className="fas fa-map-marker-alt"></i>Athens, Greece
            </li>
            <li>$3500 - $4000</li>
          </ul>
        </div>
      </div>
      <div className="items-link items-link2 f-right">
        <a href="job_details.html" className="text-decoration-none">
          Temps Plein
        </a>
        <span>7 hours ago</span>
      </div>
    </div>
  );
};

export default Job;
