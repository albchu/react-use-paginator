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

    if (index > numPages) {
      console.warn(
        `The page index has been explicitly set to ${index}. There are only ${numPages} total pages.`,
      );
    }

    setPageIndex(index - 1);
  };

  const currentItems = useMemo(() => {
    return pageItems[pageIndex] || [];
  }, [pageItems, pageIndex]);

  // Hot take: Array indices start at zero, but page indices start at 1. Please dont @ me
  const pageIndexExternal = pageIndex + 1;

  const Component = useCallback(
    (props) => (
      <PageComponent
        {...props}
        index={pageIndexExternal}
        items={currentItems}
      />
    ),
    [pageIndex, PageComponent, currentItems],
  );

  return {
    Component,
    setPageIndex: setPageIndexExternal,
    onNextPage: nextPage,
    onPrevPage: prevPage,
    pageItems: currentItems,
    nextPage,
    prevPage,
    currentPage: pageIndexExternal,
    hasNextPage: pageIndexExternal < numPages,
    totalPages: numPages,
  };
};
