import React, { lazy, Suspense } from "react";

import "./css/App.css";
import Header from "./components/Header/Header";
import ProductBoxes from "./components/ProductBoxes/ProductBoxes";
// import SimpleSlider from './components/Carousel/Carousel';

function App() {
  const Footer = lazy(() => import("./components/Footer/Footer"));
  const SimpleSlider = lazy(() => import("./components/Carousel/Carousel"));

  return (
    <div className="App">
      <Header />

      <Suspense
        fallback={
          <div
            style={{
              height: "168px",
              margin: "28px 0",
            }}
          ></div>
        }
      >
        <SimpleSlider />
      </Suspense>

      <ProductBoxes />

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
