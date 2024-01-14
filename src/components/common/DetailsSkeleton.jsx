import React from "react";
import Skeleton from "react-loading-skeleton";

const DetailsSkeleton = () => {
  return (
    <section className="photo-details px-10 mt-[8rem] py-10">
      <div className="wrapper lg:flex  justify-evenly items-center ">
        <div className="photodetails">
          <Skeleton width={500} height={500} />
        </div>
        <div className="details lg:ml-10 mt-[2rem] ">
          <div className=" text-center font-bold text-pure rounded-sm">
            <Skeleton width={200} />
          </div>
          <h1 className="text-pure mt-[1rem]">
            {" "}
            <Skeleton width={200} />
          </h1>
          <h2 className="text-pure  my-5">
            <Skeleton width={200} />
          </h2>

          <div className="flex mt-4 ">
            <h3 className="text-pure ">
              <Skeleton width={200} />
            </h3>
            <h3 className="text-pure ml-4  border-l-2 pl-5 border-l-pure">
              <Skeleton width={200} />
            </h3>
          </div>
          <div className="btn mt-[3rem] flex justify-center">
            <Skeleton width={200} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSkeleton;
