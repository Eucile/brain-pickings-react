import React from "react";
import Donate from "./Donate";
import Labors from "./Labors";
import FavoriteList from "./FavoriteList";
import LaborsList from "./LaborsList";


function SideBar(){
  var underline = {
    width: 172,
    textTransform: 'lowercase',
    fontSize: '1.8em',
    margin: '0 0 .4em 0',
    borderBottom: '1px solid #8c8c8c',
    paddingTop: '1.2em',
    }
  var sideBarStyle = {
    width: "600",
    borderRight: '1px solid #d9d9d9'
  };
  return (
    <div style={sideBarStyle}>
      <Donate/>
      <h1 style={underline}>Labors of Love</h1>
      <FavoriteList/>
      <h1 style={underline}>Favorite Reads</h1>
      <LaborsList/>    
    </div>
  );
}
export default SideBar;