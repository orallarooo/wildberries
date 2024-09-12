import './css/App.css';
import Header from './components/Header/Header';
import ProductBoxes from './components/ProductBoxes/ProductBoxes';
import BottomMenu from './components/BottomMenu/BottomMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductBoxes/>
      <BottomMenu />
    </div>
  );
}

export default App;
