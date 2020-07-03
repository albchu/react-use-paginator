import React, { useState, useCallback } from 'react';
import { chunk, getCircularIndex } from './utils';

export const usePaginator = ({ PageComponent, data = [], maxPerPage = 25 }) => {
  const pageItems = chunk(data, maxPerPage); // TODO: chunk in useMemo. Data could be massive and expensive to recompute per rerender
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
    nextPage,
    prevPage,
  };
};
