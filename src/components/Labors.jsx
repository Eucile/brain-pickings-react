import React from "react";
import PropTypes from "prop-types";

function Labors(props){
  var thumbnailLabors = {
    width: 180,
  }
  return(
    <div>
    <style jsx>{`
      p {
        width: 172px;
      }
      span {
        line-height: 1.8em;
        width: 172px;
        color: black;
        background: #e6e6e6;
        text-decoration: none;
        box-shadow: -10px 0px 0px #e6e6e6, 10px 0px 0px #e6e6e6;
      }
      span:hover {
        background: #262626;
        color: white;
        box-shadow: -10px 0px 0px #262626, 10px 0px 0px #262626;
      }
      span:after {
        position: relative;
        line-height: 1.6em;
        background: #ffdb00;
      }        
    `}</style>
      <img style={thumbnailLabors} src={props.image}/>
      <p><span>{props.teaser}</span></p>
    </div>
  );
}

Labors.propTypes = {
  image: PropTypes.string,
  teaser: PropTypes.string,
};

export default Labors;