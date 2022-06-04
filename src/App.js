import React from 'react';
import Hero from './components/Hero';
import Body from './components/Body';
import Filler from './components/Filler';

function App() {
  return (
    <React.Fragment>
      <div>
        <Hero />
        <Body />
        <Filler />
      </div>
    </React.Fragment>
  );
}

export default App;
