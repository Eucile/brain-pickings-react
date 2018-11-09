import React from "react";
import PropTypes from "prop-types";

function Labors(props){
  var thumbnailLabors = {
    width: 180,
  }
  return(
    <div>
      <img style={thumbnailLabors} src={props.image}/>
      <p>{props.teaser}</p>
    </div>
  );
}

Labors.propTypes = {
  image: PropTypes.string,
  teaser: PropTypes.string,
};

export default Labors;