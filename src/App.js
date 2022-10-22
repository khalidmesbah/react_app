import "./App.css";
import {
  Header,
  Slider,
  ProductsList,
  ProductDetails,
  About,
} from "./components/index";
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
          <Route path="products" element={<ProductsList />} />
          <Route path="product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
