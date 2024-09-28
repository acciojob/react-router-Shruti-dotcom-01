import { BrowserRouter , Routes , Route } from "react-router-dom";
import React from "react";
import './../styles/App.css';
import Home from "./Home";
import About from "./About";


const App = () => {
  return (
    <BrowserRouter>
       <div>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
         </Routes>
       </div>
    </BrowserRouter>

  )
}

export default App
