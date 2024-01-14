import React, { useEffect } from "react";
import PhotoSlider from "../common/PhotoSlider";
import { useSelector } from "react-redux";

const Birds = () => {
  const birds = useSelector((state) => state?.photos?.data?.birds);

  return (
    <section>
      <div className="flex justify-center">
        <h2 className="text-center text-pure font-bold mb-5 text-[1.6rem] bg-ternary w-[70%] rounded-md md:w-[40%] lg:w-[20%]">
          Birds Images
        </h2>
      </div>
      <PhotoSlider photos={birds} />
    </section>
  );
};

export default Birds;
