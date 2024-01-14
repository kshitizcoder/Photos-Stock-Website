import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross, ImSearch } from "react-icons/im";
import { BsBasket2Fill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <nav className="navbar absolute top-0 left-0 z-10 container py-5 px-3 mx-auto flex justify-between items-center">
      <div className="logo">
        <NavLink
          to="/"
          className="flex items-center  font-bold text-3xl px-4 rounded-2xl bg-pure"
        >
          horizon<span className="text-secondary  ">Stock</span>
        </NavLink>
      </div>

      <ul
        className={
          Mobile
            ? " py-7  absolute transition-all px-6  ease-in-out flex flex-col items-start left-0 top-[7%] w-full"
            : " hidden md:flex  md:w-full md:items-center md:justify-end "
        }
        onClick={() => setMobile(false)}
      >
        <NavLink
          to="/"
          className=" mt-9 text-[1.1rem] text-pure font-medium md:mt-5  lg:mt-0 md:mr-9"
        >
          <li>Photos</li>
        </NavLink>
        <NavLink
          to="/videos"
          className="mt-9 text-[1.1rem] text-pure font-medium md:mt-5 lg:mt-0 md:mr-9"
        >
          <li>Videos</li>
        </NavLink>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? (
          <ImCross className="md:hidden text-pure" />
        ) : (
          <FaBars className="md:hidden text-pure" />
        )}
      </button>
    </nav>
  );
};

export default NavBar;
