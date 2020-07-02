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

const ParentPropsUsage = () => {
  // const [SimplePage, setSimplePage] = usePaginate(RenderPage);

  return (
    <div>
      <Example title='Pages with side effects'>
        <div>
          <div>
            Sometimes you may need to keep each page updated with values
            changing in the parent. With usePaginator, you can declaratively
            pass those into the page component.
          </div>
          <SimplePage name='elephantt' />
        </div>
      </Example>
    </div>
  );
};

export default ParentPropsUsage;
