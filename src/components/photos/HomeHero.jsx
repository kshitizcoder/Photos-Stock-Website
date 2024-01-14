import React, { useEffect, useState } from "react";
import store from "../../store/store";

import { useSelector } from "react-redux";
import backgroundImg from "../../assets/background.jpg";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
const HomeHero = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const backgroudImg = {
    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,url(${backgroundImg})`,
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const handleSearhQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/photossearch/${query}`);
    }
  };

  const handleClick = (e) => {
    if (query.length > 0) {
      navigate(`/photossearch/${query}`);
    }
  };
  const handleSumbit = (event) => {
    event.preventDefault();
  };
  return (
    <section className="photohero px-5  " style={backgroudImg}>
      <div className="hero-warpper flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-pure text-center text-xl font-bold md:text-5xl">
            <strong className="block mb-1">Welcome . . .</strong>
            <span className="text-secondary px-1 ">Search Millions </span>
            Of Images . . .{" "}
          </h1>
          <div className="mt-6 ">
            <form className="flex z-10" action="#" onSubmit={handleSumbit}>
              <input
                onChange={handleSearhQuery}
                type="text"
                onKeyUp={handleKeyPress}
                value={query}
                className="rounded-tl-2xl px-3 rounded-bl-2xl focus:outline-none md:w-[15rem] 
                lg:w-[18rem] md:px-3"
                placeholder="Search . . . "
              />
              <Button
                style={
                  "bg-secondary text-pure px-5 py-2 rounded-tr-2xl rounded-br-2xl"
                }
                text={"Search"}
                onClick={handleClick}
              />
            </form>
          </div>
          <button onClick={() => console.log(num)}></button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
