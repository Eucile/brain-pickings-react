import React from "react";
import Donate from "./Donate";
import Labors from "./Labors";
import FavoriteList from "./FavoriteList";

function SideBar(){
  var sideBarStyle = {
    width: "600",
    borderRight: "1px solid gray"
  };
  return (
    <div style={sideBarStyle}>
      <Donate/>
      <FavoriteList/>
      <Labors/>    
    </div>
  );
}
export default SideBar;