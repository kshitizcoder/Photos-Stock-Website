import React from "react";
// FaFacebookF
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer text-pure py-10 px-10">
      <div className="wrapper flex justify-center items-center flex-col ">
        <div className="footlinks">
          <ul className="flex flex-col items-center  justify-center md:flex-row ">
            <li className="mr-5 ">Terms Of Use</li>
            <li className="mr-5 mt-5 md:mt-0 ">Privacy-Policy</li>
            <li className="mr-5 mt-5 md:mt-0">About</li>
            <li className="mt-5 md:mt-0">Blog</li>
          </ul>
        </div>
        <div className="flex justify-center text-center my-5">
          <p className="md:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui velit,
            quos nulla ea repellat ipsa, dolore maiores voluptatum nihil veniam
            perferendis ullam tempore enim aspernatur debitis fugit voluptatibus
            at eius. Ipsum quibusdam nam dignissimos impedit corrupti corporis,
            dolor excepturi eligendi. Quibusdam impedit velit placeat eligendi.
          </p>
        </div>
        <div className="social_links flex">
          <FaFacebookF
            className="mr-8 text-5xl transition-all	ease-in	duration-[.3s] px-[.7rem]
          py-[.5rem] hover:text-secondary "
          />{" "}
          <FaInstagram className="mr-8 text-5xl transition-all	ease-in	duration-[.3s] p-1 hover:text-secondary " />{" "}
          <FaTwitter className="mr-8 text-5xl transition-all	ease-in	duration-[.3s] p-1 hover:text-secondary " />{" "}
          <FaLinkedinIn className="text-5xl transition-all	ease-in	duration-[.3s] p-1 hover:text-secondary " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
