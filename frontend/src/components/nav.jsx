import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-evenly p-4 bg-gray-100 shadow-md">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-red-500 font-bold" : "text-blue-500"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "text-red-500 font-bold" : "text-blue-500"
        }
      >
        Profile
      </NavLink>

      <NavLink
        to="/wishlist"
        className={({ isActive }) =>
          isActive ? "text-red-500" : "text-blue-500"
        }
      >
        <FaRegHeart />
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? "text-red-500" : "text-blue-500"
        }
      >
        <CiShoppingCart />
      </NavLink>
    </nav>
  );
};

export default Nav;
