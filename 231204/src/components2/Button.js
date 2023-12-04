import React from "react";

const Button = ({ handleToggle, lang }) => {
  return <button onClick={handleToggle}>{lang}</button>;
};

export default Button;
