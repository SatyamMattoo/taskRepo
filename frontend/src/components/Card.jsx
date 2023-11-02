import React, { useContext, useEffect } from "react";
import { Context } from "../main";

const Card = ({ name, mrp, description,id }) => {
  const { cart, setCart, user } = useContext(Context);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = () => {
    console.log(user.email)
    const updatedCart = [
      ...cart,
      {
        id:id,
        name: name,
        mrp: mrp,
        description: description,
        userId: user.email,
      },
    ];
    setCart(updatedCart);
    alert("Added to cart");
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
            onClick={handleAddToCart}
            className="text-green-900 bg-green-300 hover:bg-green-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
