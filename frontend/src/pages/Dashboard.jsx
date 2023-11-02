import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { Context } from "../main";
import Cart from "../components/Cart";

const Dashboard = () => {
  const { cart, setCart, user } = useContext(Context);

  const [userCartItems, setUserCartItems] = useState([]);

  useEffect(() => {
    const filteredItems = cart.filter((item) => item.userId === user.email);
    setUserCartItems(filteredItems);
    localStorage.setItem("userCart", JSON.stringify(filteredItems));
  }, [cart, user]);

  useEffect(() => {
    // Fetch cart items from local storage when component mounts
    const storedCart = localStorage.getItem("userCart");
    if (storedCart) {
      setUserCartItems(JSON.parse(storedCart));
    }
  }, []);

  const sum = userCartItems.reduce(
    (total, item) => total + Number(item.mrp),
    0
  );

  return (
    <section className="min-h-screen p-4">
      <div className="containter mx-auto relative top-20">
        <div className="flex flex-col">
          <div className="h-1 w-1/2 self-start mx-8 my-4 bg-gradient-to-r from-violet-500 via-violet-200 to-transparent"></div>
          <h1 className="text-2xl text-center text-violet-500">
            Items in your Cart
          </h1>
          <div className="w-1/2 h-1 mx-8 my-4 self-end bg-gradient-to-r from-transparent via-violet-200 to-violet-500 mb-6"></div>
          <div className="container">
            <h1 className="text-2xl text-center text-violet-400 m-4">
              Total Price: Rs. {sum}
            </h1>
          </div>
          <div className="container m-auto ">
            <div className="flex flex-wrap gap-4 mb-4">
              {userCartItems.map((item, index) => (
                <Cart
                  key={index}
                  id={item.id}
                  name={item.name}
                  mrp={item.mrp}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
