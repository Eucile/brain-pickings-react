import React from "react";
import Donate from "./Donate";
import Labors from "./Labors";
import FavoriteList from "./FavoriteList";
import LaborsList from "./LaborsList";


function SideBar(){
  var sideBarStyle = {
    width: "600",
    borderRight: '1px solid #d9d9d9'
  };
  return (
    <div style={sideBarStyle}>
      <Donate/>
      <FavoriteList/>
      <LaborsList/>    
    </div>
  );
}
export default SideBar;