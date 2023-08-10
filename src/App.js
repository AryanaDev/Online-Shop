import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart/Cart"
import Nav from "./Components/Nav"
function App (){
    return (
     <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
     </div>
    )
}

export default App 