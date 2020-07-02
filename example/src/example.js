import React from 'react';
import './example.css';

const Example = ({ title, description, children, ref }) => {
  return (
    <div ref={ref} className='example__container'>
      <div className='example__title'>{title}</div>
      <div className='example__description'>{description}</div>
      <div className='example__children'>{children}</div>
    </div>
  );
};

export default Example;
