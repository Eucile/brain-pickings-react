import React from "react";
import image from "../assets/images/logo.png";

function Logo(){  
  var logoBox = {
  display: "flex",
  maxWidth: 970,
  marginLeft: "auto",
  marginRight: "auto",
  background: "white",
  flexFlow: "column nowrap"
  }
  var logoStyles = {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",  
  }
  return (
    <div style={logoBox}>
      <a href="/"><img style={logoStyles} src={image}/></a>
    </div>
  );
}

export default Logo;
