import React from "react";
import PropTypes from "prop-types";
import FavoriteList from "./FavoriteList";

function Favorite(props){
  var thumbnail = {
    width: 180,
  }
  return(
    <div>
      <img style={thumbnail} src={props.image}/>
      <p>{props.teaser}</p>
    </div>
  );
}

Favorite.propTypes = {
  image: PropTypes.string,
  teaser: PropTypes.string,
};

export default Favorite;