import React from 'react';
import Hero from './components/Hero';
import Body from './components/Body';
import Filler from './components/Filler';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <div>
        <Hero />
        <Body />
        <Filler />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
