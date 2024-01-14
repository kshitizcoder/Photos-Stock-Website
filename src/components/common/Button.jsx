import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ style, path, text, onClick }) => {
  return (
    <NavLink onClick={onClick} to={path} className={style}>
      {text}
    </NavLink>
  );
};

export default Button;
