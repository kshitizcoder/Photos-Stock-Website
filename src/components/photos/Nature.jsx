import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PhotoSlider from "../common/PhotoSlider";

const Nature = () => {
  const nature = useSelector((state) => state?.photos?.data?.nature);

  return (
    <section className="mt-[7vh] ">
      <div className="flex justify-center">
        <h2 className="text-center text-pure font-bold mb-5 text-[1.6rem] bg-ternary w-[70%] rounded-md md:w-[40%] lg:w-[20%]">
          Nature Images
        </h2>
      </div>
      <div>
        <PhotoSlider photos={nature} />
      </div>
    </section>
  );
};

export default Nature;
