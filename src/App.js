import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart/Cart";
import Nav from "./Components/Nav";
import { ShopContextProvider } from "./Context/ShopContext";


function App() {
  return (
      <div className="App">
          <ShopContextProvider>
              <Router>
                  <Nav />
                  <Routes>
                      <Route path="/" element={<Shop />} />
                      <Route path="/cart" element={<Cart />} />
                  </Routes>
              </Router>
          </ShopContextProvider>
      </div>
  );
}

export default App;
