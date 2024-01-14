import React, { useEffect, useState } from "react";
import { handleVideos } from "../../store/videosSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchVideos = () => {
  const dispatch = useDispatch();

  const video = useSelector((state) => state?.videos?.data?.vid);

  return (
    <section className="searchVideos  px-10 py-10">
      {video.hits?.length > 0 && (
        <div className="flex justify-center items-center">
          <h2 className="bg-ternary font-bold text-center  lg:w-[20%] lg:text-3xl px-5 py-2 rounded-md text-pure">
            Search Videos
          </h2>
        </div>
      )}
      <div className="warpper">
        <div className="videosserach md:grid md:grid-cols-2 lg:grid-cols-4 gap-5  mt-[5rem]">
          {video?.hits?.length > 0 &&
            video?.hits?.map((vid, i) => {
              return (
                <div className="vid" key={i}>
                  <video src={vid?.videos?.large?.url} controls></video>
                  {/* <h1 className="text-pure">{vid?.duration}</h1> */}
                </div>
                //videos.video_files[0].link
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default SearchVideos;
