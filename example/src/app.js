import React from 'react';
import './app.css';
import usePaginate from 'react-use-paginator';
import SimpleUsage from './simple-usage';
import SideEffectsUsage from './side-effects-usage';
import MaterialUIUsage from './material-ui-usage';

const RenderPage = ({ index }) => {
  return (
    <div>
      {index === 0 && <SimpleUsage />}
      {index === 1 && <SideEffectsUsage />}
      {index === 2 && <MaterialUIUsage />}
    </div>
  );
};

const App = () => {
  const [UsagePage, setUsagePage] = usePaginate(RenderPage);

  return (
    <div className='app'>
      <div className='app__header'>
        <div className='app__title'>usePaginate</div>
        <div className='app__subtitle'>Usage Guide</div>
      </div>
      <div className='app__sidebar'>
        <div className='app__sidebar_option' onClick={() => setUsagePage(0)}>
          Simple Usage
        </div>
        <div className='app__sidebar_option' onClick={() => setUsagePage(1)}>
          Pages with side effects
        </div>
        <div className='app__sidebar_option' onClick={() => setUsagePage(2)}>
          Usage with Material-UI
        </div>
      </div>
      <div className='app__main'>
        <UsagePage />
      </div>
      <div className='app__footer' />
    </div>
  );
};

export default App;
