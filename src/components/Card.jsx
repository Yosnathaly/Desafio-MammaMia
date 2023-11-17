import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pizzaContext } from "../context/PizzaContextProvider";

export default function Card() {
  const {arrayPizzas, shopCart, setShopCart, setShopCartTotal, shopCartTotal } = useContext(pizzaContext);
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/pizza/${e.target.id}`);
  };

  const addToCart = (e) => {
    const selectedItem = arrayPizzas.find((item) => item.id === e.target.id);
    const index= shopCart.findIndex((item)=>{item.id===selectedItem.id})

    if(index===-1){
      setShopCart([...shopCart,{id: selectedItem.id,
        price: selectedItem.price,
        name: selectedItem.name,
        img: selectedItem.img,
        cant:1}])
    } else{
      const newShopCart=[...shopCart];
      newShopCart[index].cant++;
      setShopCart(newShopCart);
    }
    
    setShopCartTotal(
      shopCart.reduce((acum, item) => {
        return (acum = acum + item.price);
      }, selectedItem.price)
    );

  };

  return (
    <> {    console.log("el shopCartTotal es ", shopCartTotal)}
    { console.log("el shopCart.length es ", shopCart.length)}
      {arrayPizzas.map((item) => {
        return (
          <div key={item.id} className="card" style={{ width: "30rem" }}>
            <img src={item.img} alt={`Imagen de Pizza ${item.name}`} />
            <div className="card-body">
              <h3 className="card-text">
                <strong>
                  {item.name[0].toUpperCase() + item.name.substring(1)}
                </strong>
              </h3>
              <hr />
              <dl>
                <dt>
                  <p>Ingredientes:</p>
                </dt>

                {item.ingredients.map((i) => {
                  return (
                    <dd key={i}>🍕 {i[0].toUpperCase() + i.substring(1)}</dd>
                  );
                })}
              </dl>

              <hr />
              <h3 className="card-text text-center">
                ${item.price.toLocaleString()}
              </h3>
              <div className="d-flex justify-content-around">
                <button
                  className="btn btn-info"
                  onClick={handleClick}
                  id={item.id}
                >
                  {" "}
                  Ver Más 👀
                </button>
                <button
                  className="btn btn-danger"
                  onClick={addToCart}
                  id={item.id}
                >
                  {" "}
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
