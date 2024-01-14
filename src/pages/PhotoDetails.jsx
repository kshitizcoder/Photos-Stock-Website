import React, { useState } from "react";
import { handleDetailsFetch } from "../store/detailsSclice";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import DetailsSkeleton from "../components/common/DetailsSkeleton";
const PhotoDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleDetailsFetch(id));
  }, [id]);
  const photoDetailsData = useSelector(
    (state) => state.details.data.photoDetails
  );
  const isLoading = useSelector((state) => state.details.isLoading);

  return (
    <div>
      {isLoading ? (
        <DetailsSkeleton />
      ) : (
        <section className="photo-details px-10 mt-[8rem] py-10">
          <div className="wrapper lg:flex  justify-evenly items-center ">
            <div className=" photodetails">
              <img src={photoDetailsData?.src?.large} />
            </div>
            <div className="details lg:ml-10 mt-[2rem] ">
              <div className="bg-secondary text-center font-bold text-pure rounded-sm">
                Photo Details
              </div>
              <h1 className="text-pure mt-[1rem]">
                {" "}
                Title:
                <span className="ml-5 text-secondary font-semibold ">
                  {photoDetailsData?.alt}
                </span>
              </h1>
              <h2 className="text-pure  my-5">
                Photographer:{" "}
                <span className="ml-5 text-secondary  font-semibold ">
                  {photoDetailsData?.photographer}
                </span>{" "}
              </h2>

              <div className="flex mt-4 ">
                <h3 className="text-pure ">
                  Height:{" "}
                  <span className="md:ml-5 text-secondary font-semibold ">
                    {photoDetailsData?.height}px
                  </span>{" "}
                </h3>
                <h3 className="text-pure ml-4  border-l-2 pl-5 border-l-pure">
                  width:
                  <span className="md:ml-5 text-secondary font-semibold ">
                    {photoDetailsData?.width} px
                  </span>{" "}
                </h3>
              </div>
              <div className="btn mt-[3rem] flex justify-center">
                <NavLink
                  to={photoDetailsData?.url}
                  className="bg-secondary font-medium px-[4rem] py-[.5rem] text-center text-pure rounded-md"
                >
                  See Original Image
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PhotoDetails;
