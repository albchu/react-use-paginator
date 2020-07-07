import React, { useState, useCallback, useMemo } from 'react';
import { chunk, getCircularIndex } from './utils';

export const usePaginator = ({ PageComponent, data = [], maxPerPage = 25 }) => {
  const [pageIndex, setPageIndex] = useState(0);

  const pageItems = useMemo(() => chunk(data, maxPerPage), [data, maxPerPage]);

  const numPages = pageItems.length;

  const nextPage = () =>
    setPageIndex(getCircularIndex(pageIndex + 1, numPages));
  const prevPage = () =>
    setPageIndex(getCircularIndex(pageIndex - 1, numPages));

  const setPageIndexExternal = (index) => {
    if (typeof index !== 'number') {
      console.error('Cannot set page index to non-numeric value:', index);
      return;
    }

    if (index < 1) {
      console.error(
        'Cannot set page index to invalid number. Expecting page index minimum of 1 but got:',
        index,
      );
      return;
    }

    setPageIndex(index - 1);
  };

  const Component = useCallback(
    (props) => (
      <PageComponent
        {...props}
        index={pageIndex + 1} // Hot take: Array indexes start at zero, but pages start at 1. Please dont @ me
        items={pageItems[pageIndex]}
      />
    ),
    [pageIndex, pageItems],
  );

  return {
    Component,
    setPageIndex: setPageIndexExternal,
    onNextPage: nextPage,
    onPrevPage: prevPage,
    pageItems: pageItems[pageIndex],
    nextPage,
    prevPage,
    currentPage: pageIndex + 1,
    hasNextPage: pageIndex + 1 < numPages,
    totalPages: numPages,
  };
};
