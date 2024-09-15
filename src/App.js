import './css/App.css';
import Header from './components/Header/Header';
import ProductBoxes from './components/ProductBoxes/ProductBoxes';
import BottomMenu from './components/BottomMenu/BottomMenu';
import SimpleSlider from './components/Carousel/Carousel';


function App() {
  return (
    <div className="App">
      <Header />
      <SimpleSlider />
      <ProductBoxes/>
      <BottomMenu />
    </div>
  );
}

export default App;
