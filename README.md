# react-use-paginator

A simple yet configurable react hook for pagination. Functionally developed with hooks.

`usePaginator` handles the page to page operations performantly with no external dependencies (besides react). This enables development of paginated views quick and painlessly through simple declarative code.

[![NPM](https://img.shields.io/npm/v/react-use-paginator.svg)](https://www.npmjs.com/package/react-use-paginator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
  const { Component, nextPage, prevPage } = usePaginate({
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

## License

MIT © [albchu](https://github.com/albchu)
