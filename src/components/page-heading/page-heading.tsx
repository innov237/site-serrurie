import React from 'react';
import './page-heading.css';

interface PageHeadingProps {
  title: string;
  description: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, description }) => {
  return (
    <div className="container-fluid heading d-flex align-items-start justify-content-start">
      <div className="mt-4 container">
        <p className='text-white'>Page <span className="greater-than-icon">&#62;</span> {title}</p>
        <h2 className='text-white'>{description}</h2>
      </div>
    </div>
  );
};

export default PageHeading;
