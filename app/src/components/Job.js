import React from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-initials-sprites';

const Job = ({ job }) => {
  const { adresse, emploi, lien } = job;

  const companyAvatar = createAvatar(style, {
    seed: 'creative agency',
  });

  return (
    <a
      href={lien}
      target="_blank"
      rel="noreferrer"
      className="single-job-items mb-30"
    >
      <div className="job-items">
        <div
          className="company-img"
          dangerouslySetInnerHTML={{ __html: companyAvatar }}
        ></div>
        <div className="job-tittle job-tittle2">
          <h4 className="job-title">{emploi}</h4>
          <ul>
            <li>Creative Agency</li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              {adresse}
            </li>
            <li>$3500 - $4000</li>
          </ul>
        </div>
      </div>
      <div className="items-link items-link2 f-right">
        <div className="job-type">Temps Plein</div>
        <span>7 hours ago</span>
      </div>
    </a>
  );
};

export default Job;
