import React, { useState, useEffect } from 'react';

const Component = (props) => {
  return <div>hello there {props.name}</div>;
};
export const usePaginate = () => {
  console.log(
    'hello this is usePaginate. WIP. Come back in a week and I should beeeweeeeee.',
  );
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    console.log('updated page index to ', pageIndex);
  }, [pageIndex]);

  const setPageIndexExternal = (index) => {
    if (typeof index !== 'number') {
      console.error('Cannot set page index to non-numeric value:', index);
      return;
    }
    setPageIndex(index);
  };

  return [Component, setPageIndexExternal];
};
