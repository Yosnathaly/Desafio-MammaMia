
import { Route, Routes } from "react-router-dom";
import "../assets/App.css";
import Carrito from "../pages/Carrito";
import Home from "../pages/Home";
import Pizza from "../pages/Pizza";


import Header from "./Header";

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pizza/:id" element={<Pizza/>} />
        <Route path="/carrito" element={<Carrito/>} />
      </Routes>
    </div>
  );
}

export default App;
