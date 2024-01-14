import React from "react";
import pageNotFound from "../../assets/404.svg";
const FourZeroFour = () => {
  return (
    <section className="fourzerofour mt-[30vh] px-10">
      <div className="warpper flex">
        <div className="">
          <h2 className="text-pure text-9xl">Page Not Found !!!</h2>
        </div>

        <div>
          <img src={pageNotFound} alt="404" />
        </div>
      </div>
    </section>
  );
};

export default FourZeroFour;
