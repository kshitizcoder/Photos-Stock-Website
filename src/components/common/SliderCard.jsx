import React from "react";
import Button from "./Button";
import { NavLink, Link } from "react-router-dom";
const SliderCard = ({ img }) => {
  return (
    <div className="py-10 px-2">
      <div className="md:ml-4">
        <img src={img?.src?.landscape} alt="" />
      </div>
      <div>
        <div className="md:mx-4 flex justify-between">
          <div>
            <p className="w-[80%] text-secondary font-bold">
              Title: <span className="text-pure font-medium">{img?.alt}</span>{" "}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-secondary ">photographer:</h4>
            <p className="text-pure">{img?.photographer}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link to={`/photodetails/${img.id}`}>
          <Button
            onClick={() => handleId(img.id)}
            style={
              "bg-secondary text-pure px-5 py-3 transition ease-in-out rounded-md hover:-translate-y-1 hover:scale-110 duration-300"
            }
            text={"See Details "}
          />
        </Link>
      </div>
    </div>
  );
};

export default SliderCard;
