import React from "react";
import MainContent from "./MainContent";

function MainArticle(){
  var mainArticleStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "970",
    marginLeft: "auto",
    marginRight: "auto",
  };
  return (
    <div style={mainArticleStyle}>
      <MainContent/>
    </div>
  );
}
export default MainArticle;
