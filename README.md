# react-use-paginator

A simple yet configurable react hook for pagination. Functionally developed with hooks.

`usePaginator` handles the page to page operations performantly with no external dependencies (besides react). This enables development of paginated views quick and painlessly through simple declarative code.

[![NPM](https://img.shields.io/npm/v/react-use-paginator.svg)](https://www.npmjs.com/package/react-use-paginator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demos

Handful of usage demos can be found on the [usage guide](https://albchu.github.io/react-use-paginator/).

## Install

```bash
npm install --save react-use-paginator
```

## Usage

```jsx
import React from 'react';

import usePaginator from 'react-use-paginator';

const Page = ({ items, index }) => {
  return (
    <div>
      <div>This is page {index}</div>
      <div>It contains the following items:</div>
      {items.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

const Paginated = ({ data }) => {
  const { Component, nextPage, prevPage } = usePaginator({
    PageComponent: Page,
    maxPerPage: 5,
    data,
  });

  return (
    <div>
      <Component />
      <div>
        <Button onClick={prevPage}>Prev</Button>
        <Button onClick={nextPage}>Next</Button>
      </div>
    </div>
  );
};

const App = () => {
  const data = ['Foo1', 'Bar1', 'Foo2', 'Bar2', 'Foo3', 'Bar3', 'Foo4', 'Bar4'];

  return <Paginated data={data} />;
};
```

## Input Arguments

```jsx
const input = {...}
const output = usePaginator(input)
```

| Option          | Type                                                     | Description                                                                                                                                                                                                   |
| --------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PageComponent` | Functional component with signature: `(props) => <div/>` | A react component to be used in rendering specific page contents. Component will receive `index` and `items` as input props in addition to any props you specify when rendering the output Component          |
| `data`          | Array                                                    | Input data that needs to be paginated. The hook will split the data into `items` per page made available to the `PageComponent`                                                                               |
| `maxPerPage`    | Number                                                   | Default: `25`. Optional to be set. Will split the input `data` into as many pages as there is data. Ex: 80 items in `data` would have 4 total pages to render. 3 pages of 25 items and a last page of 5 items |

## Output Values

The output of the hook is an array of values to use in order to render your component exactly how you need it.

```jsx
const { ...output } = usePaginator(input);
```

| Option         | Type                                  | Description                                                                                                                                                                                                                      |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Component`    | React Component                       | This is the input `PageComponent` with a specific page's `items` made available through props. Simply render with `<Component />` anywhere on your page.                                                                         |
| `setPageIndex` | Function signature `(index) => {...}` | Set the page index directly for use cases where you need to traverse directly to certain pages. This "index" value starts at `1` because all pages do as well. **No numbers less than 1 are acceptable**                         |
| `nextPage`     | Function signature `() => {...}`      | Set the page index directly to the next page. A shortcut to prop into most buttons simply with `onClick={nextPage}`. This function will automatically roll around to page 1 when called on the last page of results.             |
| `prevPage`     | Function signature `() => {...}`      | Set the page index directly to the previous page. A shortcut to prop into most buttons simply with `onClick={prevPage}`. This function will automatically roll around to the last page when called on the first page of results. |
| `currentPage`  | Number                                | The current page index being shown. Starts at `1`.                                                                                                                                                                               |
| `totalPages`   | Number                                | The total number of pages. Essentially this is the ceiling integer value of: `data.length` / `maxPerPage`. But why calculate that yourself when the hook has it available already?                                               |
| `hasNextPage`  | Boolean                               | Either true or false depending if there is another page to render                                                                                                                                                                |

## License

MIT © [albchu](https://github.com/albchu)
