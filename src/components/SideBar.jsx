import React from "react";
import Donate from "./Donate";
import Labors from "./Labors";
import FavoriteList from "./FavoriteList";
import LaborsList from "./LaborsList";
import Also from "./Also";


function SideBar(){
  var underline = {
    width: 172,
    textTransform: 'lowercase',
    fontSize: '1.8em',
    margin: '0 0 .4em 0',
    borderBottom: '1px solid #8c8c8c',
    paddingTop: '1.2em',
    }
    var imgStyles = {
      maxWidth: 180,
    }
  var sideBarStyle = {
    width: "600",
    borderRight: '1px solid #d9d9d9',
  };
  return (
    <div style={sideBarStyle}>
      <Donate/>
      <h1 style={underline}>Also</h1>
      <img style={imgStyles} src="https://i2.wp.com/www.brainpickings.org/wp-content/uploads/2018/10/figuring_jacket_final.jpg?zoom=2&fit=320%2C486&ssl=1"/>
      <Also/>
      <h1 style={underline}>Labors of Love</h1>
      <FavoriteList/>
      <h1 style={underline}>Favorite Reads</h1>
      <LaborsList/>    
    </div>
  );
}
export default SideBar;