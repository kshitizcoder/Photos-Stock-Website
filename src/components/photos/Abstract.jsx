import React, { useEffect } from "react";
import PhotoSlider from "../common/PhotoSlider";
import { useSelector } from "react-redux";
import CardSkeleton from "../common/CardSkeleton";

const Abstract = () => {
  const abstractData = useSelector((state) => state?.photos?.data?.abstract);

  return (
    <section>
      <div className="flex justify-center">
        <h2 className="text-center text-pure font-bold mb-5 text-[1.6rem] bg-ternary w-[70%] rounded-md md:w-[40%] lg:w-[20%]">
          Abstract Images
        </h2>
      </div>
      {/* <CardSkeleton  /> */}
      <PhotoSlider photos={abstractData} />
    </section>
  );
};

export default Abstract;
