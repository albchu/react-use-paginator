import React from 'react';
import './app.css';
import usePaginate from 'react-use-paginator';
import Example from './example';

const App = () => {
  const [SimplePage, setSimplePage] = usePaginate();
  setSimplePage('nuts');

  return (
    <div className='app'>
      <div className='app__header'>
        <div className='app__title'>usePaginate</div>
        <div className='app__subtitle'>Usage Guide</div>
      </div>
      <div className='app__sidebar'>
        <div className='app__sidebar_option'>Simple Usage</div>
      </div>
      <div className='app__main'>
        <Example title='Simple Usage'>
          <div>
            <SimplePage name='elephantt' />
          </div>
        </Example>
      </div>
      <div className='app__footer' />
    </div>
  );
};

export default App;
