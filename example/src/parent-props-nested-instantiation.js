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

const ParentPropsInstantiationUsage = () => {
  // const [SimplePage, setSimplePage] = usePaginate(RenderPage);

  return (
    <div>
      <Example title='Pages with side effects'>
        <div>
          <div>
            As an alternative way to accept parent props in each page component,
            the rendering component could also be instantiated inside the parent
            like the following example. This could be considered an anti-pattern
            for its unconventionalism, but you can definitely do it if your
            usecase requires it!
          </div>
          <SimplePage name='elephantt' />
        </div>
      </Example>
    </div>
  );
};

export default ParentPropsInstantiationUsage;
