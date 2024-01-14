import React from "react";
import vidoe from "../../assets/videopalceholder.mp4";
function VideoCard({ vid }) {
  return (
    <section className="videocard md:ml-5">
      <div className="warpper">
        <video controls src={vid?.video_files[3]?.link}></video>
      </div>
    </section>
  );
}

export default VideoCard;
