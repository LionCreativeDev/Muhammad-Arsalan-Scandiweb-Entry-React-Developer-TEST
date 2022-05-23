import './App.css';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import SnackBar from './containers/snackbar';

import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Header from './containers/header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productdetail/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <SnackBar />
      </Router>
    </>
  );
}

export default App;
