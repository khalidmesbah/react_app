// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <ProductsList />
              </>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="product/:productId" element={<ProductDetails  />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
