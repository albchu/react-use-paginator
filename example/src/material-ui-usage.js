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

const MaterialUIUsage = () => {
  const [SimplePage, setSimplePage] = usePaginate(RenderPage);

  return (
    <div>
      <Example title='Usage with Material-UI'>
        <div>
          <div>
            Completely supports use of Material UI components and JSS styling
          </div>
          <SimplePage name='elephantt' />
        </div>
      </Example>
    </div>
  );
};

export default MaterialUIUsage;
