import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";
// import { getID, handleFetch } from "../../store/photosSlice";
import { useDispatch, useSelector } from "react-redux";
import SliderCard from "./SliderCard";
import CardSkeleton from "./CardSkeleton";

const PhotoSlider = ({ photos }) => {
  const [photosImg, setPhotosImg] = useState([]);

  useEffect(() => {
    setPhotosImg(photos);
  }, [photos]);
  const isLoading = useSelector((state) => state.photos.isLoading);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(isLoading);
  }, []);

  const responsive = {
    superLargeDesktop: {
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

  const skeletonPhotos = new Array(photosImg.length);
  return (
    <Carousel responsive={responsive} infinite={true}>
      {isLoading
        ? Array(9)
            .fill(0)
            .map((val, i) => {
              return <CardSkeleton key={i} />;
            })
        : photosImg?.photos?.length > 0 &&
          photosImg?.photos?.map((img, i) => {
            return (
              <div key={i}>
                <SliderCard img={img} />
              </div>
            );
          })}
    </Carousel>
  );
};

export default PhotoSlider;
