import './css/App.css';
import Header from './components/Header/Header';
import ProductBoxes from './components/ProductBoxes/ProductBoxes';
import BottomMenu from './components/BottomMenu/BottomMenu';
import SimpleSlider from './components/Carousel/Carousel';
import OverlayMenu from './components/OverlayMenu/OverlayMenu';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <SimpleSlider /> */}
      <ProductBoxes/>
      <Footer />
      <BottomMenu />
      {/* <OverlayMenu /> */}
    </div>
  );
}

export default App;
