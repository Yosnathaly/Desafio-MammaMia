import { createContext, useEffect, useState } from "react";

export const pizzaContext=createContext()

export default function PizzaContextProvider({children}){

    const [arrayPizzas,setPizzas]=useState([]);
    const [shopCart,setShopCart]=useState([]);
    const [shopCartTotal,setShopCartTotal]=useState(0);




    const getData=async ()=>{

        try {
        const res= await fetch("../pizzas.json");
        const data= await res.json();
        
        setPizzas(data);
            
        } catch (error) {
            alert(error)
        }
        
    }

    useEffect(()=>{getData()},[])



    return(
        <pizzaContext.Provider value={{arrayPizzas,shopCartTotal, shopCart, setShopCart, setShopCartTotal }}>
            {children}
        </pizzaContext.Provider>
    )
}