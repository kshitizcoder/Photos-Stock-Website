import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/common/Navbar";
import { Routes, Route } from "react-router-dom";
import Photos from "./pages/Photos";
import { handleFetch } from "./store/photosSlice";
import { useDispatch } from "react-redux";
import store from "./store/store";
import PhotoDetails from "./pages/PhotoDetails";
import PhotoSearch from "./pages/PhotoSearch";
import { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import VideoHero from "./components/videos/VideoHero";
import Videos from "./pages/videos/Videos";
import { handleVideos } from "./store/videosSlice";
import Footer from "./components/common/Footer";
import FourZeroFour from "./components/common/FourZeroFour";
const App = () => {
  // const { dispatch } = store;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetch());
  }, [handleFetch]);
  useEffect(() => {
    dispatch(handleVideos());
  }, [handleFetch]);
  return (
    <>
      <NavBar />
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Routes>
          <Route path="/" element={<Photos />} />
          <Route path="/photodetails/:id" element={<PhotoDetails />} />
          <Route path="/photossearch/:query" element={<PhotoSearch />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
        {/* <div className="spacer h-[200vh]"></div> */}
        {/* <Nature /> */}
        <Footer />
      </SkeletonTheme>
    </>
  );
};

export default App;
