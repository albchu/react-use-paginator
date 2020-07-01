import React, { useState, useEffect } from 'react';

export const usePaginate = (PageComponent) => {
  console.log('hello this is usePaginate. WIP. Come back in a week please.');
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

  const Component = (props) => <PageComponent {...props} index={pageIndex} />;

  return [Component, setPageIndexExternal];
};
