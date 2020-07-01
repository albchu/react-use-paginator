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

const SimpleUsage = () => {
  const [SimplePage, setSimplePage] = usePaginate(RenderPage);

  return (
    <div>
      <Example title='Simple Usage'>
        <div>
          <div>
            Heres a basic case where the parent component using usePaginator has
            all the data it needs already.
          </div>
          <SimplePage name='elephantt' />
          {/* <CodeSandbox link='https://codesandbox.io/s/night-sky-gfu42' /> */}
        </div>
      </Example>
    </div>
  );
};

export default SimpleUsage;
