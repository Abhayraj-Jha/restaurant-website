import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components

import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Cart from "./components/Cart";
 
function App() {



  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
