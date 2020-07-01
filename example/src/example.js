import React from 'react';
import './example.css';

const Example = ({ title, children, ref }) => {
  return (
    <div ref={ref} className='example__container'>
      <div className='example__title'>{title}</div>
      <div className='example__body'>{children}</div>
    </div>
  );
};

export default Example;
