import React from 'react';
import Example from './example';
import CodeSandbox from './code-sandbox';

const SimpleUsage = () => {
  return (
    <div>
      <Example
        title='Simple Usage'
        description='Heres a basic case where the parent component using usePaginator has
            all the data for each page.'
      >
        <CodeSandbox link='https://codesandbox.io/embed/usepaginator-simple-example-b3wnc?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview' />
      </Example>
    </div>
  );
};

export default SimpleUsage;
