import React, { lazy, Suspense } from "react";

import "./css/App.css";
import Header from "./components/Header/Header";


// import SimpleSlider from './components/Carousel/Carousel';

function App() {
  const Footer = lazy(() => import("./components/Footer/Footer"));
  const SimpleSlider = lazy(() => import("./components/Carousel/Carousel"));
  const ProductBoxes = lazy(() => import("./components/ProductBoxes/ProductBoxes"));

  return (
    <div className="App">
      <Header />

      <Suspense fallback={<div style={{ height: "168px",margin: "28px 0", }}></div>}>
        <SimpleSlider />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <ProductBoxes />
      </Suspense>

      

      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
