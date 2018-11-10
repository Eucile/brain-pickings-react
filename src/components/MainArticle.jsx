import React from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";

function MainArticle(){
  var mainArticleStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "970",
    marginBottom: '4em',
    marginTop: '2em',
  };
  return (
    <div style={mainArticleStyle}>
      <SideBar/>
      <MainContent/>
    </div>
  );
}
export default MainArticle;
