import React, { useEffect, useState } from "react";
import store from "../../store/store";

import { useDispatch, useSelector } from "react-redux";
import backgroundImg from "../../assets/videos.jpg";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { handleVideos } from "../../store/videosSlice";
const VideoHero = () => {
  const [query, setQuery] = useState("universe");
  const [newQuery, setNewQuery] = useState("universe");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const backgroudImg = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url(${backgroundImg})`,
    width: "100%",
    height: "85vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const handleSearhQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      dispatch(handleVideos({ query: query }));
    }
  };

  const handleClick = (e) => {
    if (query.length > 0) {
      dispatch(handleVideos({ query: query }));
    }
  };

  return (
    <section className="photohero px-5  " style={backgroudImg}>
      <div className="hero-warpper flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-pure text-center text-xl font-bold md:text-5xl">
            <strong className="block mb-1">Welcome . . .</strong>
            <span className="text-ternary px-1 ">Search Millions </span>
            Of Videos . . .{" "}
          </h1>
          <div className="mt-6 ">
            <form
              className="flex z-10"
              action="#"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                onChange={handleSearhQuery}
                type="text"
                onKeyUp={handleKeyPress}
                className="rounded-tl-2xl rounded-bl-2xl focus:outline-none md:w-[15rem] 
                lg:w-[18rem] md:px-3"
                placeholder="Search . . . "
              />
              <button
                onClick={handleClick}
                className="bg-ternary text-pure px-5 py-2 rounded-tr-2xl font-medium rounded-br-2xl"
              >
                Search
              </button>
              {/* <Button
                style={
                  "bg-ternary text-pure px-5 py-2 rounded-tr-2xl font-medium rounded-br-2xl"
                }
                text={"Search"}
                click={handleClick()}
              /> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
