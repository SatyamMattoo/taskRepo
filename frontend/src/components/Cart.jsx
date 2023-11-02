import React, { useContext } from "react";
import { Context } from "../main";

const Cart = ({ name, mrp, description, id }) => {
  const { cart, setCart } = useContext(Context);

  const removeFromCart = (itemName) => {
    console.log(itemName)
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== itemName);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      
      return updatedCart;
    });
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md shadow-violet-400 z-0">
      <div className="p-5 flex flex-col justify-between h-full">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {name}
        </h5>
        <p className="text-base text-gray-500">Description: {description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-gray-900">
            Price: Rs.{mrp}
          </span>
          <button
            onClick={() => removeFromCart(id)}
            className="text-green-900 bg-red-300 hover:bg-red-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
