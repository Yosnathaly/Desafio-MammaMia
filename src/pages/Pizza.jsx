import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { pizzaContext } from "../context/PizzaContextProvider";

export default function Pizza() {
  const [pizza, setPizza] = useState();
  const { arrayPizzas, shopCart, setShopCart,  setShopCartTotal } = useContext(pizzaContext);
  const params = useParams();
  const navigate=useNavigate();


  const getPizza = async () => {
    return setPizza(arrayPizzas.filter((item) => item.id === params.id));
  };

  const handleClick=(e)=>{
    navigate("/")
  }

  const addToCart=(e)=>{
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

  }

  useEffect(() => {
    getPizza();
  }, []);
  console.log(arrayPizzas);
  console.log(pizza);

  return (
    <>
      {pizza ? (
        <div className="card m-3">
          <div className="row g-0">
            <div className="col-md-4 d-flex justify-content-center">
              <img
                src={pizza[0].img}
                className="img-fluid rounded"
                alt={`Imagen de Pizza ${pizza[0].name}`}

              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {pizza[0].name[0].toUpperCase() + pizza[0].name.substring(1)}
                </h5>
                <hr />
                <p className="card-text">{pizza[0].desc}</p>
                <hr />
                <dl>
                  <dt>
                    <p>Ingredientes:</p>
                  </dt>
                  {pizza[0].ingredients.map((item) => {
                    return (<dd key={item}>🍕 {item[0].toUpperCase()+item.substring(1)}</dd>);
                  })}
                </dl>
                <hr />
                <div className="card-text d-flex justify-content-between">
                  <h3>Precio: ${pizza[0].price.toLocaleString()}</h3>
                  <button className="btn btn-secondary" onClick={handleClick}>Volver</button>
                  <button className="btn btn-danger" onClick={addToCart} id={pizza[0].id}> Añadir 🛒</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
