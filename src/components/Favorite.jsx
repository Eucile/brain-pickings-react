import React from "react";
import PropTypes from "prop-types";

function Favorite(props){
  var thumbnail = {
    width: 180,
  }
  return(
    <div>
      <img style={thumbnail} src={props.image}/>
      <a href={props.url}><p>{props.teaser}</p></a>
    </div>
  );
}

Favorite.propTypes = {
  image: PropTypes.string,
  teaser: PropTypes.string,
  url: PropTypes.string,
};

export default Favorite;