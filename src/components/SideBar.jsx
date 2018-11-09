import React from "react";
import Donate from "./Donate";
import Labors from "./Labors";
import Favorite from "./Favorite";

function SideBar(){
  var sideBarStyle = {
    width: "20",
    borderRight: "1px solid gray"
  };
  return (
    <div style={sideBarStyle}>
      <Donate/>
      <Favorite/>
      <Labors/>    
    </div>
  );
}
export default MainArticle;