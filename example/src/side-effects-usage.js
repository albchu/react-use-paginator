import React from 'react';
import Example from './example';
import CodeSandbox from './code-sandbox';

const SideEffectsUsage = () => {
  return (
    <div>
      <Example
        title='Pages with side effects'
        description='Just as with the simplest usage, the paginator can handle pages that
            involve side effects. Here is a simple example using the Star Wars API which includes a loading state while the data loads.'
      >
        <CodeSandbox link='https://codesandbox.io/embed/usepaginator-side-effects-usage-4bki2?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview' />
      </Example>
    </div>
  );
};

export default SideEffectsUsage;
