import React from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-initials-sprites';

const Job = () => {
  const companyAvatar = createAvatar(style, {
    seed: 'custom-seed',
  });

  return (
    <div className="single-job-items mb-30">
      <div className="job-items">
        <div
          className="company-img"
          dangerouslySetInnerHTML={{ __html: companyAvatar }}
        ></div>
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
