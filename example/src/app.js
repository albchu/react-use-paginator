import React from 'react';
import './app.css';
import usePaginate from 'react-use-paginator';
import SimpleUsage from './simple-usage';
import SideEffectsUsage from './side-effects-usage';
import MaterialUIUsage from './material-ui-usage';

const UsageExample = ({ items }) => {
  const Usage = items[0];

  return (
    <div>
      <Usage />
    </div>
  );
};

/**
 * I see you have decided to look under the hood. Here's a bonus usage example as your reward.
 * usePaginator is actually the backbone of this entire demo app.
 * Each example page is simply a component and the hook handles how it renders.
 */
const App = () => {
  const { Component, setPageIndex } = usePaginate({
    PageComponent: UsageExample,
    maxPerPage: 1,
    data: [SimpleUsage, SideEffectsUsage, MaterialUIUsage],
  });

  return (
    <div className='app'>
      <div className='app__header'>
        <div className='app__title'>usePaginator</div>
        <div className='app__subtitle'>Usage Guide</div>
      </div>
      <div className='app__sidebar'>
        <div className='app__sidebar_option' onClick={() => setPageIndex(0)}>
          Simple Usage
        </div>
        {/* <div className='app__sidebar_option' onClick={() => setPageIndex(1)}>
          Pages with side effects
        </div>
        <div className='app__sidebar_option' onClick={() => setPageIndex(2)}>
          Usage with Material-UI
        </div> */}
      </div>
      <div className='app__main'>
        <Component />
      </div>
      <div className='app__footer' />
    </div>
  );
};

export default App;
