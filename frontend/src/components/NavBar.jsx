import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { Context, server } from "../main";
import axios from "axios";

const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated, user } = useContext(Context);

  const logout = async () => {
    try {
      const { data } = await axios.get(`${server}/user/logout`, {
        withCredentials: true,
      });
      alert("Logged Out");
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
      setIsAuthenticated(true);
    }
  };

  return (
    <nav className="bg-violet-400 text-white fixed top-0 w-screen z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <h1>
            Welcome <p>{isAuthenticated ? user.name : ""}</p>
          </h1>
          <div className="flex justify-end items-center">
            <Link to={"/"} className="p-4 hover:bg-violet-500">
              Home
            </Link>
            {isAuthenticated ? (
              <Link to={"/dashboard"} className="p-4 hover:bg-violet-500">
                <div className="flex gap-1 justify-center items-center">
                  Dashboard
                  <BsCart />
                </div>
              </Link>
            ) : (
              <Navigate to={"/auth"} />
            )}
            {isAuthenticated ? (
              <></>
            ) : (
              <Link to={"/auth"} className="p-4 hover:bg-violet-500">
                Log In / Sign Up{" "}
              </Link>
            )}
            {isAuthenticated ? (
              <button onClick={logout} className="p-4 hover:bg-violet-500">
                Log Out
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
