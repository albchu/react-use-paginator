import React from 'react';
import Example from './example';
import usePaginate from 'react-use-paginator';
import CodeSandbox from './code-sandbox';

const RenderPage = ({ index, name }) => {
  return (
    <div>
      this is a page made in app side with the !!{name}--{index}!!
    </div>
  );
};

const SideEffectsUsage = () => {
  const [SimplePage, setSimplePage] = usePaginate(RenderPage);

  return (
    <div>
      <Example title='Pages with side effects'>
        <div>
          <div>
            Just as with the simplest usage, the paginator can handle pages that
            involve side effects
          </div>
          <SimplePage name='elephantt' />
        </div>
      </Example>
    </div>
  );
};

export default SideEffectsUsage;
