import React, { lazy, Suspense } from 'react';


import './css/App.css';
import Header from './components/Header/Header';
import ProductBoxes from './components/ProductBoxes/ProductBoxes';
import BottomMenu from './components/BottomMenu/BottomMenu';
import SimpleSlider from './components/Carousel/Carousel';
import OverlayMenu from './components/OverlayMenu/OverlayMenu';
// import Footer from './components/Footer/Footer';


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


      <BottomMenu />
      {/* <OverlayMenu /> */}
    </div>
  );
}

export default App;
