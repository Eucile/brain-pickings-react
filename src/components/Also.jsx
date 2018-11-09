import React from "react";

function Also(){
  return(
    <ul>
    <style global jsx>{`
      span {
        line-height: 1.8em;
        color: black;
        background: #e6e6e6;
        text-decoration: none;
        box-shadow: -10px 0px 0px #e6e6e6, 10px 0px 0px #e6e6e6;
        }
        ul {
          list-style: none;
        }
        a {
          text-decoration: none;
        }
        span:hover {
        background: #262626;
        color: white;
        box-shadow: -10px 0px 0px #262626, 10px 0px 0px #262626;
      }
    `}</style>
      <li><a href="#"><span>figuring</span></a></li>
      <li><a href="#"><span>live events</span></a></li>
      <li><a href="#"><span>bookshelf</span></a></li>
      <li><a href="#"><span>literary jukebox</span></a></li>
      <li><a href="#"><span>original art</span></a></li>
      <li><a href="https://soundcloud.com/brainpicker/"><span>sounds</span></a></li>
      <li><a href="#"><span>bites</span></a></li>
    </ul>
  );
}

export default Also;
