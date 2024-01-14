import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ card }) => {
  return Array(9)
    .fill(0)
    .map((val, i) => {
      return (
        <div className="card selekton" key={i}>
          <div className="py-10 px-2">
            <div className="md:ml-4">
              <Skeleton width={350} height={200} />
            </div>
            <div className="flex ">
              <div className=" flex justify-between w-[100%]">
                <div>
                  <p className="w-[80%] text-secondary font-bold">
                    <Skeleton width={150} count={2} />
                  </p>
                </div>
                <div>
                  <Skeleton count={2} width={100} />
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Skeleton width={200} height={50} />
            </div>
          </div>
        </div>
      );
    });
};

export default CardSkeleton;
