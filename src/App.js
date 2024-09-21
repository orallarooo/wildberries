import React, { lazy, Suspense } from 'react';


import './css/App.css';
import Header from './components/Header/Header';
import ProductBoxes from './components/ProductBoxes/ProductBoxes';
import SimpleSlider from './components/Carousel/Carousel';


function App() {

  const Footer = lazy(() => import('./components/Footer/Footer'));
  
  return (
    <div className="App">
      <Header />
      <SimpleSlider />
      <ProductBoxes/>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
