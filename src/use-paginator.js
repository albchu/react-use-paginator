import React, { useState, useCallback } from 'react';
import { chunk, getCircularIndex } from './utils';

export const usePaginator = ({ PageComponent, data = [], maxPerPage = 25 }) => {
  const pageItems = chunk(data, maxPerPage);
  const numPages = pageItems.length;

  const [pageIndex, setPageIndex] = useState(0);

  const nextPage = () =>
    setPageIndex(getCircularIndex(pageIndex + 1, numPages));
  const prevPage = () =>
    setPageIndex(getCircularIndex(pageIndex - 1, numPages));

  const setPageIndexExternal = (index) => {
    if (typeof index !== 'number') {
      console.error('Cannot set page index to non-numeric value:', index);
      return;
    }

    setPageIndex(index);
  };

  const Component = useCallback(
    (props) => (
      <PageComponent
        {...props}
        index={pageIndex + 1} // Hot take: Array indexes start at zero, but pages start at 1. Dont @ me
        items={pageItems[pageIndex]}
      />
    ),
    [pageIndex, pageItems],
  );

  return {
    Component,
    setPageIndex: setPageIndexExternal,
    nextPage,
    prevPage,
  };
};
