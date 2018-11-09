import React from "react";
import Logo from "./Logo";
import { Link } from 'react-router-dom';

function Header(){
  var HeaderStyles = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };
  return (
    <div style={HeaderStyles}>
      <Logo/>
    </div>
  );
}

export default Header;
