import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "./Button";
import { useDispatch } from "react-redux";
import SliderCard from "./SliderCard";
import CardSkeleton from "./CardSkeleton";
import VideoCard from "./VideoCard";

const VideoSlider = ({ videos }) => {
  const [videosClip, setvideosClip] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setvideosClip(videos);
  }, [videos]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <Carousel responsive={responsive} infinite={true}>
      {videosClip?.videos?.length > 0 &&
        videosClip?.videos?.map((video, i) => {
          return loading ? (
            <CardSkeleton key={i} />
          ) : (
            <VideoCard vid={video} key={i} />
          );
        })}
    </Carousel>
  );
};

export default VideoSlider;
