import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import PizzaContextProvider from "./context/PizzaContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <PizzaContextProvider>
        <App />
      </PizzaContextProvider>
    </BrowserRouter>

);
