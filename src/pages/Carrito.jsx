import { useContext } from "react";
import { pizzaContext } from "../context/PizzaContextProvider";

export default function Carrito() {
  const { shopCart, setShopCart, setShopCartTotal } = useContext(pizzaContext);

  const clearCart=()=>{
    setShopCart([]);
    setShopCartTotal(0)
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="m-3 border p-4" style={{ width: "80vw" }}>
          <div>Detalles del Pedido</div>
          {shopCart != 0 ? (
            shopCart.map((item) => {
              return (
                <>
                  <div className="d-flex justify-content-between w-100">
                    <div className="d-flex gap-2 justify-content-start align-items-center">
                      <img src={item.img} alt="" style={{ width: "50px" }} />
                      <p className="m-0">
                        {" "}
                        {item.name[0].toUpperCase() + item.name.substring(1)}
                      </p>
                    </div>
                    <table className="d-flex gap-3 align-items-center justify-content-end m-0">
                      <tbody>
                        <tr className="d-flex justify-content-end align-items-center">
                          <td>
                            {" "}
                            <p className="text-success m-0">${(item.price*item.cant).toLocaleString()}</p>
                          </td>
                          <td>
                            <button className="btn btn-danger m-2">-</button>
                          </td>
                          <td key={item.id}>
                            <span className="p-2 text-center m-2">
                              {
                                shopCart.filter((pizza) => {
                                  return item.id === pizza.id;
                                }).length
                              }
                            </span>
                          </td>
                          <td>
                            <button className="btn btn-primary">+</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                  </div>
                  
                </>
              );
            }
            
           )
          )
           : (
            <h3>No tienes ítems en el Carrito</h3>
          )}
          <div className="w-100 d-flex justify-content-end align-items-end">
           <button className="btn btn-danger" onClick={clearCart}>Vaciar el Carrito ❌</button>

          </div>
        </div>
      </div>
    </>
  );
}
