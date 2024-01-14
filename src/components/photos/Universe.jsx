import React from "react";
import PhotoSlider from "../common/PhotoSlider";
import { useSelector } from "react-redux";

const Universe = () => {
  const universe = useSelector((state) => state?.photos?.data?.universe);
  return (
    <section className="mt-">
      <div className="flex justify-center">
        <h2 className="text-center text-pure font-bold mb-5 text-[1.6rem] bg-ternary w-[70%] rounded-md md:w-[40%] lg:w-[20%]">
          Universe Images
        </h2>
      </div>
      <PhotoSlider photos={universe} />
    </section>
  );
};

export default Universe;
