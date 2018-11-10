import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Favorite(props){
  var thumbnail = {
    width: 180,
  };
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
      <img style={thumbnail} src={props.image}/>
      <a href={props.url}><p><span>{props.teaser}</span></p></a>
    </div>
  );
}

Favorite.propTypes = {
  image: PropTypes.string,
  teaser: PropTypes.string,
  url: PropTypes.string,
};

export default Favorite;