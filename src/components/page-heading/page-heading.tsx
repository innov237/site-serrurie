import React from 'react';
import './page-heading.css';

export default function PageHeading(_props: any) {

  return (
    <div className="container-fluid heading d-flex align-items-start justify-content-start">
      <div className="mt-4 container">
        <p className='text-white'>Kezdőlap  <span className="greater-than-icon">&#62;</span> Rólunk</p>
        <h2 className='text-white'>Bemutatkozás</h2>
      </div>
    </div>
  );
};
