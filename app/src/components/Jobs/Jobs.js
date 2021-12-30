import React from 'react';

import Job from './Job';
import Pagination from './Pagination';

const Jobs = () => {
  return (
    <>
      <section className="container-fluid row justify-content-between my-5">
        <Job />
        <Job />
        <Job />
        <Job />
      </section>
      <Pagination />
    </>
  );
};

export default Jobs;
